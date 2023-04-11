import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import Link from "next/link";

export default function SectionButuh() {
  return (
    <section id="Butuh" className="xl:mt-[150px] md:mt-[120px] mt-[100px]">
      <Container>
        <div className="flex md:flex-row flex-col xl:space-x-0 md:space-x-[18px]">
          <div className="order-last md:w-6/12 md:order-first md:mt-0 mt-[30px]">
            <div className="w-10/12">
              <HeadSection
                sect="Kami Butuh Kamu"
                title="Kenapa BERTUMBUH Butuh Kamu?"
              />
            </div>
            <div className="xl:mt-[30px] mt-5 xl:mb-10 mb-[25px] flex xl:space-x-[87px] space-x-7">
              <div>
                <h5 className="text-black/80 font-medium xl:text-[32px] text-2xl">
                  15,3 M
                </h5>
                <p className="text-lg xl:text-xl text-secondary">
                  Pohon ditebang
                </p>
              </div>
              <div>
                <h5 className="text-black/80 font-medium xl:text-[32px] text-2xl">
                  14,7 Ha
                </h5>
                <p className="text-lg xl:text-xl text-secondary">
                  Hutan ditebang
                </p>
              </div>
            </div>
            <p className="xl:w-10/12 md:pr-1 xl:text-xl text-lg text-justify xl:mb-[70px] text-secondary mb-10">
              15,3 Milyar pohon setiap tahun ditebang di dunia serta hilangnya
              14,7 hektare lahan hutan hilang di indonesia. Hali ini menyebabkan
              bumi tidak stabil dan kami mengajak kamu untuk bergabung dan
              meraih tujuan bersama
            </p>
            <Link href="/reg">
              <Button>Gabung Bertumbuh</Button>
            </Link>
          </div>
          <div className="md:w-6/12 bg-[url('/butuh.png')] xl:h-auto h-[353px] bg-cover xl:bg-contain xl:bg-no-repeat xl:bg-right"></div>
        </div>
      </Container>
    </section>
  );
}
