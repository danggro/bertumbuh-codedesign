import SectionFooter from "./Footer/SectionFooter";
import NavBar from "./Navigation/NavBar";
import NavBarMobile from "./Navigation/NavBarMobile";

export default function Layout(props) {
  return (
    <>
      <div className="hidden md:block">
        <NavBar />
      </div>
      <div className="md:hidden">
        <NavBarMobile />
      </div>
      {props.children}
      <SectionFooter />
    </>
  );
}
