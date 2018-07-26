import { PureComponent } from 'react';
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
              'Comidas cerca de aquí' :
              'Comidas cerca de ' + near
          }
        </h1>
        {
          error ?
            <h2>{error}</h2>
            :
            foods.length ?
              <div>
                {foods.map(food => (
                  <div key={food.id}>
                    id + {food.id}
                    <FoodCard {...food}></FoodCard>
                  </div>
                ))}
              </div>
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
  foods: []
}

export default Container;