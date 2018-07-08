import {
  Root,
  StyledLogoTipo,
  LogoTipoContainer,
  IntroText,
  NearMeSection,
  StyledLocationIcon
} from "./styled"
import Button from "../button"

export default () => (
  <Root>
    <LogoTipoContainer>
      <StyledLogoTipo />
    </LogoTipoContainer>

    <IntroText>
      Encontrá los mejores cocineros de tu barrio, del mundo.
    </IntroText>

    <NearMeSection>
      <Button>
        <StyledLocationIcon></StyledLocationIcon>
        Cerca de mi ubicación actual
      </Button>
    </NearMeSection>

  </Root>
)