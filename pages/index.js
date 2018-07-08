import Head from 'next/head'
import HomeContainer from '../containers/home';
import AppLayout from '../containers/app-layout';

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