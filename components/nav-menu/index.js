import {
  Root,
  StyledLogoTipo,
  LogoContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuSearchItem,
  MenuSearchItemText,
  AddMenuItem
} from "./styled"
import SearchIcon from "./search-icon.svg"
import BagIcon from "./bag-icon.svg"
import UserIcon from "components/icons/user.svg"
import Addicon from "components/icons/add.svg"
import Link from 'next/link'

export default ({ onLogout, me }) => (
  <Root>
    <LogoContainer>
      <Link href="/">
        <StyledLogoTipo width="212px" />
      </Link>
    </LogoContainer>
    <div>

      <Link href="/">
        <MenuSearchItem>
          <SearchIcon />
          <MenuSearchItemText>
            BUSCAR
          </MenuSearchItemText>
        </MenuSearchItem>
      </Link>

      <Link href="/">
        <MenuItem>
          <MenuItemIcon>
            <BagIcon />
          </MenuItemIcon>
          <MenuItemText>
            Mis Pedidos
          </MenuItemText>
        </MenuItem>
      </Link>

      <Link href="/edit-food">
        <AddMenuItem>
          <MenuItemIcon>
            <Addicon />
          </MenuItemIcon>
          <MenuItemText>
            PUBLICAR COMIDA
          </MenuItemText>
        </AddMenuItem>
      </Link>

      {me ?
        (
          <MenuItem onClick={onLogout}>
            <MenuItemIcon>
              <BagIcon />
            </MenuItemIcon>
            <MenuItemText>
              Cerrar Sesión
          </MenuItemText>
          </MenuItem>
        ) : (
          <Link href="/login">
            <MenuItem>
              <MenuItemIcon>
                <UserIcon />
              </MenuItemIcon>
              <MenuItemText>
                Mi Perfil / Ingresar
              </MenuItemText>
            </MenuItem>
          </Link>
        )
      }
    </div>
  </Root>
)