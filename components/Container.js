export default function Container(props) {
  return (
    <div className="xl:px-[70px] md:px-[48px] px-[35px]">{props.children}</div>
  );
}
