import styled from "styled-components"

export const FieldSet = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 3px;

  &:after{
    content: "${props=>props.required ? ' *':'' }";
    color: ${props=>props.theme.colors.coral};
  }
`
export const SubLabel = styled(Label)`
  color: ${props=>props.theme.colors.aquaDark};
  font-size: 14px;
  margin-bottom: 4px;
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