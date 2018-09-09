import { PureComponent } from 'react';
import { withState } from "recompose"
import { Root, MenuContainer, MenuAnimation } from "./styled"
import Header from "./header"
import Menu from "../../components/nav-menu"
import autoBind from "react-autobind"
import WithMe from "containers/with-me"

class AppLayout extends PureComponent {
  constructor() {
    super()
    autoBind(this)
  }
  logout() {
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.href = "/"
  }
  render() {
    const {
      children,
      title,
      showMenu,
      menuShowed,
      me
    } = this.props;

    return (
      <Root>
        <Header title={title} onOpenMenu={() => showMenu(true)}></Header>
        <MenuContainer show={menuShowed} onClick={() => showMenu(false)}>
          <MenuAnimation show={menuShowed}>
            <Menu
              onLogout={this.logout}
              me={me}
            />
          </MenuAnimation>
        </MenuContainer>

        <div>{children}</div>
        <footer></footer>
      </Root>
    )
  }
}

const AppLayoutWithState = withState("menuShowed", "showMenu", false)(AppLayout)

const AppLayoutWithData = (props) => (
  <WithMe>
    {({ me }) => <AppLayoutWithState {...props} me={me} />}
  </WithMe>
)

export default AppLayoutWithData;