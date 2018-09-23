import PropTypes from "prop-types";
import PLACEHOLDER_IMAGE_URL from "./placeholder-img";
import Cook from "./cook"
import DeliveryDates from "./dates"
import {
  Card,
  ImageContainer,
  InfoContainer,
  PriceTag,
  Title,
  Price
} from "./styled";


const Comp = ({ title, price }) => (
  <Card>
    <InfoContainer>
      <Title>{title}</Title>
      <Cook />
      <DeliveryDates />
      <PriceTag>QUEDAN 2</PriceTag>
      
      <Price>${(price).toFixed(2)}</Price>
    </InfoContainer>
    <ImageContainer bg={PLACEHOLDER_IMAGE_URL} />
  </Card>
);

Comp.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Comp;
