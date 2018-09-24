
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import withApollo from 'lib/withApollo'
import withGeoIp from 'lib/withGeoIp'
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
const AppWithGeo = withGeoIp(MyApp)
const AppWithApollo = withApollo(AppWithGeo)

export default AppWithApollo