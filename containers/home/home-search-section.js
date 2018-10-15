import {
  Root,
  StyledLogoTipo,
  LogoTipoContainer,
  IntroText,
  NearMeSection,
  StyledLocationIcon,
  SearchByAddressSection,
  SearchByAddressButtonContainer
} from "./home-search-section.styled";
import { Button, SecondaryButton } from "components/button";
import Input from "components/input-text";

const preventDefault = next => e => e.preventDefault() || next();

export default ({
  onSearchNearHere,
  disableSearch,
  onAddressChange,
  address,
  onSearchByAddress
}) => (
  <Root>
    <LogoTipoContainer>
      <StyledLogoTipo />
    </LogoTipoContainer>

    <IntroText>
      Encontrá los mejores cocineros de tu barrio, del mundo.
    </IntroText>

    <NearMeSection>
      <Button onClick={onSearchNearHere} disabled={disableSearch}>
        <StyledLocationIcon />
        <span>Cerca de mi ubicación actual</span>
      </Button>
    </NearMeSection>

    <SearchByAddressSection onSubmit={preventDefault(onSearchByAddress)}>
      <Input
        placeholder="Rivadavía 7123"
        onChange={onAddressChange}
        value={address}
      />

      <SearchByAddressButtonContainer>
        <SecondaryButton>Buscar por dirección</SecondaryButton>
      </SearchByAddressButtonContainer>
    </SearchByAddressSection>
  </Root>
);
