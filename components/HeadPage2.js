import Link from "next/link";
import Container from "./Container";

export default function HeadPage2(props) {
  return (
    <div className="relative">
      <div className="bg-primary/10 xl:pt-[70px] md:pt-10 pt-5 xl:h-[368px] h-[233px] absolute top-0 xl:text-xl text-sm w-full text-secondary">
        <Container>
          <Link href={`/`} className="hover:underline">
            home
          </Link>
          {` / `}
          {props.children}
        </Container>
      </div>
    </div>
  );
}
