import {
  RootContainer,
  SellYouFoodIntro,
  SellYouFoodTitle,
  StyledSeparator
} from "./sell-you-food-section.styled";
import { AuxButton } from "components/button";
import Link from "next/link";

export default () => (
  <RootContainer>
    <SellYouFoodTitle>Vendé tu comida casera</SellYouFoodTitle>
    <StyledSeparator />
    <SellYouFoodIntro>
      Podés ser uno de los primeros. <br/> 
      Publicá gratis esas comidas que te encanta cocinar, <br/>
      recibí los encargos y cociná sólo lo que te pidan.
    </SellYouFoodIntro>

    <Link href="/edit-food">
      <AuxButton>Empezar</AuxButton>
    </Link>
  </RootContainer>
);
