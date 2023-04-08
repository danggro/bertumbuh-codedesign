import Link from "next/link";

export default function FooterItemLink(props) {
  return (
    <li className="mb-[6px] ">
      <Link
        href={props.href}
        className="hover:underline leading-[27px] md:text-sm xl:text-lg text-white"
      >
        {props.children}
      </Link>
    </li>
  );
}
