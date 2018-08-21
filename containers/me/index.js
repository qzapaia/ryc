import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import OnlyUsers from "containers/only-users";
import Input from "components/input-text";

const ME = gql`
  query {
    me {
      id
      fullName
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($fullName: String!, $myId: ID!) {
    updateUser(fullName: $fullName, id: $myId) {
      fullName,
      id
    }
  }
`;

const View = ({ me, onUserUpdate }) => (
  <div>
    <h2>Primer Nombre:</h2>
    <div>
      <Input
        value={me.fullName}
        onChange={e => onUserUpdate({ fullName: e.target.value })}
      />
    </div>
  </div>
);

export default ({ firstTime }) => (
  <OnlyUsers redirect="/me">
    <Query query={ME}>
      {({ loading, data, error }) => (
        console.log(loading, data, error) ||
        <Mutation mutation={UPDATE_USER}>
          {(updateUser) => {
            console.log(data)
            const onUserUpdate = user => updateUser({
              variables: {
                ...user,
                myId: data.me.id
              }
            })

            return (
              <View
                me={data.me || ""}
                onUserUpdate={onUserUpdate}
              />
            );

          }}
        </Mutation>
      )}
    </Query>
  </OnlyUsers>
);
