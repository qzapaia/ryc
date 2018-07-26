import { injectGlobal } from 'styled-components';

injectGlobal`
  *{
    box-sizing:border-box;
  }

  body, input, button {
    font-family: "KometPro", Arial;
    margin: 0;
    outline:none;
    letter-spacing:-0.5px;
  }
  
  h1,h2,h3,h4,h5,h6,p{
    margin:0;
  }
`;