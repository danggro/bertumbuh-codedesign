export default function HeadSection(props) {
  return (
    <>
      <h4 className="font-semibold text-[26px] leading-9 text-primary">
        {props.sect}
      </h4>
      <h2 className="mt-3 text-[48px] font-medium text-black/80 leading-[62px]">
        {props.title}
      </h2>
    </>
  );
}
