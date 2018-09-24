import WithMe from "containers/with-me";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { FoodList } from "./styled";
import FoodCard from "components/food-card";
import { PageContainer, PageContent } from "components/boxes";

const ALL_MY_FOODS = gql`
  query allMyFoods($myId: ID!) {
    allFoods(filter: { cook: { id: $myId } }) {
      id
      title
      price
      description
    }
  }
`;

const View = ({ foods }) => (
  <PageContainer>
    <PageContent>
      <FoodList>
        {foods.map(f => (
          <FoodCard ownerView={true} key={f.id} {...f} />
        ))}
      </FoodList>
    </PageContent>
  </PageContainer>
);

export default () => (
  <WithMe>
    {({ me }) => (
      <Query query={ALL_MY_FOODS} variables={{ myId: me.id }}>
        {({ loading, error, data }) =>
          !loading && !error ? (
            <View foods={data.allFoods} />
          ) : (
            <div>Loading</div>
          )
        }
      </Query>
    )}
  </WithMe>
);
