import Link from "next/link";
import Container from "./Container";

export default function HeadPage(props) {
  return (
    <div className="bg-primary/10 py-[45px]  text-xl w-full text-secondary">
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
