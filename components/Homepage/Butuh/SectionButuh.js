import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";

export default function SectionButuh() {
  return (
    <section id="Butuh" className="xl:mt-[150px] md:mt-[120px]">
      <Container>
        <div className="flex xl:space-x-0 md:space-x-[18px]">
          <div className="w-6/12">
            <div className="w-10/12">
              <HeadSection
                sect="Kami Butuh Kamu"
                title="Kenapa BERTUMBUH Butuh Kamu?"
              />
            </div>
            <div className="xl:mt-[30px] md:mt-5 xl:mb-10 md:mb-[25px] flex xl:space-x-[87px] md:space-x-[28px]">
              <div>
                <h5 className="text-black/80 font-medium xl:text-[32px] md:text-2xl">
                  15,3 M
                </h5>
                <p className="xl:text-xl md:text-lg text-secondary">
                  Pohon ditebang
                </p>
              </div>
              <div>
                <h5 className="text-black/80 font-medium xl:text-[32px] md:text-2xl">
                  14,7 Ha
                </h5>
                <p className="xl:text-xl md:text-lg text-secondary">
                  Hutan ditebang
                </p>
              </div>
            </div>
            <p className="xl:w-10/12 pr-1 xl:text-xl md:text-lg text-justify xl:mb-[70px] text-secondary md:mb-10">
              15,3 Milyar pohon setiap tahun ditebang di dunia serta hilangnya
              14,7 hektare lahan hutan hilang di indonesia. Hali ini menyebabkan
              bumi tidak stabil dan kami mengajak kamu untuk bergabung dan
              meraih tujuan bersama
            </p>
            <Button>Gabung Bertumbuh</Button>
          </div>
          <div className="w-6/12 bg-[url('/butuh.png')] bg-contain bg-no-repeat bg-right"></div>
        </div>
      </Container>
    </section>
  );
}
