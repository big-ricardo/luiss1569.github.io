import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "@/src/styles/theme";


export const  ThemesContext = createContext(null);

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const ToggleTheme = () => {
    setTheme(prev => prev.title ? themes.light : themes.dark);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme( localTheme ? themes[localTheme] : themes.light);
  }, []);

  useEffect(() => {
    if(theme) {
      localStorage.setItem("theme", theme.title ? 'dark' : 'light');
    }
  }, [theme]);

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme: ToggleTheme }}>
      {theme && (
        <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      )}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
