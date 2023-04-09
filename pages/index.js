import SectionBerita from "@/components/Homepage/Berita/SectionBerita";
import SectionSubscribe from "@/components/Homepage/Berita/SectionSubscribe";
import SectionButuh from "@/components/Homepage/Butuh/SectionButuh";
import SectionButuh2 from "@/components/Homepage/Butuh2/SectionButuh2";
import SectionFooter from "@/components/Footer/SectionFooter";
import SectionHero from "@/components/Homepage/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionTentang from "@/components/Homepage/Tentang/SectionTentang";
import Head from "next/head";
import SectionButuh2Mobile from "@/components/Homepage/Butuh2Mobile/SectionButuh2Mobile";
import NavBarMobile from "@/components/Navigation/NavBarMobile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bertumbuh | Bring Green Back</title>
      </Head>
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      <SectionHero />
      <SectionTentang />
      <SectionButuh />
      <div className="hidden xl:block">
        <SectionButuh2 />
      </div>
      <div className="xl:hidden">
        <SectionButuh2Mobile />
      </div>
      <SectionBerita />
      <SectionSubscribe />
      <SectionFooter />
    </>
  );
}
