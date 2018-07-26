import styled from "styled-components"

export const RootContainer = styled.div`
  padding: 50px 25px;
  background-color: ${props=>props.theme.colors.main};
  color: white;
  display:flex;
  flex-direction:column;
  align-items: center;
`

export const SellYouFoodTitle = styled.p`
  font-size: 33px;
`

export const SellYouFoodIntro = styled.p`
  text-align:justify;
  font-size:16px;
  margin: 40px 0;
  max-width:500px;
`