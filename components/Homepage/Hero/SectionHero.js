import Button from "@/components/Button";
import Container from "@/components/Container";
import hero from "@/public/hero.png";
import Image from "next/image";
import JmlPohon from "./JmlPohon";
import ItemHero from "./ItemHero";
export default function SectionHero() {
  return (
    <Container>
      <section
        id="Hero"
        className="w-full relative bg-primary/10 xl:pb-[198px] md:pb-10 xl:mt-[70px] md:mt-[45px] xl:px-[45px] md:px-5 xl:pt-[45px] md:pt-5 p-5 pb-0"
      >
        <div>
          <h1 className="font-medium xl:text-[60px] xl:leading-[90px] md:leading-[44px] text-[32px] w-9/12 text-black sm:block hidden">
            Bersama Lindungi Bumi Kita Untuk Masa Depan
          </h1>
          <h1 className="font-medium leading-[44px] text-[32px] text-black sm:hidden">
            Bersama Lindungi Bumi Kita
          </h1>
          <h4 className="xl:mt-[35px] sm:mt-[15px] xl:w-5/12 md:w-6/12 xl:pr-0 md:pr-4 xl:text-xl text-lg text-secondary text-justify pr-5 mt-[10px] mb-[35px]">
            Kami bermimpi untuk menanam lebih dari 10 juta pohon dan menciptakan
            dunia yang lebih indah dan asri untuk kita, dia, dan semua.
          </h4>
        </div>
        <div className="xl:mt-[72px] md:mt-10 sm:space-y-0 space-y-4 xl:space-x-[43px] sm:space-x-[27px] sm:flex">
          <Button>Eksplorasi Bertumbuh</Button>
          <button className="flex items-center xl:px-5 px-4 xl:py-2 py-2 md:py-1 space-x-2 border-2 hover:bg-primary group w-fit border-primary hover:drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)]">
            <span className="text-primary group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                fill="none"
                viewBox="0 0 13 16"
              >
                <path
                  fill="currentColor"
                  d="M12.5 7.134a1 1 0 010 1.732L2 14.928a1 1 0 01-1.5-.866V1.938A1 1 0 012 1.072l10.5 6.062z"
                ></path>
              </svg>
            </span>
            <span className="text-base xl:text-xl group-hover:text-white text-secondary">
              Lihat Video
            </span>
          </button>
        </div>
        <div className="bottom-0 right-0 sm:absolute -z-10">
          <Image
            src={hero}
            alt=""
            className="origin-bottom-right xl:scale-100 md:scale-[51%]"
          />
        </div>
        <div className="absolute bottom-0 left-0 hidden xl:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="718"
            height="111"
            fill="none"
            viewBox="0 0 718 111"
          >
            <path fill="#fff" d="M634 1.5L0 0l.5 111h717L634 1.5z"></path>
          </svg>
          <ItemHero />
        </div>
      </section>
      <div className="xl:hidden md:block">
        <ItemHero />
      </div>
      <div className="xl:mt-[150px] md:mt-[85px] w-full">
        <JmlPohon />
      </div>
    </Container>
  );
}
