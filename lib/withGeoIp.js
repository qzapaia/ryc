const dev = process.env.NODE_ENV == "development";
const MOCK_IP = "152.170.64.7";

export default App => {
  return class WithGeoIp extends React.Component {
    static async getInitialProps (ctx) {
      const { ctx: { req, res } } = ctx
      let appProps = {};
      let userGeoByIp;

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      if (req) {
        const geoip = require("geoip-lite");
        const ip = dev ? MOCK_IP : req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        
        userGeoByIp =  geoip.lookup(ip);
      }
      
      return {
        ...appProps,
        pageProps:{
          ...appProps.pageProps,
          userGeoByIp
        }
      }
    }
    
    render () {
      return <App {...this.props} />
    }
  }
}