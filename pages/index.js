import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import HomeContainer from '../containers/home';

const HomePage = () => (
  <div>
    <Head>
      <title>Rico y Casero</title>  
    </Head>
    <AppLayout>
      <HomeContainer />
    </AppLayout>
  </div>
);

export default HomePage;