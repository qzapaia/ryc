import styled from "styled-components"
import { InputButtonBox } from "components/boxes";

export const Button = styled(InputButtonBox)`
  background-color: initial;
  border: initial;
  background-color: ${props => props.theme.colors[props.type || "main"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &[disabled] {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors[props.type || "main"]};
  }
`;

Button.defaultProps = {
  as: "button"
};

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.aquaDark};

  &[disabled] {
    background-color: ${props => props.theme.colors.grayMedium};
    color: ${props => props.theme.colors.grayLight};
  }
`;

export const AuxButton = styled(Button)`
  background-color: ${props => props.theme.colors.gray};
`;

export default Button;
