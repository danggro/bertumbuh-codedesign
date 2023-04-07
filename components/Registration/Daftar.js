import InputDaftar from "./InputDaftar";

export default function Daftar() {
  return (
    <div className="flex space-x-[76px]">
      <ul className="w-[608px]">
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
            <InputDaftar type="text">Kode Post</InputDaftar>
          </div>
        </div>
        <InputDaftar type="text">Daftar Jadi Relawan</InputDaftar>
        <InputDaftar type="text">Jadi Relawan Cirebon</InputDaftar>
        <button className="mt-10 drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] w-full px-[259px] py-[13px] bg-primary text-white border border-primary hover:bg-white hover:text-primary text-2xl font-medium">
          SUBMIT
        </button>
      </ul>
      <div>
        <div className="flex flex-col justify-center items-center w-[250px] h-[250px] border-2 border-dashed border-secondary">
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
