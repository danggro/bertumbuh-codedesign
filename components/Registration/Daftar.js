import InputDaftar from "./InputDaftar";

export default function Daftar() {
  return (
    <div className="flex xl:flex-row flex-col xl:space-x-[76px] ">
      <ul className="xl:w-[608px] md:w-full xl:order-none order-1 overflow-hidden">
        <InputDaftar type="text">Nama Lengkap</InputDaftar>
        <InputDaftar type="text">TTL</InputDaftar>
        <InputDaftar type="email">Email</InputDaftar>
        <InputDaftar type="text">No HP</InputDaftar>
        <InputDaftar type="text">Status Pernikahan</InputDaftar>
        <div className="flex space-x-5">
          <div className="w-8/12">
            <InputDaftar type="text">Alamat</InputDaftar>
          </div>
          <div className="w-4/12">
            <InputDaftar type="text">Kode Pos</InputDaftar>
          </div>
        </div>
        <InputDaftar type="text">Daftar Jadi Relawan</InputDaftar>
        <InputDaftar type="text">Jadi Relawan Cirebon</InputDaftar>
        <button className="mt-10 xl:block hidden drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] w-full xl:px-[259px] xl:py-[13px] py-2 bg-primary text-white border border-primary hover:bg-white hover:text-primary xl:text-2xl text-base font-medium">
          SUBMIT
        </button>
      </ul>
      <button className="mt-10 xl:hidden order-3 drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] w-full xl:px-[259px] xl:py-[13px] py-2 bg-primary text-white border border-primary hover:bg-white hover:text-primary xl:text-2xl text-base font-medium">
        SUBMIT
      </button>
      <div className="order-2 xl:order-none">
        <div className="flex flex-col justify-center items-center xl:w-[250px] w-full xl:h-[250px] h-[140px] border-2 border-dashed border-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              stroke="#737B7D"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M28 20v5.333A2.667 2.667 0 0125.333 28H6.667A2.667 2.667 0 014 25.333V20M22.667 10.667L16 4l-6.667 6.667M16 4v16"
            ></path>
          </svg>
          <span className="mt-3 text-secondary">Unggah Foto*</span>
        </div>
        <span className="flex justify-center mt-3 text-sm text-secondary">
          Size file harus dibawah 10 MB
        </span>
      </div>
    </div>
  );
}
