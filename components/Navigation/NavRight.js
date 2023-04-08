import Button from "@/components/Button";

export default function NavRight() {
  return (
    <div className="flex items-center space-x-[30px]">
      <label className="hidden xl:relative">
        <input
          type="text"
          placeholder="Cari blog dan artikel disini ..."
          className=" w-[400px] px-5 py-3 text-base bg-primary/10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          fill="none"
          viewBox="0 0 25 24"
          className="absolute right-3 top-3"
        >
          <path
            stroke="#6D6D6D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.166 21l-5.995-6 5.995 6zm-3.997-11a7.005 7.005 0 01-4.318 6.467 6.991 6.991 0 01-9.139-3.788A7.005 7.005 0 015.228 5.05 6.992 6.992 0 0117.17 10z"
          ></path>
        </svg>
      </label>
      <span>
        <Button>Bergabung</Button>
      </span>
    </div>
  );
}
