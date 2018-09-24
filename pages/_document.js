import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage, req }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...page,
      styleTags
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Rico y Casero</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#7e86e9" />
          <meta name="theme-color" content="#7e86e9" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/fonts/komet/komet.css" />
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
          
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}