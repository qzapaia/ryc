import styled from "styled-components"
import {InputButtonBox} from "components/boxes"
import Color from "color"

export const Input = styled(InputButtonBox);

Input.defaultProps = {
  as: "input"
}

export const InputDark = styled(InputButtonBox)`
  background-color: ${props=>props.theme.colors.grayLight};
  
  &::placeholder {
    color: ${props=>Color(props.theme.colors.grayLight).darken(0.2).hsl().string()};
  }
`;

InputDark.defaultProps = {
  as: "input"
}

export const TextAreaDark = styled(InputDark)`
  min-height: 200px;
`
TextAreaDark.defaultProps = {
  as:"textarea"
}

export const InputDarkFullWidth = styled(InputDark)`
  width: 100%;
`

export default Input