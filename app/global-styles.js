import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    color: #222;
  }

  body, input, button {
    /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
    font-family: 'Muli', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Muli', sans-serif;
    /* font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Vollkorn', serif;
    line-height: 1.5em;
  }
`;
