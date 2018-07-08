import React from 'react';
import FoodsContainer from "../containers/foods/withData";

const FoodPage = ({ near}) => (
  <FoodsContainer near={near} />
);

FoodPage.getInitialProps = (a,b,c) => {
  const {
    near
  } = a.query;

  return {
    near  
  }
}

FoodPage.propTypes = {
  
};

export default FoodPage;