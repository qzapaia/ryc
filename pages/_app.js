
import App, { Container } from 'next/app'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import withData from '../lib/withData'
import WithStyled from "../containers/with-styled"

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx, ctx:{req} }) {
    let pageProps = {}
    const ip = req && (req.headers['x-forwarded-for'] || req.connection.remoteAddress);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps:{
        ip,
        ...pageProps
      }
    }
  }
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