import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import View from "./";
import { Mutation, ApolloConsumer } from "react-apollo";
import { get } from "lodash";
import Router from 'next/router'


const dev = process.env.NODE_ENV == "development";

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

const onAuthCompleted = (client, afterLoginRedirectTo) => data => {
  document.cookie = `token=${data.auth.token};path=/`;
  client.resetStore();
  afterLoginRedirectTo && Router.push(afterLoginRedirectTo);
};

export default props => (
  <ApolloConsumer>
    {client => (
      <Mutation mutation={AUTH} onCompleted={onAuthCompleted(client,props.afterLoginRedirectTo)}>
        {(auth, { data, error: authError, loading: authLoading }) => (
          <Mutation mutation={SIGNUP_IN}>
            {(signUpIn, { data: signUpInData }) => (
              <View
                onSignUpIn={email =>
                  signUpIn({
                    variables: { email }
                  })
                }
                onAuth={(email, code) =>
                  auth({
                    variables: {
                      email,
                      code
                    }
                  })
                }
                authLoading={authLoading}
                authError={get(
                  authError,
                  "graphQLErrors.0.functionError.message"
                )}
                {...props}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    )}
  </ApolloConsumer>
);
