import styled from "styled-components"
import LogoTipo from "../icons/logotipo.svg"

export const Root = styled.div`
  background-color: ${props => props.theme.colors.main};
  width: 295px;
  min-height: 100%;
  box-shadow: 2px 0px 5px 2px rgba(0,0,0,.5);

`

export const StyledLogoTipo = styled(LogoTipo)`
  path{
    fill: white;
  }
`

export const LogoContainer = styled.div`
  padding: 20px;
`

export const MenuItem = styled.button`
  height: 67px;
  border-bottom: solid 1px ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  background-color: initial;
  border: initial;
  padding: 0;
  width: 100%;
`

export const MenuItemIcon = styled.div`
  width: 50px;
`
export const MenuItemText = styled.div`
  color:white;
  font-size: 16px;
  font-family: "KometPro-Light";
  `

export const MenuSearchItem = MenuItem.extend`
  background-color: ${props => props.theme.colors.soft};
  `
export const MenuSearchItemText = MenuItemText.extend`
  margin-left: 15px;
  color: ${props => props.theme.colors.aqua};
  font-size: 14px;
`

