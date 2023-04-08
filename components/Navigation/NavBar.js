import Container from "@/components/Container";
import CtgItem from "./CtgItem";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <div className="shadow-[0_8px_30px_0_rgba(0,0,0,0.05)]">
      <nav className="border-b">
        <Container>
          <div className="flex xl:py-[37px] md:py-[15px] items-center justify-between ">
            <NavLeft />
            <NavRight />
          </div>
        </Container>
      </nav>
      <Container>
        <ul className="flex space-x-8 xl:py-6 md:py-4 xl:space-x-10">
          <CtgItem href="#">Home</CtgItem>
          <CtgItem href="#Mitra">Kemitraan</CtgItem>
          <CtgItem href="#Tentang">Tentang</CtgItem>
          <CtgItem href="#Butuh">kami Butuh Kamu</CtgItem>
          <CtgItem href="#Post">Post</CtgItem>
          <CtgItem href="#Berita">Newsletter</CtgItem>
        </ul>
      </Container>
    </div>
  );
}
