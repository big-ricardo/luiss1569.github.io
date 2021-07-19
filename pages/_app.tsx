import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/src/styles/globalstyle'
import themes from '@/src/styles/theme'
import NProgress from 'nprogress'
import Router from 'next/router'
import { AnimateSharedLayout } from 'framer-motion'

Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [theme, setTheme] = useState(themes.light)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const ToggleTheme = () => {
    setTheme(theme.title === '0' ? themes.dark : themes.light)
  }

  return (<>
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <GlobalStyle />
    </ThemeProvider>
  </>
  )
}

export default MyApp
