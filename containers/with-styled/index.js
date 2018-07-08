import {ThemeProvider} from "styled-components"
import theme from "./theme"
import "./styled"

export default ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)