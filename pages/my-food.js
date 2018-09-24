import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import MyFood from "containers/my-food"

export default () => (
  <div>
    <Head>
      <title>Rico y Casero</title>  
    </Head>
    <AppLayout title="Mis comidas">
      <MyFood />
    </AppLayout>
  </div>
)