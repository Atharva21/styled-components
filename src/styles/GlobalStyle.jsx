import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    font-family: system-ui, Helvetica, Sans-Serif;
  }
`;
