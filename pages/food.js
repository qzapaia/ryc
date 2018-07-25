import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import FoodsContainer from "../containers/foods/withData";

const FoodPage = ({near, ip}) => (
  <div>
    <Head>
      <title>Comidas cerca tuyo - Rico y casero</title>  
    </Head>
    <AppLayout>
      IP:{ip}
      <FoodsContainer near={near} />
    </AppLayout>
  </div>
);

FoodPage.getInitialProps = (ctx) => {
  const {
    near
  } = ctx.query;

  return {
    near  
  }
}

FoodPage.propTypes = {
  
};

export default FoodPage;