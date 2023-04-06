import Link from "next/link";
import Container from "./Container";

export default function HeadPage2(props) {
  return (
    <div className="relative">
      <div className="bg-primary/10 pt-[70px] h-[368px] absolute top-0 text-xl w-full text-secondary">
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
