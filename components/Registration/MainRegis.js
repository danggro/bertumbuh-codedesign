import { useState } from "react";
import Daftar from "./Daftar";
import Donasi from "./Donasi";

export default function MainRegis() {
  const [input, setInput] = useState(true);

  return (
    <div className="relative pb-[114px] shadow-[10px_40px_50px_#F3F3F3] mt-[179px] px-[52px] pt-[72px] w-10/12 mx-auto mb-[205px] bg-white">
      <ul className="flex mb-[148px]">
        <li
          className={`px-8 pt-[13px] pb-[5px] cursor-pointer text-xl font-medium text-secondary border-seccondary ${
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
          className={`px-8  cursor-pointer pt-[13px] pb-[5px] text-xl font-medium text-secondary ${
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
  );
}
