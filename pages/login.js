import Head from "next/head";
import AppLayout from "../containers/app-layout";
import LoginContainer from "../containers/login/withData";

const LoginPage = () => (
  <div>
    <Head>
      <title>Rico y Casero</title>
    </Head>
    <AppLayout>
      <LoginContainer />
    </AppLayout>
  </div>
);

export default LoginPage;
