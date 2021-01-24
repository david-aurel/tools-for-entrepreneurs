import React from 'react'
import { ThemeProvider } from '../lib/styles/ThemeProvider'
import { GlobalStyle } from '../lib/styles/global'
import { Head } from '../molecules/Head'

const title = 'Tools for entrepreneurs'
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Head title={title} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
