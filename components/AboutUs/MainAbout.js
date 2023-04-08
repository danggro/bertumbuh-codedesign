import Image from "next/image";
import Bertumbuh from "../Logo/Bertumbuh";
import skensala from "@/public/skensala.png";

export default function MainAbout() {
  return (
    <div className="mt-[120px] mb-[200px] w-[800px] mx-auto text-secondary">
      <h2 className="text-[48px] font-medium mb-[100px] text-center">
        Tentang Kami
      </h2>
      <h3 className="text-2xl font-semibold ">Tentang BERTUMBUH</h3>
      <br />
      <div className="flex space-x-[85px]">
        <div className="origin-top-left scale-[210%] ">
          <Bertumbuh />
        </div>
        <p className="text-xl text-justify">
          BERTUMBUH adalah organisasi non-profit yang mempunyai tujuan untuk
          Melindungi, menjaga, merawat, dan melestarikan pohon-pohon yang ada di
          dunia serta kami akan terus menjaga kestabilan bumi lewat penanaman
          dan penghijauan.
        </p>
      </div>
      <br />
      <p className="text-xl text-justify">
        Lewat penanaman dan penghijauan ini juga kita dapat mencegah berbagai
        masalah seperti pemanasan global, polusi, banjir, tanah longsor serta
        terjaganya flora dan dan fauna yang ada di dunia dan oleh dasar ini pula
        organisasi Bertumbuh dibuat. Kamu juga bisa membantu Bertumbuh dengan
        cara menjadi relawan, petani serta kamu juga bisa berdonasi untuk
        mendukung kegiatan oprasional kami.
      </p>
      <br />
      <br />
      <h3 className="text-2xl font-semibold ">Tentang Tim SKENSALA</h3>
      <br />
      <div className="flex space-x-[33px]">
        <Image src={skensala} alt="" className="flex-shrink-0 h-fit" />
        <p className="text-xl text-justify">
          Tim SKENSALA merupakan tim perwakilan dari SMK NEGERI 1 LEMAHABANG,
          Cirebon. Tim ini dikirim untuk mengikuti lomba Online Web Design (
          UI/UX ) yang diadakan oleh Politeknik Negeri Subang.
        </p>
      </div>
      <br />
      <p className="text-xl text-justify">
        Tim SKENSALA beranggotakan dua orang yang terdiri dari Dimas Rizky
        Maulana ( Ketua ) sebagai UI/UX Web Design serta Adi Pebrian ( Anggota )
        berperan sebagi UI/UX Web Design juga.
      </p>
    </div>
  );
}
