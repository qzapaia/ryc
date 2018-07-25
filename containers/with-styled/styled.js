import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    box-sizing:border-box;
  }

  body, input, button {
    font-family: "KometPro-Regular", Arial;
    margin: 0;
    outline:none;
  }
  
  h1,h2,h3,h4,h5,h6{
    margin:0;
  }
`;