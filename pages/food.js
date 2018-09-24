import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import FoodsContainer from "../containers/foods/withData";

const FoodPage = (props) => (
  <div>
    <Head>
      <title>Comidas cerca tuyo - Rico y casero</title>
    </Head>
    <AppLayout>
      <FoodsContainer near={props.near} userGeoByIp={props.userGeoByIp} />
    </AppLayout>
  </div>
);

FoodPage.getInitialProps = ({ query }) => {
  const {
    near
  } = query;

  return {
    near
  }
}

FoodPage.propTypes = {

};

export default FoodPage;