import gql from 'graphql-tag'
import { Query } from "react-apollo";

const ME = gql`
  query{
    me{
      id,
      email
    }
  }
`;

export default () => (
  <div>
    <h1>me</h1>
    <Query query={ME}>
      {({loading, data, error})=>(
        <div>
          error: {error} <br/>
          loading: {loading} <br/>
          me: {JSON.stringify(data.me)}
        </div>
      )}
    </Query>
  </div>
)
