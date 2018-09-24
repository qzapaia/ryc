import { PureComponent } from "react";
import FoodCard from "../../components/food-card";
import { PageContainer, PageContent } from "components/boxes";
import {FoodList} from "./styled"

class Container extends PureComponent {
  render() {
    const { foods, error, near } = this.props;

    return (
      <PageContainer>
        <PageContent>
          <h1>
            {near == "here"
              ? "Comidas cerca de aquí"
              : "Comidas cerca de " + near}
          </h1>
          {error ? (
            <h2>{error}</h2>
          ) : foods.length ? (
            <FoodList>
              {foods.map(food => (
                  <FoodCard {...food} key={food.id} />
              ))}
            </FoodList>
          ) : (
            <h3>Buscando ...</h3>
          )}
        </PageContent>
      </PageContainer>
    );
  }
}

Container.propTypes = {};

Container.defaultProps = {
  foods: []
};

export default Container;
