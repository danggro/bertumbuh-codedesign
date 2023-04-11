export default function CardButuh2Mobile(props) {
  return (
    <div className="min-w-full h-fit px-[30px] pt-[30px] pb-10 bg-[#fafafa]">
      <div className="shadow-2xl shadow-primary/70 w-fit">{props.icon}</div>
      <p className="text-sm text-justify text-secondary pr-5 mt-5 mb-[30px]">
        {props.desc}
      </p>
      <button className="flex items-center space-x-2 text-sm text-primary hover:underline">
        <span>Menjadi {props.job}</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="6"
            fill="none"
            viewBox="0 0 17 6"
          >
            <path
              fill="#2A9D8F"
              d="M17 3l-4.274-3v2.4H0v1.2h12.726V6L17 3z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
