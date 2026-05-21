import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* 1. Importamos la fuente ORIGINAL (Circular Std) desde un servidor público */
  @import url('https://fonts.cdnfonts.com/css/circular-std');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000000;
    color: #b3b3b3;
    
    /* 2. Aplicamos la fuente exacta */
    font-family: 'Circular Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* El verde característico de Spotify */
  :root {
    --spotify-green: #1DB954;
    --spotify-black: #121212;
    --spotify-light-black: #282828;
  }
`;