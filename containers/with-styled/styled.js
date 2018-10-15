import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    box-sizing:border-box;
  }

  body, input, button, textarea {
    font-family: "KometPro", Arial;
    margin: 0;
    outline:none;
    border: none;
    letter-spacing:-0.5px;
    line-height: 1.4;
  }
  
  h1,h2,h3,h4,h5,h6,p{
    margin:0;
  }
`;