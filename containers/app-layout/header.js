import { AppHeader, TitleContainer, MenuIconContainer } from "./header.styled"
import IsoLogo from "./isologo.svg"
import MenuIcon from "./menu-icon.svg"

export default ({title, onOpenMenu}) => (
  <AppHeader>
      <IsoLogo height="52px" />
      <TitleContainer>
        {title}
      </TitleContainer>
      <MenuIconContainer onClick={onOpenMenu}>
        <MenuIcon height="20px" />
      </MenuIconContainer>
    </AppHeader>
)