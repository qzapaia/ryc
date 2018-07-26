
import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'
import WithStyled from "../containers/with-styled"

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <WithStyled>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </WithStyled>
      </Container>
    )
  }
}

export default withData(MyApp)