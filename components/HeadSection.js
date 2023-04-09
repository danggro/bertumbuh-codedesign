export default function HeadSection(props) {
  return (
    <>
      <h4 className="font-semibold xl:text-[26px] text-xl xl:leading-9 leading-[30px] text-primary">
        {props.sect}
      </h4>
      <h2 className="xl:mt-3 mt-1 xl:text-[48px] text-[26px] font-medium text-black/80 xl:leading-[62px] leading-[36px]">
        {props.title}
      </h2>
    </>
  );
}
