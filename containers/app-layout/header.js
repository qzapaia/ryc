import { AppHeader, TitleContainer, MenuIconContainer } from "./header.styled"
import IsoLogo from "./isologo.svg"
import MenuIcon from "./menu-icon.svg"
import Link from 'next/link'

export default ({ title, onOpenMenu }) => (
  <AppHeader>
    <Link href="/">
      <a>
        <IsoLogo height="72px" />
      </a>
    </Link>
    <TitleContainer>
      {title}
    </TitleContainer>
    <MenuIconContainer onClick={onOpenMenu}>
      <MenuIcon height="20px" />
    </MenuIconContainer>
  </AppHeader>
)