import styled from "styled-components"

export const Button = styled.button`
  background-color: initial;
  border: initial;
  background-color:${props=>props.theme.colors[props.type || "main"]};
  font-size: 16px;
  min-width: 285px;
  padding: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`