import Container from "@/components/Container";
import CtgItem from "./CtgItem";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <div className="shadow-[0_8px_30px_0_rgba(0,0,0,0.05)]">
      <nav className="border-b">
        <Container>
          <div className="flex py-[37px] items-center justify-between ">
            <NavLeft />
            <NavRight />
          </div>
        </Container>
      </nav>
      <Container>
        <ul className="flex py-6 space-x-10">
          <CtgItem href="#">Home</CtgItem>
          <CtgItem href="#Mitra">Kemitraan</CtgItem>
          <CtgItem href="#Tentang">Tentang</CtgItem>
          <CtgItem href="#Butuh">kami Butuh Kamu</CtgItem>
          <CtgItem href="#Post">Post</CtgItem>
          <CtgItem href="#News">Newsletter</CtgItem>
        </ul>
      </Container>
    </div>
  );
}
