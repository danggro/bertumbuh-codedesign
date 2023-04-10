import BCA from "@/public/BCA.png";
import BRI from "@/public/BRI.png";
import Gopay from "@/public/Gopay.png";
import Ovo from "@/public/Ovo.png";
import InputDaftar from "./InputDaftar";
import Image from "next/image";

export default function Donasi() {
  return (
    <div className="xl:mt-[146px] mt-[60px] flex xl:flex-row flex-col xl:space-x-[72px]">
      <div className="xl:w-[608px] w-full">
        <div className="flex space-x-2 mb-6 xl:mb-[42px]">
          <input type="checkbox" id="sd" />
          <label for="sd" className="text-sm cursor-pointer text-secondary">
            Secret Donatur
          </label>
        </div>
        <ul>
          <li className="pb-3 pl-6 w-full border-b border-secondary mb-10 xl:mb-[60px]">
            <span className="xl:text-[26px] text-xl text-secondary font-medium">
              <input
                type="text"
                placeholder={`Masukkan Nominal*`}
                className="w-full focus:outline-none"
                value={"Rp5.000.000,00"}
              />
            </span>
          </li>
          <InputDaftar type="text">Nama Lengkap</InputDaftar>
          <InputDaftar type="email">Alamat Email</InputDaftar>
        </ul>
      </div>
      <button className="mt-10 xl:order-2 order-3 drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] w-full xl:px-[259px] xl:py-[13px] py-2 bg-primary text-white border border-primary hover:bg-white hover:text-primary xl:text-2xl text-base font-medium">
        SUBMIT
      </button>
      <div className="xl:w-[272px] xl:order-3 order-2">
        <span className="text-sm text-secondary">Pilih metode pembayaran</span>
        <div className="flex xl:flex-wrap md:flex-nowrap flex-wrap md:justify-between gap-x-10 items-center xl:gap-[30px] md:gap-10 mt-4 xl:mt-[21px]">
          <Image src={Ovo} alt="" className="h-fit" />
          <Image src={Gopay} alt="" className="h-fit" />
          <Image src={BCA} alt="" className="h-fit" />
          <Image src={BRI} alt="" className="h-fit" />
        </div>
      </div>
    </div>
  );
}
