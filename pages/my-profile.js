import Head from "next/head";
import AppLayout from "../containers/app-layout";
import dynamic from "next/dynamic";
import Loading from "components/loading";

const EditCookProfile = dynamic(import("containers/edit-cook-profile"), {
  ssr: false,
  loading: Loading
});

export default () => (
  <div>
    <Head>
      <title>Rico y Casero - Mi Perfil</title>
    </Head>
    <AppLayout title="Mi perfil">
      <EditCookProfile />
    </AppLayout>
  </div>
);
