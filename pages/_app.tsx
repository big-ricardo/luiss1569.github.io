import React, { useState } from "react";
import { AppProps } from "next/app";
import GlobalStyle from "@/src/styles/globalstyle";
import ThemeProvider from "@/src/contexts/themeContext";
import NProgress from "nprogress";
import Router from "next/router";
import { AnimateSharedLayout } from "framer-motion";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider>
        <AnimateSharedLayout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AnimateSharedLayout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
