import MainAbout from "@/components/AboutUs/MainAbout";
import Container from "@/components/Container";
import HeadPage from "@/components/HeadPage";
import Layout from "@/components/Layout";

export default function aboutus() {
  return (
    <>
      <Layout>
        <HeadPage>tentang-kami</HeadPage>
        <Container>
          <MainAbout />
        </Container>
      </Layout>
    </>
  );
}
