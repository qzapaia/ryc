import cookie from "cookie"
import moment from "moment"
import gql from "graphql-tag";
import View from "./";
import { Mutation, ApolloConsumer } from "react-apollo";
import { get } from "lodash";

const SIGNUP_IN = gql`
  mutation signUpIn($email: String!) {
    signUpIn(email: $email) {
      message
    }
  }
`;
const AUTH = gql`
  mutation auth($email: String!, $code: String!) {
    auth(email: $email, code: $code) {
      token
    }
  }
`;

const onAuthCompleted = (client, props) => data => {
  const tokenCookie = cookie.serialize('token', data.auth.token, {
    expires:moment().add("1","year").toDate(),
    path: "/"
  });
  document.cookie = tokenCookie;
  client.resetStore();
  props.onAuthCompleted && props.onAuthCompleted();
};

export default props => (
  <ApolloConsumer>
    {client => (
      <Mutation
        mutation={AUTH}
        onCompleted={onAuthCompleted(client, props)}
      >
        {(auth, { data, error: authError, loading: authLoading }) => (
          <Mutation mutation={SIGNUP_IN}>
            {(signUpIn, { data: signUpInData, loading: signupInLoading }) => (
              <View
                {...props}
                onSignUpIn={email => {
                  signUpIn({
                    variables: { email }
                  });
                  props.onSignUpIn && props.onSignUpIn(email);
                }}
                onAuth={(email, code) =>
                  auth({
                    variables: {
                      email,
                      code
                    }
                  })
                }
                authLoading={authLoading}
                signupInLoading={signupInLoading}
                authError={get(
                  authError,
                  "graphQLErrors.0.functionError.message"
                )}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    )}
  </ApolloConsumer>
);
