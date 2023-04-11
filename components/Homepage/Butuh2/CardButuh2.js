export default function CardButuh2(props) {
  return (
    <div
      className={`w-[395px] h-fit px-[43px] transition-transform duration-500 ease-out pt-10 pb-[35px] bg-[#fafafa] ${
        props.curr === props.id && "scale-[115%]"
      }`}
    >
      <div className="shadow-2xl shadow-primary/70 w-fit">{props.icon}</div>
      <p className="text-base text-justify text-secondary mt-5 mb-[25px]">
        {props.desc}
      </p>
      <button className="flex items-center space-x-2 text-base text-primary hover:underline">
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
