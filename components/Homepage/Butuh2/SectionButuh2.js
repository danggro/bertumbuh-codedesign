import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import CardButuh2 from "./CardButuh2";
import ArrowLeft from "./Icon/Arrowleft";
import ArrowRight from "./Icon/ArrowRight";
import Donator from "./Icon/Donatur";
import Petani from "./Icon/Petani";
import Relawan from "./Icon/Relawan";
import { useState } from "react";

export default function SectionButuh2() {
  const [curr, setCurr] = useState(1);
  const slides = [0, 1, 2];

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
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
              <div
                className="absolute flex duration-500 ease-out left-[35%] justify-between w-full transition-transform "
                style={{ transform: `translateX(-${curr * 35}%)` }}
              >
                <CardButuh2
                  icon={<Donator />}
                  desc="Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya"
                  job="Donatur"
                  curr={curr}
                  id={0}
                />
                <CardButuh2
                  icon={<Relawan />}
                  desc="Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu dapat langsung menanam pohon, membantu berkebun, "
                  job="Relawan"
                  curr={curr}
                  id={1}
                />
                <CardButuh2
                  icon={<Petani />}
                  desc="Kamu akan belajar tentang cara  menanam pohon, merawat pohon serta hal lain dengan bergabung sebagai petani"
                  job="Petani"
                  curr={curr}
                  id={2}
                />
              </div>
              <div className="flex absolute bottom-0 left-[50%] -translate-x-[50%] p-2  space-x-1 mt-[42px] bg-white w-fit">
                <button onClick={prev}>
                  <ArrowLeft />
                </button>
                <button onClick={next}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
