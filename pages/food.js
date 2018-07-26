import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import FoodsContainer from "../containers/foods/withData";

const dev = process.env.NODE_ENV == "development";
const MOCK_IP = "152.170.64.7";

const FoodPage = ({ near, userGeoByIp }) => (
  <div>
    <Head>
      <title>Comidas cerca tuyo - Rico y casero</title>
    </Head>
    <AppLayout>
      <FoodsContainer near={near} userGeoByIp={userGeoByIp} />
    </AppLayout>
  </div>
);

FoodPage.getInitialProps = ({ req, query }) => {
  const {
    near
  } = query;
  let userGeoByIp;

  if (req) {
    const geoip = require("geoip-lite");
    const ip = dev ? MOCK_IP : req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    userGeoByIp =  geoip.lookup(ip);
  }


  return {
    near,
    userGeoByIp
  }
}

FoodPage.propTypes = {

};

export default FoodPage;