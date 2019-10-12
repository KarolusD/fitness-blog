import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Red+Hat+Display:700,900|Red+Hat+Text&display=swap&subset=latin-ext');

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
    font-family: 'Red Hat Text', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    background: #F5F7FD;
    overflow-x: hidden;
    width: 100%;
    height: 100%; 
  }

  .lock-scroll {
    overflow: hidden; 
    
  }

  #___gatsby {
    overflow-x: hidden;
  }
  
`

export default GlobalStyle
