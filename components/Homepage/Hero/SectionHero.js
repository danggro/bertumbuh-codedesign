import Button from "@/components/Button";
import Container from "@/components/Container";
import hero from "@/public/hero.png";
import Image from "next/image";
import JmlPohon from "./JmlPohon";
export default function SectionHero() {
  return (
    <Container>
      <section
        id="Hero"
        className="w-full relative bg-primary/10 pb-[198px] mt-[70px] px-[45px] pt-[45px]"
      >
        <div className="absolute bottom-0 right-0">
          <Image src={hero} alt="" />
        </div>
        <div>
          <h1 className="font-medium text-[60px] w-9/12 text-black">
            Bersama Lindungi Bumi Kita Untuk Masa Depan
          </h1>
          <h4 className="mt-[35px] w-5/12 text-xl text-secondary text-justify">
            Kami bermimpi untuk menanam lebih dari 10 juta pohon dan menciptakan
            dunia yang lebih indah dan asri untuk kita, dia, dan semua.
          </h4>
        </div>
        <div className="mt-[72px] space-x-[43px] flex">
          <Button>Eksplorasi Bertumbuh</Button>
          <button className="flex items-center px-5 py-2 space-x-3 border hover:bg-primary group w-fit border-primary hover:drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)]">
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
            <span className="text-xl group-hover:text-white text-secondary">
              Lihat Video
            </span>
          </button>
        </div>
        <div className="absolute bottom-0 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="718"
            height="111"
            fill="none"
            viewBox="0 0 718 111"
          >
            <path fill="#fff" d="M634 1.5L0 0l.5 111h717L634 1.5z"></path>
          </svg>
          <ul className="flex py-9 space-x-[35px] absolute bottom-0">
            <li
              className="text-[28px] text-secondary font-semibold
            uppercase"
            >
              ditlance
            </li>
            <li
              className="text-[28px] text-secondary font-semibold
            uppercase"
            >
              owthest
            </li>
            <li
              className="text-[28px] text-secondary font-semibold
            uppercase"
            >
              neovasi
            </li>
            <li
              className="text-[28px] text-secondary font-semibold
            uppercase"
            >
              onago
            </li>
          </ul>
        </div>
      </section>
      <div className="mt-[150px] mx-auto">
        <JmlPohon />
      </div>
    </Container>
  );
}
