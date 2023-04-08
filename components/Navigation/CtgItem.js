export default function CtgItem(props) {
  return (
    <a href={props.href}>
      <li className="font-medium cursor-pointer xl:text-xl md:text-base text-secondary hover:underline">
        {props.children}
      </li>
    </a>
  );
}
