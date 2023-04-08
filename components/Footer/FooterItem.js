export default function FooterItem(props) {
  return (
    <div>
      <h5 className="font-medium text-white xl:text-xl md:text-base">
        {props.title}
      </h5>
      <ul className="xl:mt-[21px] md:mt-3">{props.children}</ul>
    </div>
  );
}
