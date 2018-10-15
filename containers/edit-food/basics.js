import { InputDark } from "components/input-text";
import { FieldSet, Label, WithIcon, InputIcon } from "components/fieldset";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";
import { SecondaryButton } from "components/button";
import { Container } from "./styled";
import {PageTitle} from "components/text"
import WithMe from "containers/with-me";

const CREATE_FOOD = gql`
  mutation createFood($title: String!, $price: Int!, $cookId: ID!) {
    createFood(title: $title, cookId: $cookId, price: $price) {
      id
    }
  }
`;

const preventDefaultAnd = next => e => {
  e.preventDefault();
  next(e);
};

const EditBasics = ({ id, onEdit }) => (
  <Container>
    <PageTitle>{id ? "Editar" : "Publicar"} Comida</PageTitle>
    <form
      onSubmit={preventDefaultAnd(e =>
        onEdit(id, {
          title: e.target.title.value,
          price: parseInt(e.target.price.value)
        })
      )}
    >
      <FieldSet>
        <Label>Nombre</Label>
        <InputDark name="title" />
      </FieldSet>

      <FieldSet>
        <Label>Precio</Label>
        <WithIcon>
          <InputIcon>$</InputIcon>
          <InputDark name="price" type="number" />
        </WithIcon>
      </FieldSet>

      <FieldSet>
        <SecondaryButton>Continuar</SecondaryButton>
      </FieldSet>
    </form>
  </Container>
);

export default props => (
  <WithMe>
    {({ me }) => (
      <Mutation mutation={CREATE_FOOD}>
        {createFood => (
          <EditBasics
            {...props}
            onEdit={(id, values) =>
              createFood({
                variables: {
                  ...values,
                  cookId: me.id
                }
              })
            }
          />
        )}
      </Mutation>
    )}
  </WithMe>
);
