import Bertumbuh from "@/components/Logo/Bertumbuh";

export default function NavLeft() {
  return (
    <div className="flex items-center space-x-[14px]">
      <Bertumbuh />
      <span className="uppercase font-semibold text-[26px] text-[#34364A]">
        bertumbuh
      </span>
      <div className="flex items-center space-x-2">
        <span className="text-xl font-medium text-secondary ">Programs</span>
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
