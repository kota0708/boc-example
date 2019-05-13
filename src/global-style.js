import { createGlobalStyle } from 'styled-components';

import easeOutSine from './constants/styles/easing/ease-out-sine';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'URWDINCond';
    src: url('/font/URWDINCond-Regular.eot');
    src: url('/font/URWDINCond-Regular.woff') format('woff'),
          url('/font/URWDINCond-Regular.ttf') format('truetype');
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    line-height: 1.0;
    font-family: 'HelveticaNeue', 'HiraginoSans-W3', '游ゴシック','メイリオ', sans-serif;
    position: relative;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
  }

  li {
    list-style: none;
  }
  
  .fade-enter {
    opacity: 0;
  }
  
  .fade-enter-active {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.6s;
    transition-timing-function: ${easeOutSine};
  }
  
  .fade-exit {
    opacity: 1
  }
  
  .fade-exit-active {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ${easeOutSine};
  }
`;

export default GlobalStyle;
