import HeadPage2 from "@/components/HeadPage2";
import Layout from "@/components/Layout";
import MainRegis from "@/components/Registration/MainRegis";
import Head from "next/head";

export default function reg() {
  return (
    <>
      <Head>
        <title>Pendaftaran dan Donasi</title>
      </Head>
      <Layout>
        <HeadPage2>pendaftaran-dan-donasi</HeadPage2>
        <MainRegis />
      </Layout>
    </>
  );
}
