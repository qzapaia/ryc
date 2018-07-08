import { withState } from "recompose"
import { Root, MenuContainer } from "./styled"
import Header from "./header"
import Menu from "./menu"
const dev = process.env.NODE_ENV == "development";

export const AppLayout = ({ children, title, showMenu, menuShowed }) => (
  <Root>
    <Header title={title} onOpenMenu={() => showMenu(true)}></Header>
    <MenuContainer show={dev || menuShowed} onClick={() => showMenu(!menuShowed)}>
      <Menu />
    </MenuContainer>
    <div>{children}</div>
    <footer></footer>
  </Root>
)

export default withState("menuShowed", "showMenu", false)(AppLayout)