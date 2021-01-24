import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{ theme: 'light' | 'dark' }>`
  body {
    padding: 30px;
    font-family: "Roboto", sans-serif;
  background-color: ${({ theme }) =>
    theme === 'light' ? ' #FAEEE7' : '#34272A'};    
    color: ${({ theme }) => (theme === 'light' ? '#34272A' : '#FAEEE7')};
    word-break: break-word;
  }
`

export { GlobalStyle }
