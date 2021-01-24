import React from 'react'
import { lightTheme, darkTheme } from './theme'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { GlobalStyle } from './global'

const ThemeProvider = ({ children }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null })
  const theme = value ? darkTheme : lightTheme
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const body = (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle theme={theme === lightTheme ? 'light' : 'dark'} />
      {children}
    </StyledComponentsThemeProvider>
  )

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div />
  }

  return body
}

export { ThemeProvider }
