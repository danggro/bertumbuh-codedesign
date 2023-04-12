import BlogPage from "@/components/AllBlog/BlogPage";
import HeadBlog from "@/components/AllBlog/HeadBlog";
import MainBlog from "@/components/AllBlog/MainBlog";
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
          <ul
            id="page"
            className="flex justify-center  space-x-6 xl:space-x-11 mt-[120px]"
          >
            <BlogPage def>1</BlogPage>
            <BlogPage>2</BlogPage>
            <BlogPage>3</BlogPage>
            <BlogPage titik></BlogPage>
            <BlogPage>8</BlogPage>
          </ul>
        </Container>
      </Layout>
    </>
  );
}
