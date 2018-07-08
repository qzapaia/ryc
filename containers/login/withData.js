import { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Comp from './';
import { Mutation } from "react-apollo";

const dev = process.env.NODE_ENV == 'development';

const LOGIN = gql`
  mutation login($email: String!, $dev: Boolean) {
    auth(
      email: $email,
      dev: $dev
    ) {
      message
    }
  }
`;

export default () => (
  <Mutation mutation={LOGIN}>
    {(login,{loading})=>(
      <div>
        <Comp
          onLogin={email=>login({
            variables:{
              email,
              dev
            }
          })}
          loading={loading}
        />
      </div>
    )}
  </Mutation>
)