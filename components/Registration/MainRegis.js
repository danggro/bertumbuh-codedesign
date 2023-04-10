import { useState } from "react";
import Daftar from "./Daftar";
import Donasi from "./Donasi";
import Container from "../Container";

export default function MainRegis() {
  const [input, setInput] = useState(true);

  return (
    <Container>
      <div className="relative xl:pb-[114px] shadow-[10px_40px_50px_#F3F3F3] md:mt-[140px] mt-[100px] xl:mt-[179px] xl:px-[52px] xl:pt-[72px] md:px-10 px-5 md:py-[60px] py-10 xl:w-10/12 md:w-9/12 w-full mx-auto xl:mb-[205px] bg-white">
        <ul className="flex mb-[60px] md:mb-20 xl:mb-[148px]">
          <li
            className={`xl:px-8 xl:pt-[13px] xl:pb-[5px] px-2 py-1 cursor-pointer xl:text-xl md:text-lg text-base font-medium text-secondary border-seccondary ${
              input
                ? "border-t-2 border-r-2 border-b-2 border-b-white"
                : "border-b-2 border-t-2 border-r-2 border-r-white border-t-white"
            }`}
            onClick={() => {
              setInput(true);
            }}
          >
            Daftar
          </li>
          <li
            className={`xl:px-8  cursor-pointer xl:pt-[13px] xl:pb-[5px] px-2 py-1 xl:text-xl md:text-lg text-base font-medium text-secondary ${
              input
                ? "border-b-2 border-l-2 border-t-2 border-r-2 border-l-white border-t-white border-r-white"
                : "border-l-2 border-t-2 border-r-2 "
            }`}
            onClick={() => {
              setInput(false);
            }}
          >
            Donasi
          </li>
          <li className="w-full border-b-2 border-b-seccondary"></li>
        </ul>
        {input ? <Daftar /> : <Donasi />}
      </div>
    </Container>
  );
}
