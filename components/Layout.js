import SectionFooter from "./Footer/SectionFooter";
import NavBar from "./Navigation/NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <SectionFooter />
    </>
  );
}
