import PropTypes from "prop-types";
import PLACEHOLDER_IMAGE_URL from "./placeholder-img";
import SandGlassIcon from "components/icons/hourglass.svg";
import CookIcon from "components/icons/hat.svg";
import BikeIcon from "components/icons/bicycle.svg";
import FoodBagIcon from "components/icons/food-bag.svg";

import {
  Card,
  ImageContainer,
  InfoContainer,
  ItemsLeft,
  Title,
  Price,
  ItemContainer,
  ItemIcon,
  ItemInfo,
  Stars,
  ItemsRow,
  LikeIcon,
  EditButton,
  NextDatesSection,
  NextDatesTitle
} from "./styled";

const FoodCard = ({ title, price, ownerView }) => (
  <Card>
    <InfoContainer>
      {ownerView ? <EditButton /> : <LikeIcon />}
      <Title>{title}</Title>

      <ItemContainer>
        <ItemIcon>
          <CookIcon />
        </ItemIcon>
        <ItemInfo>
          <div>Mariana Fernandez</div>
          <Stars value={3} edit={false} />
        </ItemInfo>
      </ItemContainer>

      <ItemsRow>
        <ItemContainer>
          <ItemIcon>
            <FoodBagIcon />
          </ItemIcon>
          <ItemInfo>
            <div>Se reparte a las 13:00</div>
          </ItemInfo>
        </ItemContainer>

        <ItemContainer>
          <ItemIcon>
            <SandGlassIcon />
          </ItemIcon>
          <ItemInfo>
            <div>Podés pedir hasta las 11:00</div>
          </ItemInfo>
        </ItemContainer>
      </ItemsRow>
      <ItemsLeft>QUEDAN 12</ItemsLeft>
      <Price>{price.toFixed(2)}</Price>
      <NextDatesSection>
        <NextDatesTitle>Próximas fechas:</NextDatesTitle>
      </NextDatesSection>
    </InfoContainer>
    <ImageContainer bg={PLACEHOLDER_IMAGE_URL} />
  </Card>
);

FoodCard.defaultProps = {
  title:'',
  ownerView: false,
  price: 0
};

FoodCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ownerView: PropTypes.bool
};

export default FoodCard;
