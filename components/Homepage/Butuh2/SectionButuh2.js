import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import CardButuh2 from "./CardButuh2";
import ArrowLeft from "./Icon/Arrowleft";
import ArrowRight from "./Icon/ArrowRight";
import Donator from "./Icon/Donatur";
import Petani from "./Icon/Petani";
import Relawan from "./Icon/Relawan";

export default function SectionButuh2() {
  return (
    <section className="mt-[150px]">
      <Container>
        <div className="w-8/12 px-20 mx-auto text-center mb-[60px]">
          <HeadSection
            sect="Menjadi Bagian Bertumbuh"
            title="Buat Hal Sederhana Jadi Lebih Bermakna"
          />
          <p className="px-5 mt-5 text-xl text-center text-secondary">
            Ciptakan setiap kegiatan jadi lebih bermakna dan bermanfaat untuk
            kita, dia dan semua
          </p>
        </div>
        <div className="relative">
          <div className="w-10/12 mx-auto h-[582px] bg-primary/10 pt-[72px] pb-[42px]">
            <div className="h-[468px] w-full absolute left-0">
              <div className="flex justify-between ">
                <CardButuh2
                  icon={<Donator />}
                  desc="Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya"
                  job="Donatur"
                />
                <CardButuh2
                  icon={<Relawan />}
                  desc="Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu dapat langsung menanam pohon, membantu berkebun, melakukan sosialisasi dan program-program menarik lainnya"
                  job="Relawan"
                />
                <CardButuh2
                  icon={<Petani />}
                  desc="Kamu akan belajar tentang cara  menanam pohon, merawat pohon serta hal lain dengan bergabung sebagai petani"
                  job="Petani"
                />
              </div>
              <div className="flex p-2 mx-auto space-x-1 mt-[42px] bg-white w-fit">
                <ArrowLeft />
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
