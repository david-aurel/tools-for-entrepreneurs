import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.background};
  }
`

export { GlobalStyle }
