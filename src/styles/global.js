import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  a::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    list-style-type: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {   
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }
  
  button, a {
    cursor: pointer;
    transition: filter 0.2s;    
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;