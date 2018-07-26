import { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import View from './';
import { Mutation } from "react-apollo";

const dev = process.env.NODE_ENV == 'development';

const LOGIN = gql`
  mutation login($email: String!, $dev: Boolean, $redirect: String) {
    auth(
      email: $email,
      dev: $dev,
      redirect: $redirect
    ) {
      message
    }
  }
`;

export default ({redirect, loginMessage}) => (
  <Mutation mutation={LOGIN}>
    {(login,{loading})=>(
      <div>
        <View
          onLogin={email=>login({
            variables:{
              email,
              dev,
              redirect
            }
          })}
          loginMessage={loginMessage}
          loading={loading}
        />
      </div>
    )}
  </Mutation>
)