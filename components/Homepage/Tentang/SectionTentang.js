import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import PlayTentang from "@/components/Logo/PlayTentang";
import tentang from "@/public/tentang.png";
import Image from "next/image";

export default function SectionTentang() {
  return (
    <section id="Tentang" className="mt-[218px]">
      <Container>
        <div className="flex items-center">
          <div className="relative w-6/12">
            <Image src={tentang} alt="" />
            <div className="cursor-pointer rounded-[5px] w-[265px] h-[212px] bg-primary absolute -top-[68px] right-[68px] pt-[37px] group">
              <h5 className="text-base text-center text-white">Lihat Video</h5>
              <div className="flex justify-center mt-[10px]">
                <button className="transition-all group-hover:opacity-60">
                  <PlayTentang />
                </button>
              </div>
            </div>
          </div>
          <div className="w-6/12 pl-5">
            <HeadSection
              sect="Tentang Kami"
              title="BERTUMBUH - Save The World"
            />
            <p className="pr-24 mt-10 mb-20 text-xl text-justify text-secondary">
              BERTUMBUH - Adalah organisasi non-profit yang mempunyai tujuan
              untuk Melindungi, menjaga, merawat, dan melestarikan pohon-pohon
              yang ada di bumi yang kita pijak sekarang
            </p>
            <Button>Lihat Selengkapnya</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
