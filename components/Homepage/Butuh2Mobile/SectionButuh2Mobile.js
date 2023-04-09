import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import CardButuh2Mobile from "./CardButuh2Mobile";
import Donator from "./Icon/Donatur";
import ArrowLeft from "./Icon/Arrowleft";
import ArrowRight from "./Icon/ArrowRight";
export default function SectionButuh2Mobile() {
  return (
    <section className="md:mt-[150px] mt-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row">
          <div className="text-center md:text-left md:w-6/12 md:pt-9">
            <HeadSection
              sect="Menjadi Bagian Bertumbuh"
              title="Buat Hal Sederhana Jadi Bermakna"
            />
            <p className="mt-3 text-lg md:pr-16 text-secondary">
              Ciptakan setiap kegiatan jadi lebih bermakna dan bermanfaat
            </p>
          </div>
          <div className="relative pt-10 pb-6 mt-12 md:mt-0 md:w-6/12">
            <div className="w-[248px] h-[403px] top-0 absolute left-[50%] -translate-x-[50%] -z-10 bg-primary/10"></div>
            <CardButuh2Mobile
              icon={<Donator />}
              desc="Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya"
              job="Donatur"
            />
            <div className="flex p-1 mx-auto mt-6 space-x-1 bg-white w-fit">
              <button className="flex-shrink-0 px-2 py-3 bg-white text-primary hover:bg-primary hover:text-white">
                <ArrowLeft />
              </button>
              <button className="flex-shrink-0 px-2 py-3 text-white bg-primary hover:text-primary hover:bg-white">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
