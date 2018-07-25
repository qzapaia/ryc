import styled from "styled-components"
import LogoTipo from "components/icons/logotipo.svg"
import LocationIcon from "components/icons/location.svg"
import cloudinary from "lib/cloudinary"

export const Root = styled.div`
  background-image:url(${cloudinary.secureURL("ryc/R_C_homeBack_2x.jpg", { secure: true })});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`

export const LogoTipoContainer = styled.div`
  margin-bottom: 60px;
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
  text-shadow: 0px 0px 5px rgba(150, 150, 150, 1);
`

export const NearMeSection = styled.div`
  margin: 45px 0 0;
`
export const StyledLocationIcon = styled(LocationIcon)`
  margin-right: 5px;
  height: 17px;
`

export const SearchByAddressSection = styled.form`
  margin: 45px 0 0;
`

export const SearchByAddressButtonContainer = styled.div`
  margin-top:10px;
`