import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { GlobalStyle } from "./styled";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);
