import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import dynamic from 'next/dynamic'
const EditCookProfile = dynamic(import("containers/edit-cook-profile"))

export default () => (
  <div>
    <Head>
      <title>Rico y Casero - Mi Perfil</title>  
    </Head>
    <AppLayout title="Mi perfil">
      <EditCookProfile />
    </AppLayout>
  </div>
)