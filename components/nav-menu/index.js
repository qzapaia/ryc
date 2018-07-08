import {
  Root,
  StyledLogoTipo,
  LogoContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuSearchItem,
  MenuSearchItemText
} from "./styled"
import SearchIcon from "./search-icon.svg"
import BagIcon from "./bag-icon.svg"
import Link from 'next/link'

export default () => (
  <Root>
    <LogoContainer>
      <Link href="/">
        <StyledLogoTipo width="212px" />
      </Link>
    </LogoContainer>
    <div>

      <Link>
        <MenuSearchItem>
          <SearchIcon />
          <MenuSearchItemText>
            BUSCAR
          </MenuSearchItemText>
        </MenuSearchItem>
      </Link>

      <Link>
        <MenuItem>
          <MenuItemIcon>
            <BagIcon />
          </MenuItemIcon>
          <MenuItemText>
            Mis Pedidos
          </MenuItemText>
        </MenuItem>
      </Link>
    </div>
  </Root>
)