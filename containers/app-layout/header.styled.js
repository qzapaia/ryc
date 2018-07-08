import styled from 'styled-components'

export const AppHeader = styled.div`
  display: flex;
  height: 44px; 
  background-color: ${props => props.theme.colors.main};
  padding: 0 10px;
`
export const TitleContainer = styled.div`
  flex:1;
`
export const MenuIconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`