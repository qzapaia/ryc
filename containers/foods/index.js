import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FoodCard from '../../components/food-card';

class Container extends PureComponent {
  render() {
    const {
      foods,
      error,
      near
    } = this.props
    
    return (
      <div>
        <h1>
          {
            near == 'here' ? 
            'Comidas cerca de aquí':
            'Comidas cerca de ' + near
          }
        </h1>
        {
        error ?
          <h2>{error}</h2>
        :
        foods.length ?
          foods.map(food=>(
            <div>
              id + {food.id}
              <FoodCard key={food.id} {...food}></FoodCard>
            </div>
          ))
          :
          <h3>Buscando ...</h3>
        }
        
      </div>
    );
  }
}

Container.propTypes = {

};

Container.defaultProps = {
  foods:[]
}

export default Container;