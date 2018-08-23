import Head from "next/head";
import AppLayout from "../containers/app-layout";
import LoginContainer from "../containers/login/withData";
import {pick} from "lodash";

const LoginPage = (props) => (
  <div>
    <Head>
      <title>Rico y Casero</title>
    </Head>
    <AppLayout>
      <LoginContainer afterLoginRedirectTo="/?welcome" {...props} />
    </AppLayout>
  </div>
);

LoginPage.getInitialProps = (ctx) => pick(ctx.query,['step'])

export default LoginPage;
