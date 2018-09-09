import Head from 'next/head'
import AppLayout from '../containers/app-layout';
import EditFood from '../containers/edit-food';
import {pick} from "lodash"

const EditFoodPage = ({id, edit}) => (
  <div>
    <Head>
      <title>{id ? "Editar" : "Publicar"} Comida</title>  
    </Head>
    <AppLayout>
      <EditFood id={id} edit={edit} />
    </AppLayout>
  </div>
);

EditFoodPage.getInitialProps = (ctx) => pick(ctx.query,['id','edit'])

EditFoodPage.propTypes = {
  
};

export default EditFoodPage;