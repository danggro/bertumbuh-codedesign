import Image from "next/image";
import avatar from "@/public/avatar.png";
export default function Author() {
  return (
    <div className="px-[33px] py-[44px] mt-[60px] space-x-[29px] mb-[200px] bg-primary/10 flex items-center">
      <Image src={avatar} alt="" />
      <div>
        <h5 className="mb-4 font-medium text-secondary">
          Ditulis Oleh Dimas Rizky M
        </h5>
        <p className="text-lg text-secondary">
          Hallo, saya seroang UI/UX Design dan React Frontend Dev. Saaya masih
          duduk dibangku SMK jurusan TKJ dan saya menulis untuk menghabiskan
          waktu luang saya
        </p>
      </div>
    </div>
  );
}
