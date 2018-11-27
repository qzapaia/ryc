import Head from "next/head";
import AppLayout from "../containers/app-layout";
import LoginContainer from "containers/login";
import {pick} from "lodash";
import Router from 'next/router'

const onAuthCompleted = () => {
  Router.push("/?welcome");
}

const onSendCodeAgain = () => {
  Router.push("/login");
}

const LoginPage = (props) => (
  <div>
    <Head>
      <title>Rico y Casero</title>
    </Head>
    <AppLayout>
      <LoginContainer 
        onAuthCompleted={onAuthCompleted}
        onSendCodeAgain={onSendCodeAgain}
        {...props} 
      />
    </AppLayout>
  </div>
);

LoginPage.getInitialProps = (ctx) => pick(ctx.query,['step','email'])

export default LoginPage;
