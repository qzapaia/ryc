import gql from "graphql-tag";
import { Query } from "react-apollo";
import Router from "next/router";
import LoginContainer from "containers/login/withData";

const ME = gql`
  query {
    me {
      id
    }
  }
`;

export default ({ loginMessage, children }) => (
  <Query query={ME}>
    {({ loading, data, error }) => {
      if (loading) {
        return <span />;
      } else if (!loading && !error && !data.me) {
        return (
          <LoginContainer loginMessage={loginMessage} />
        );
      } else if (data.me) {
        return children;
      }
    }}
  </Query>
);
