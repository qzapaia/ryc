import Link from "next/link";
import {
  Root,
  StyledLogoTipo,
  LogoContainer,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  MenuSearchItem,
  MenuSearchItemText,
  AddMenuItem,
  LogoutMenuItem,
  GroupTitle
} from "./styled";
import SearchIcon from "components/icons/search-icon.svg";
import BagIcon from "components/icons/bag-icon.svg";
import UserIcon from "components/icons/user.svg";
import Addicon from "components/icons/add.svg";
import LogoutIcon from "components/icons/logout.svg";
import BellIcon from "components/icons/bell.svg";
import HatIcon from "components/icons/hat.svg";

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
          <MenuSearchItemText>BUSCAR</MenuSearchItemText>
        </MenuSearchItem>
      </Link>

      <Link href="/">
        <MenuItem noBorder>
          <MenuItemIcon>
            <BagIcon />
          </MenuItemIcon>
          <MenuItemText>Mis Pedidos</MenuItemText>
        </MenuItem>
      </Link>

      {me && (
        <div>
          <GroupTitle>Cocinero</GroupTitle>
          
          <Link href="/">
            <MenuItem>
              <MenuItemIcon>
                <BellIcon />
              </MenuItemIcon>
              <MenuItemText>Mis encargos</MenuItemText>
            </MenuItem>
          </Link>
          
          <Link href="/my-food">
            <MenuItem>
              <MenuItemIcon>
                <HatIcon />
              </MenuItemIcon>
              <MenuItemText>Mis comidas</MenuItemText>
            </MenuItem>
          </Link>
          
          <Link href="/my-profile">
            <MenuItem>
              <MenuItemIcon>
                <UserIcon />
              </MenuItemIcon>
              <MenuItemText>Mi perfil</MenuItemText>
            </MenuItem>
          </Link>
        </div>
      )}

      <Link href="/edit-food">
        <AddMenuItem>
          <MenuItemIcon>
            <Addicon />
          </MenuItemIcon>
          <MenuItemText>PUBLICAR COMIDA</MenuItemText>
        </AddMenuItem>
      </Link>

      {me ? (
        <LogoutMenuItem noBorder onClick={onLogout}>
          <MenuItemIcon>
            <LogoutIcon />
          </MenuItemIcon>
          <MenuItemText>Cerrar Sesión</MenuItemText>
        </LogoutMenuItem>
      ) : (
        <Link href="/login">
          <MenuItem noBorder>
            <MenuItemIcon>
              <UserIcon />
            </MenuItemIcon>
            <MenuItemText>Mi Perfil / Ingresar</MenuItemText>
          </MenuItem>
        </Link>
      )}
    </div>
  </Root>
);
