import styled from "styled-components";
import ReactStars from 'react-stars'
import HeartIcon from "components/icons/heart-fill.svg";
import EditIcon from "components/icons/edit.svg";
import Color from "color"

export const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  display: flex;
`;

export const InfoContainer = styled.div`
  position: relative;
  padding: 15px;
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 21px;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  display:flex;
  ${props=>!props.nm && `
    margin-top: 10px;
  `}
`

export const ItemIcon = styled.div`
  width:20px;
  margin-right: 5px;
  text-align: center;
  display: flex;
  svg{
    width: 18px;
    height: 18px;
    * {
      fill:black;
    }
  }
`

export const ItemInfo = styled.div`
  flex:1;
  font-size: 14px;
`

export const ItemsRow = styled.div`
  display: flex;
  ${ItemContainer}{
    margin-right: 15px;
  }
  @media (max-width: ${props => props.theme.screens.small}px) {
    flex-direction: column;
  }
`

export const Stars = styled(ReactStars)`
  & > *{
    font-size: 13px !important;
    margin-right:4px;
    line-height: 1.3;
  }
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  width: 200px;
  position: relative;

  @media (max-width: ${props => props.theme.screens.small}px) {
    display: none;
  }
`;

export const LikeIcon = styled(HeartIcon)`
  position: absolute;
  right: 15px;
  top: 15px;
  * {
    fill:${props=>Color(props.theme.colors.gray).lighten(3).hsl().string()};
  }
`

export const ItemsLeft = styled.div`
  padding: 9px;
  width: 110px;
  position: absolute;
  right: 0;
  top: 60px;
  background-color: ${props => props.theme.colors.main};
  color: white;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 1px;
`;

export const Price = styled.h2`
  font-size: 32px;
  margin-top: 15px;
  font-weight: 400;
  letter-spacing: 0;
  &:before{
    content:"$ ";
    font-size:15px;
    vertical-align: middle;
    margin-right: 3px;
  }
`;

export const EditButton = styled(EditIcon)`
  position:absolute;
  right: 15px;
  top: 15px;
  width: 20px;
  * {
    fill:${props=>props.theme.colors.aquaDark}
  }
`
export const NextDatesSection = styled.div`
`

export const NextDatesTitle = styled.h3`
  font-size: 17px;
  font-weight: 500;
  margin-top:15px;
`
