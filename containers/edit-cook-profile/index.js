import { Form, InputContainer } from "./styled";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { FieldSet, Label, SubLabel } from "components/fieldset";
import { InputDark, TextAreaDark } from "components/input-text";
import InputSelect from "components/input-select";
import { SecondaryButton } from "components/button";
import { PageContainer, PageContent } from "components/boxes";
import { withHandlers } from "recompose";
import WithMe from "containers/with-me";
import { PageTitle, PageSubTitle } from "components/text";
import SearchAddress from "components/search-address";

const enhace = withHandlers({
  onSubmit: props => e => {
    const newData = {
      fullName: e.target.fullName.value,
      bio: e.target.bio.value
    };
    props.onUpdateUser(newData);
    e.preventDefault();
  }
});

const View = enhace(({ subtitle, me, onSubmit, updating }) => (
  <PageContainer light={true}>
    <PageContent>
      <PageTitle>Editar mi perfil de cocinero</PageTitle>
      {subtitle && <PageSubTitle>{subtitle}</PageSubTitle>}
      <Form onSubmit={onSubmit}>
        <FieldSet>
          <Label required>Nombre Completo</Label>
          <InputDark name="fullName" defaultValue={me.fullName} />
        </FieldSet>

        <FieldSet>
          <Label>Algo sobre vos</Label>
          <TextAreaDark name="bio" defaultValue={me.bio} />
        </FieldSet>

        <FieldSet>
          <Label>Zona de repartos</Label>
          <SubLabel>
            Elegí la zona que más te guste para vender tus comidas. 
            Recomendamos que sea cerca de tu cocina.
          </SubLabel>
          <InputSelect>
            <option value={1}>1 kilometro alrededor de</option>
            <option value={2}>2 kilometros alrededor de</option>
          </InputSelect>
          <InputContainer>
            <SearchAddress />
          </InputContainer>
        </FieldSet>

        <FieldSet>
          <SecondaryButton disabled={updating}>
            {updating ? "Guardando ..." : "Continuar"}
          </SecondaryButton>
        </FieldSet>
      </Form>
    </PageContent>
  </PageContainer>
));

export const UPDATE_ME = gql`
  mutation updateUser($id: ID!, $fullName: String!, $bio: String!) {
    updateUser(fullName: $fullName, id: $id, bio: $bio) {
      id
      fullName
      bio
    }
  }
`;

const WithUpdateMe = props => (
  <WithMe>
    {({ me, query }) => (
      <Mutation
        mutation={UPDATE_ME}
        refetchQueries={[{ query }]}
        onCompleted={props.onCompleted}
      >
        {(updateUser, { loading }) => (
          <View
            {...props}
            me={me}
            updating={loading}
            onUpdateUser={data =>
              updateUser({
                variables: {
                  id: me.id,
                  ...data
                }
              })
            }
          />
        )}
      </Mutation>
    )}
  </WithMe>
);

WithUpdateMe.defaultProps = {
  onCompleted: (a, b, c) => {
    console.log(a, b, c);
  }
};

export default WithUpdateMe;
