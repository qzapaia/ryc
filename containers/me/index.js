import gql from "graphql-tag";
import {map} from "lodash";
import { Query, Mutation } from "react-apollo";
import WithMe from "containers/with-me";

const UPDATE_USER = gql`
  mutation updateUser($fullName: String!, $myId: ID!) {
    updateUser(fullName: $fullName, id: $myId) {
      fullName
      id
    }
  }
`;

const View = ({ me, onUserUpdate }) => (
  <div>
    <h2>Primer Nombre:</h2>
    <div>
      {map(me, (data, key) => (
        <div key={key}>{key}: {JSON.stringify(data)}</div>
      ))}
    </div>
  </div>
);

export default () => (
  <WithMe askLogin={true}>
    {({ me }) => (
      <Mutation mutation={UPDATE_USER}>
        {updateUser => (
          <View
            me={me}
            onUserUpdate={user =>
              updateUser({
                variables: {
                  ...user,
                  myId: me.id
                }
              })
            }
          />
        )}
      </Mutation>
    )}
  </WithMe>
);
