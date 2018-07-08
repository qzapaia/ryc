import { withState } from "recompose"
import { Root, MenuContainer, MenuAnimation } from "./styled"
import Header from "./header"
import Menu from "../../components/nav-menu"
const dev = process.env.NODE_ENV == "development";

export const AppLayout = ({ children, title, showMenu, menuShowed }) => (
  <Root>
    <Header title={title} onOpenMenu={() => showMenu(true)}></Header>

    <MenuContainer show={menuShowed} onClick={() => showMenu(false)}>
      <MenuAnimation show={menuShowed}>
        <Menu />
      </MenuAnimation>
    </MenuContainer>

    <div>{children}</div>
    <footer></footer>
  </Root>
)

export default withState("menuShowed", "showMenu", false)(AppLayout)