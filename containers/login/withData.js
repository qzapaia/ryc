import { compose, graphql } from "react-apollo";
import gql from "graphql-tag";
import View from "./";
import { Mutation } from "react-apollo";
import {get} from "lodash";

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

// {console.log(get(authData,'auth.token'), get(signUpInData,'signUpIn.message'))}

const onAuthCompleted = (data) => {
  document.cookie = `token=${data.auth.token};path=/`;
  setTimeout(()=> location.href = '/', 10);
}

export default (props) => (
  <Mutation mutation={AUTH} onCompleted={onAuthCompleted}>
    {(auth, { data: authData, error: authError, loading: authLoading}) => (
      <Mutation mutation={SIGNUP_IN}>
        {(signUpIn, { data: signUpInData }) => (
          <div>
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

              onAuthLoading={authLoading}
              onAuthError={get(authError,'graphQLErrors.0.functionError.message')}
              {...props}
            />
          </div>
        )}
      </Mutation>
    )}
  </Mutation>
);
