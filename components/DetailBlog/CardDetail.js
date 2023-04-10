export default function CardDetail(props) {
  return (
    <>
      <div className="text-white bg-primary w-fit px-[21px] py-[6px] text-sm xl:my-6">
        {props.descImg}
      </div>
      <h2 className="xl:mt-[17px] mt-[10px] mb-3 xl:text-[42px] text-[26px] font-semibold xl:leading-[54px] leading-[36px] text-secondary">
        {props.title}
      </h2>
      <div className="flex items-center xl:space-x-[14px] space-x-[10px]">
        <div
          className="xl:w-[42px] w-[38px] h-[38px] xl:h-[42px] bg-cover"
          style={{ backgroundImage: `url(/avatar.png)` }}
        ></div>
        <h5 className="text-sm font-medium xl:text-base text-secondary">
          Dimas Rizky M |
        </h5>
        <p className="text-xs xl:text-sm text-secondary">{props.date}</p>
      </div>
      <div
        className={`xl:w-[800px] xl:h-[278px] w-full md:h-[248px] h-[184px] bg-cover bg-bottom xl:mt-8 xl:mb-10 mt-6 mb-9`}
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>
    </>
  );
}
