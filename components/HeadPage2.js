import Link from "next/link";
import Container from "./Container";

export default function HeadPage2(props) {
  return (
    <div className="">
      <div className="bg-primary/10 xl:pt-[70px] md:pt-10 pt-5 xl:h-[368px] h-[233px] absolute xl:-top-[178px] md:-top-[121px] -top-[124px] xl:text-xl text-sm w-full text-secondary">
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
