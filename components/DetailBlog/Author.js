import Image from "next/image";
import avatar from "@/public/avatar.png";
export default function Author() {
  return (
    <div className="xl:px-[33px] px-[13px] xl:py-[44px] py-[22px] mt-[60px] xl:space-x-[29px] md:space-x-5 xl:mb-[200px] md:mb-[150px] bg-primary/10 flex items-start">
      <Image
        src={avatar}
        alt=""
        className="md:scale-0 origin-top-left scale-[80%]"
      />
      <div>
        <h5 className="mb-2 text-lg font-medium md:mb-4 md:text-lg xl:text-xl text-black/80">
          Ditulis Oleh Dimas Rizky M
        </h5>
        <p className="hidden xl:text-lg text-secondary">
          Hallo, saya seroang UI/UX Design dan React Frontend Dev. Saaya masih
          duduk dibangku SMK jurusan TKJ dan saya menulis untuk menghabiskan
          waktu luang saya
        </p>
        <p className="text-sm text-justify xl:hidden text-secondary">
          Hallo, saya seroang UI/UX Design dan React Frontend Dev. yang hobi
          menulis.
        </p>
      </div>
    </div>
  );
}
