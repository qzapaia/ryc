import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import LoginContainer from '../containers/login/withData';

const LoginPage = ({redirect}) => (
  <div>
    <Head>
      <title>Rico y Casero</title>  
    </Head>
    <AppLayout>
      <LoginContainer redirect={redirect} />
    </AppLayout>
  </div>
);

LoginPage.getInitialProps = ({ req, query }) => {
  const {
    redirect
  } = query;

  return {
    redirect
  }
}


export default LoginPage;