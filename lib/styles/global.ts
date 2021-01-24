import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 30px;
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    word-break: break-word;
  }
`

export { GlobalStyle }
