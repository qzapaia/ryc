import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import WithMe from "containers/with-me";
import View from "./view";

export const UPDATE_ME = gql`
  mutation updateUser(
    $id: ID!
    $fullName: String!
    $bio: String!
    $deliveryCenterAddress: String!
    $deliveryRadiusInMeters: Int!
    $deliveryCenterLocation: Json!
  ) {
    updateUser(
      fullName: $fullName
      id: $id
      bio: $bio
      deliveryRadiusInMeters: $deliveryRadiusInMeters
      deliveryCenterAddress: $deliveryCenterAddress
      deliveryCenterLocation: $deliveryCenterLocation
    ) {
      id
      fullName
      bio
    }
  }
`;

const WithUpdateMe = props => (
  <WithMe>
    {({ me, query }) => (
      <Mutation
        mutation={UPDATE_ME}
        refetchQueries={[{ query }]}
        onCompleted={props.onCompleted}
      >
        {(updateUser, { loading }) => (
          <View
            {...props}
            me={me}
            updating={loading}
            onUpdateUser={data =>
              updateUser({
                variables: {
                  id: me.id,
                  ...data
                }
              })
            }
          />
        )}
      </Mutation>
    )}
  </WithMe>
);

export default WithUpdateMe;
