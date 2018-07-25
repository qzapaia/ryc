import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import EditFoodContainer from '../containers/edit-food';
import {pick} from "lodash"

const EditFoodPage = ({id}) => (
  <div>
    <Head>
      <title>{id ? "Editar" : "Publicar"} Comida</title>  
    </Head>
    <AppLayout>
      <EditFoodContainer id={id} />
    </AppLayout>
  </div>
);

EditFoodPage.getInitialProps = (loc) => pick(loc.query,['id'])

EditFoodPage.propTypes = {
  
};

export default EditFoodPage;