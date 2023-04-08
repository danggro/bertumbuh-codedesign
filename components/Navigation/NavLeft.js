import Bertumbuh from "@/components/Logo/Bertumbuh";

export default function NavLeft() {
  return (
    <div className="flex items-center xl:space-x-[14px] md:space-x-[8px]">
      <div className="md:scale-[80%] origin-left">
        <Bertumbuh />
      </div>
      <span className="uppercase font-semibold  xl:text-[26px] md:text-xl text-[#34364A]">
        bertumbuh
      </span>
      <div className="items-center hidden space-x-2 xl:flex">
        <span className="text-xl font-medium  text-secondary">Programs</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          fill="none"
          viewBox="0 0 25 24"
        >
          <path
            stroke="#6D6D6D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M19.711 9l-6.99 7-6.989-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
