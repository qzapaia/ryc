import { Form } from "./styled";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { FieldSet, Label } from "components/fieldset";
import { InputDark, TextAreaDark } from "components/input-text";
import { SecondaryButton } from "components/button";
import { PageContainer } from "components/boxes";
import { withHandlers } from "recompose";
import WithMe from "containers/with-me";
import { PageTitle, PageSubTitle } from "components/text";

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

const View = enhace(({ subtitle, me, onSubmit }) => (
  <PageContainer>
    <PageTitle>Editar perfil</PageTitle>
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
        <SecondaryButton>Continuar</SecondaryButton>
      </FieldSet>
    </Form>
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
    {({me, query}) => (
      <Mutation mutation={UPDATE_ME} refetchQueries={[{query}]}>
        {(updateUser) => (
          <View
            {...props}
            me={me}
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

export default WithUpdateMe;
