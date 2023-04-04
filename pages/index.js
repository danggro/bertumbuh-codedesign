import SectionBerita from "@/components/Homepage/Berita/SectionBerita";
import SectionSubscribe from "@/components/Homepage/Berita/SectionSubscribe";
import SectionButuh from "@/components/Homepage/Butuh/SectionButuh";
import SectionButuh2 from "@/components/Homepage/Butuh2/SectionButuh2";
import SectionFooter from "@/components/Homepage/Footer/SectionFooter";
import SectionHero from "@/components/Homepage/Hero/SectionHero";
import NavBar from "@/components/Homepage/Navigation/NavBar";
import SectionTentang from "@/components/Homepage/Tentang/SectionTentang";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bertumbuh | Bring Green Back</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionTentang />
      <SectionButuh />
      <SectionButuh2 />
      <SectionBerita />
      <SectionSubscribe />
      <SectionFooter />
    </>
  );
}