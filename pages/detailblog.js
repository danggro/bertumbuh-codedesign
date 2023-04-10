import Container from "@/components/Container";
import AlsoRead from "@/components/DetailBlog/AlsoRead";
import Author from "@/components/DetailBlog/Author";
import MainDetail from "@/components/DetailBlog/MainDetail";
import HeadPage from "@/components/HeadPage";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function detailblog() {
  return (
    <>
      <Head>
        <title>Detail Artikel</title>
      </Head>
      <Layout>
        <HeadPage>detail-artikel</HeadPage>
        <Container>
          <div className="mx-auto md:w-8/12">
            <MainDetail />
            <AlsoRead />
            <Author />
          </div>
        </Container>
      </Layout>
    </>
  );
}
