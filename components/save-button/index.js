import Button from "components/button";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from {left: -200px; width: 30%;}
    50% {width: 30%;}
    70% {width: 70%;}
    80% { left: 50%;}
    95% {left: 120%;}
    to {left: 100%;}
`;

const StyledButton = styled(Button)`
  overflow: hidden;
  position: relative;
  transition: all 0.5s;
  background-color: ${({ saved, theme }) =>
    saved ? theme.colors.aquaDark : theme.colors.main};
  &:before {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background-color: ${props => props.theme.colors.secondary};
    animation: ${({ saving, saved }) => (saving && !saved ? loading : "")} 2s
      linear infinite;
  }
  &[disabled] {
    background-color: ${props => props.theme.colors.grayMedium};
    color: ${props => props.theme.colors.grayLight};
  }
`;

const Label = styled.span`
  z-index: 1;
`;

const block = e => {
  e.preventDefault();
};

export default ({ touched, onClick, saving, saved }) => (
  <StyledButton
    disabled={!touched}
    onClick={saving || saved ? block : onClick}
    saving={saving}
    saved={saved}
    type="submit"
  >
    <Label>{saved ? "¡Guardado!" : saving ? "Guardando..." : "Guardar"}</Label>
  </StyledButton>
);
