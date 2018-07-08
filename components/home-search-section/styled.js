import styled from "styled-components"
import LogoTipo from "../icons/logotipo.svg"
import cloudinary from "../../lib/cloudinary"
import LocationIcon from "../icons/location.svg"

export const Root = styled.div`
  background-image:url(${cloudinary.secureURL("ryc/R_C_homeBack_2x.jpg", { secure: true })});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoTipoContainer = styled.div`
  padding: 60px 0;
`
export const StyledLogoTipo = styled(LogoTipo)`
  path{
    fill: ${props => props.theme.colors.aqua};
  }
`
export const IntroText = styled.h1`
  font-weight: normal;
  font-size: 23px;
  color: white;
  text-align: center;
  padding: 0 50px;
  text-shadow: 0px 0px 5px rgba(150, 150, 150, 1);
`

export const NearMeSection = styled.div`
  padding: 45px 0;
`
export const StyledLocationIcon = styled(LocationIcon)`
  margin-right: 5px;
  height: 17px;
`