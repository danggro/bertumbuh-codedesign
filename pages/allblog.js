import HeadBlog from "@/components/AllBlog/HeadBlog";
import MainBlog from "@/components/AllBlog/MainBlog";
import PageBlog from "@/components/AllBlog/PageBlog";
import Container from "@/components/Container";
import HeadPage from "@/components/HeadPage";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function allblog() {
  return (
    <>
      <Head>
        <title>Berita, Artikel & Event</title>
      </Head>
      <Layout>
        <HeadPage>semua-postingan</HeadPage>
        <Container>
          <HeadBlog />
          <MainBlog />
          <PageBlog />
        </Container>
      </Layout>
    </>
  );
}
