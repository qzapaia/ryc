import { PureComponent } from 'react';
import { RootContainer, SellYouFoodIntro, SellYouFoodTitle } from "./sell-you-food-section.styled"
import { AuxButton } from "components/button"
import gql from 'graphql-tag'
import { Query } from "react-apollo";
import autoBind from "react-autobind"
import Router from 'next/router'

const ME = gql`
  query{
    me{
      id
    }
  }
`;


class SellYouFood extends PureComponent {
  constructor() {
    super()
    autoBind(this)
  }
  startSelling() {
    const {me} = this.props
    Router.push(me ? '/edit-food' : '/login?redirect=/edit-food')
  }
  render() {
    return (
      <RootContainer>
        <SellYouFoodTitle>
          Vendé tu comida casera
            </SellYouFoodTitle>

        <SellYouFoodIntro>
          Hay pocos cocineros en esta zona.
          Podés ser uno de los primeros.
          Publicá gratis esas comidas que te encanta cocinar,
          recibí los encargos y cociná sólo lo que te pidan.
            </SellYouFoodIntro>

        <div>
          <AuxButton onClick={this.startSelling}>Empezar</AuxButton>
        </div>
      </RootContainer>
    )
  }
}

const SellYouFoodWithData = () => (
  <Query query={ME}>
    {({ data }) => <SellYouFood me={data && data.me} />}
  </Query>
)

export default SellYouFoodWithData