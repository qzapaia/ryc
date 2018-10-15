import Head from "next/head";
import AppLayout from "../containers/app-layout";
import { PageContentCentered, PageContainer } from "components/boxes";
import { PageTitle } from "components/text";
import cloudinary from "lib/cloudinary";
import styled from "styled-components";
import { SecondaryButton } from "components/button";
import Link from "next/link";

const shruggingImgUrl = cloudinary.secureURL("ryc/vintage/shrugging.jpg");

const ImageContainer = styled.div`
  padding: 0 20px;
`;
const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Text = styled.div`
  margin: 20px 0;
`;

export default () => (
  <div>
    <Head>
      <title>Rico y Casero</title>
    </Head>
    <AppLayout title="Mis pedidos">
      <PageContainer>
        <PageTitle>Todavía no hiciste ningún pedido</PageTitle>
        <PageContentCentered>
          <ImageContainer>
            <Image src={shruggingImgUrl} />
          </ImageContainer>
          <Text>¿Que tal si hechamos un vistazo?</Text>
          <Link href="/food?near=here">
            <SecondaryButton>BUSCAR COMIDAS CERCA</SecondaryButton>
          </Link>
        </PageContentCentered>
      </PageContainer>
    </AppLayout>
  </div>
);
