import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  #___gatsby {
    overflow-x: hidden;
  }
  
`

export default GlobalStyle
