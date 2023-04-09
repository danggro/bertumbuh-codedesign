import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import PlayTentang from "@/components/Logo/PlayTentang";
import tentang from "@/public/tentang.png";
import Image from "next/image";
import Link from "next/link";

export default function SectionTentang() {
  return (
    <section id="Tentang" className="xl:mt-[218px] md:mt-[45px] mt-[100px]">
      <Container>
        <div className="flex flex-col md:space-x-6 space-y-[30px] md:flex-row xl:items-center md:items-start">
          <div className="relative mt-10 md:w-6/12">
            <div className="xl:w-full w-[317px]">
              <Image src={tentang} alt="" />
            </div>
            <div className="cursor-pointer rounded-[5px] xl:w-[265px] w-[160px] xl:h-[212px] h-[127px] bg-primary absolute xl:-top-[68px] xl:right-[68px] right-[0px] -top-[40px] xl:pt-[37px] pt-[22px] shadow-[10px_10px_30px_rgba(97,112,165,0.3)] group">
              <h5 className="text-xs text-center text-white xl:text-base">
                Lihat Video
              </h5>
              <div className="flex justify-center mt-1 xl:mt-[10px]">
                <button className="transition-all xl:scale-100 origin-top scale-[60%] group-hover:opacity-60 ">
                  <PlayTentang />
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-6/12">
            <HeadSection
              sect="Tentang Kami"
              title="BERTUMBUH - Save The World"
            />
            <p className="mt-5 mb-10 text-lg text-justify xl:mt-10 xl:mb-20 xl:pr-24 xl:text-xl text-secondary">
              BERTUMBUH - Adalah organisasi non-profit yang mempunyai tujuan
              untuk Melindungi, menjaga, merawat, dan melestarikan pohon-pohon
              yang ada di bumi yang kita pijak sekarang
            </p>
            <Link href="/aboutus">
              <Button>Lihat Selengkapnya</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
