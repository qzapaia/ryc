import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import FoodsContainer from "../containers/foods/withData";

const FoodPage = ({ near}) => (
  <div>
    <Head>
      <title>Comidas cerca tuyo - Rico y casero</title>  
    </Head>
    <AppLayout>
      <FoodsContainer near={near} />
    </AppLayout>
  </div>
);

FoodPage.getInitialProps = (a,b,c) => {
  const {
    near
  } = a.query;

  return {
    near  
  }
}

FoodPage.propTypes = {
  
};

export default FoodPage;