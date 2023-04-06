export default function CardDetail(props) {
  return (
    <>
      <div className="text-white bg-primary w-fit px-[21px] py-[6px] text-sm my-6">
        {props.descImg}
      </div>
      <h2 className="mt-[17px] mb-3 text-[42px] font-semibold leading-[54px] text-secondary">
        {props.title}
      </h2>
      <div className="flex items-center space-x-[14px]">
        <div
          className="w-[42px] h-[42px] bg-cover"
          style={{ backgroundImage: `url(/avatar.png)` }}
        ></div>
        <h5 className="text-base font-medium text-secondary">
          Dimas Rizky M |
        </h5>
        <p className="text-sm text-secondary">{props.date}</p>
      </div>
      <div
        className={`w-[800px] h-[278px] bg-cover bg-bottom mt-8 mb-10`}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
    </>
  );
}
