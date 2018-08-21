import Head from "next/head";
import Me from "containers/me";
import AppLayout from "../containers/app-layout";

const MePage = props => (
  <div>
    <Head>
      <title>Rico y Casero</title>
    </Head>
    {props.firstTime ? <Me {...props} />:<AppLayout><Me {...props} /></AppLayout>}
  </div>
);

MePage.getInitialProps = ({ query: { firstTime } }) => ({
  firstTime
});

export default MePage;
