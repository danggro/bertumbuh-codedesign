import BCA from "@/public/BCA.png";
import BRI from "@/public/BRI.png";
import Gopay from "@/public/Gopay.png";
import Ovo from "@/public/Ovo.png";
import InputDaftar from "./InputDaftar";
import Image from "next/image";

export default function Donasi() {
  return (
    <div className="mt-[146px] flex space-x-[72px]">
      <div className="w-[608px]">
        <div className="flex space-x-2 mb-[42px]">
          <input type="checkbox" id="sd" />
          <label for="sd" className="text-sm cursor-pointer text-secondary">
            Secret Donatur
          </label>
        </div>
        <ul>
          <li className="pb-3 pl-6 border-b border-secondary mb-[60px]">
            <span className="text-[26px] text-secondary font-medium">
              <input
                type="text"
                placeholder={`Masukkan Nominal*`}
                className=" focus:outline-none"
                value={"Rp5.000.000,00"}
              />
            </span>
          </li>
          <InputDaftar type="text">Nama Lengkap</InputDaftar>
          <InputDaftar type="email">Alamat Email</InputDaftar>
        </ul>
      </div>
      <div className="w-[272px] ">
        <span className="text-sm text-secondary">Pilih metode pembayaran</span>
        <div className="flex flex-wrap justify-between gap-[30px] mt-[21px]">
          <Image src={Ovo} alt="" className="h-fit" />
          <Image src={Gopay} alt="" className="h-fit" />
          <Image src={BCA} alt="" className="h-fit" />
          <Image src={BRI} alt="" className="h-fit" />
        </div>
      </div>
    </div>
  );
}
