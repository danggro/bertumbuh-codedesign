import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";

export default function SectionButuh() {
  return (
    <section id="Butuh" className="mt-[150px]">
      <Container>
        <div className="flex ">
          <div className="w-6/12">
            <div className="w-10/12">
              <HeadSection
                sect="Kami Butuh Kamu"
                title="Kenapa BERTUMBUH Butuh Kamu?"
              />
            </div>
            <div className="mt-[30px] mb-10 flex space-x-[87px]">
              <div>
                <h5 className="text-black/80 font-medium text-[32px]">
                  15,3 M
                </h5>
                <p className="text-xl text-secondary">Pohon ditebang</p>
              </div>
              <div>
                <h5 className="text-black/80 font-medium text-[32px]">
                  14,7 Ha
                </h5>
                <p className="text-xl text-secondary">Hutan ditebang</p>
              </div>
            </div>
            <p className="w-10/12 pr-1 text-xl text-justify mb-[70px] text-secondary">
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
