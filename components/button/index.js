import styled from "styled-components"
import {InputButtonBox} from "components/boxes"

export const Button = InputButtonBox.withComponent("button").extend`
  background-color: initial;
  border: initial;
  background-color:${props=>props.theme.colors[props.type || "main"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &[disabled]{
    background-color: ${props=>props.theme.colors.secondary};
    color: ${props=>props.theme.colors[props.type || "main"]};
  }
`

export const SecondaryButton = Button.extend`
  background-color: ${props=>props.theme.colors.aquaDark};
`

export default Button