import cookie from "cookie";
import moment from "moment";
import gql from "graphql-tag";
import View from "./view";
import { Mutation, ApolloConsumer } from "react-apollo";
import { get } from "lodash";
import cache from "lib/cache";
import { withHandlers, withProps, withState, compose } from "recompose";

const SENT_CODE = "sentCode";

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
  const tokenCookie = cookie.serialize("token", data.auth.token, {
    expires: moment()
      .add("1", "year")
      .toDate(),
    path: "/"
  });
  document.cookie = tokenCookie;
  client.resetStore();
  props.onAuthCompleted();
};

const Login = props => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={AUTH} onCompleted={onAuthCompleted(client, props)}>
        {(auth, { data, error: authError, loading: authLoading }) => (
          <Mutation mutation={SIGNUP_IN}>
            {(signUpIn, { data: signUpInData, loading: signupInLoading }) => (
              <View
                {...props}
                onSignUpIn={email => {
                  signUpIn({
                    variables: { email }
                  });
                  props.onSignUpIn(email);
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

Login.defaultProps = {
  onSignUpIn: () => {},
  onAuthCompleted: () => {},
  onSendCodeAgain: () => {}
};

// Mehorar esto!

const enhace = compose(
  withState("random", "setRandom", null),
  withProps(props => {
    return {
      email: cache.get(SENT_CODE) || props.email,
      step: cache.get(SENT_CODE) ? "insertCode" : props.step
    };
  }),
  withHandlers({
    onSignUpIn: props => email => {
      cache.set(SENT_CODE, email, 60);
      props.setRandom(12)
    },
    onAuthCompleted: props => () => {
      cache.del(SENT_CODE);
    },
    onSendCodeAgain: props => () => {
      cache.del(SENT_CODE);
      props.onSendCodeAgain && props.onSendCodeAgain()
      props.setRandom(12)
    }
  })
);

export default enhace(Login);
