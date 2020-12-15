import { createGlobalStyle } from 'styled-components';

import shape from '../assets/shape.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EFFAFA url(${shape}) no-repeat;
    background-size: cover;
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Spartan, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
