import Link from "next/link";

export default function CtgItem(props) {
  return (
    <>
      {props.link ? (
        <Link href={props.href}>
          <li className="font-medium cursor-pointer xl:text-xl md:text-base text-secondary hover:underline">
            {props.children}
          </li>
        </Link>
      ) : (
        <a href={props.href}>
          <li className="font-medium cursor-pointer xl:text-xl md:text-base text-secondary hover:underline">
            {props.children}
          </li>
        </a>
      )}
    </>
  );
}
