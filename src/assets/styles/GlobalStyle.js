import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'
import animate from 'animate.css/animate.min.css'

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
  
  /* ${animate} */

  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-100px) 
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }

  @keyframes fadeInBottom {
    0% {
      opacity: 0;
      transform: translateY(100px) 
    }
    100% {
      opacity: 1;
      transform: translateY(0)
    }
  }

  @keyframes fadeInLeftWow {
    0% {
      opacity: 0;
      transform: translateX(-50px)
      
    }
    100% {
      opacity: 1;
      transform: translateX(0)
      
    }
  }

  .fadeInBottom {
    animation: fadeInBottom 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;
  }

  .fadeInBottomEaseOut {
    animation: fadeInBottom 200ms ease-out both;
  }

  .fadeInTop {
    animation: fadeInTop 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;
  }

  .fadeInLeftWow {
    animation: fadeInLeftWow 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;
  }

  @keyframes scaleUp {
    0% {
      opacity: 0;
      transform: scale(0.7);
      transform-origin: bottom;
    }
    100% {
      opacity: 1;
      transform: scale(1)
    }
  }

  .scaleUp {
    animation: scaleUp 200ms cubic-bezier(0.51, 0.84, 0.32, 1.19) both;
  }

  
`

export default GlobalStyle
