import {InputButtonBox} from "components/boxes"
import Color from "color"

export const Button = InputButtonBox.withComponent("button").extend`
  background-color: initial;
  border: initial;
  background-color:${props=>props.theme.colors[props.type || "main"]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  
  &[disabled]{
    background-color: ${props=>props.theme.colors.secondary};
    color: ${props=>props.theme.colors[props.type || "main"]};
  }
`

export const SecondaryButton = Button.extend`
  background-color: ${props=>props.theme.colors.aquaDark};

  &[disabled]{
    background-color: ${props=>props.theme.colors.aquaDark};
    color: ${props=>Color(props.theme.colors.aquaDark).darken(0.3).hsl().string()};
  }
`

export const AuxButton = Button.extend`
  background-color: ${props=>props.theme.colors.gray};
`

export default Button