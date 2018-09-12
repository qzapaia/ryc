import WithMe from "containers/with-me";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_MY_FOODS = gql`
  query allMyFoods($myId: ID!) {
    allFoods(filter: { cook: { id: $myId } }) {
      id,
      title
    }
  }
`;

const View = ({foods}) => (
  <div>
    {foods.map(f=>(
      <div>
        <h3>{f.title}</h3>
        <hr/>
      </div>
    ))}
  </div>
)

export default () => (
  <WithMe>
    {({ me }) => (
      <Query query={ALL_MY_FOODS} variables={{ myId: me.id }}>
        {({ loading, error, data }) =>
          !loading && !error ? <View foods={data.allFoods} /> : <div>Loading</div>
        }
      </Query>
    )}
  </WithMe>
);
