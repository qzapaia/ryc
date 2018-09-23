import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  display: flex;
`;

export const InfoContainer = styled.div`
  padding: 15px;
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 21px;
  margin-bottom: 5px;
`;

export const Price = styled.h2`
  font-size: 32px;
  margin-top: 10px;
`;


export const ImageContainer = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  width: 150px;
  position: relative;

  @media (max-width: ${props => props.theme.screens.small}px) {
    display: none;
  }
`;


export const PriceTag = styled.div`
  padding: 10px;
  width: 120px;
  position: absolute;
  right: 0;
  bottom: 20px;
  background-color: ${props => props.theme.colors.main};
  color: white;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 1px;
`;