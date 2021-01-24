import React from 'react'
import { ThemeProvider } from '../lib/styles/ThemeProvider'
import { GlobalStyle } from '../lib/styles/global'
import { Head } from '../molecules/Head'

const title = 'Your news'
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
