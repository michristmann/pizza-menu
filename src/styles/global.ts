import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-lightYellow: #F9F5EA;
    --color-highlightOrange: #F4A522;
    --color-highlightGreen: #008943;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-family: "Playfair Display";
    font-weight: 500;
  }

  h2, p, span, strong {
    font-family: "Dosis";
    } 

  h2 {
    font-weight: 400;
  }

  p, span {
    font-weight: 300;
  }

  button, a {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%
    }
  }
`
