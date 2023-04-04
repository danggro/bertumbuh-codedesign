export default function FooterItem(props) {
  return (
    <div>
      <h5 className="text-xl font-medium text-white">{props.title}</h5>
      <ul className="mt-[21px]">{props.children}</ul>
    </div>
  );
}
