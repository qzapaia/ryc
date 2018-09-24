import styled from "styled-components"

export const InputButtonBox = styled.button`
  padding: 15px;
  font-size: 16px;
  border: none;
  min-width: 285px;
`

export const PageContainer = styled.div`
  padding: 10px;
  min-height:100vh;
  background-color: ${props=>props.light ? 'inherit':  props.theme.colors.grayLight};
`

export const PageContent = styled.div`
  margin:0 auto;
  max-width:768px;
`
