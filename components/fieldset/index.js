import styled from "styled-components"

export const FieldSet = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const Label = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  
  &:after{
    content: "${props=>props.required ? ' *':'' }";
    color: ${props=>props.theme.colors.coral};
  }
`

export const WithIcon = styled.div`
  display: flex;
  input{
    flex:1;
  }
`

export const InputIcon = styled.div`
  width: 50px;
  color:white;
  background-color: ${props=>props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    width: 40px;
  }
`