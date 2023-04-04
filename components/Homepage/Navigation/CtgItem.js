export default function CtgItem(props) {
  return (
    <a href={props.href}>
      <li className="text-xl font-medium cursor-pointer text-secondary hover:underline">
        {props.children}
      </li>
    </a>
  );
}
