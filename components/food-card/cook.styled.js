import styled from "styled-components";
import HatIcon from "components/icons/hat.svg";
import ReactStars from 'react-stars'

export const Cook = styled.div`
  display: flex;
  margin-top:5px;
`;


export const CookIcon = styled(HatIcon)`
  height: 17px;
  margin-right: 5px;
  * {
    fill:black;
  }
`;

export const CookName = styled.div`
  font-size: 14px;
  font-weight: normal;
`;

export const CookRating = styled.div`
  background-color: yellow;
  height: 10px;
  width: 40px;
  margin-left: 18px;
  display: inline-block;
`;

export const Stars = styled(ReactStars)`
  & > *{
    font-size: 13px !important;
    margin-right:4px;
    line-height: 1.3;
  }
`