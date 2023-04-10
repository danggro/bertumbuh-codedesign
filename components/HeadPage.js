import Link from "next/link";
import Container from "./Container";

export default function HeadPage(props) {
  return (
    <div className="bg-primary/10 md:py-[45px] py-5 md:hidden md:text-xl text-sm w-full text-secondary">
      <Container>
        <Link href={`/`} className="hover:underline">
          home
        </Link>
        {` / `}
        {props.children}
      </Container>
    </div>
  );
}
