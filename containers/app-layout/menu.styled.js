import styled from "styled-components"
import LogoTipo from "./logotipo.svg"

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