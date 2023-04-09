export default function Hamburger(props) {
  return (
    <button
      className={`block right-4 lg:hidden ${
        props.offcanvas && "hamburger-active"
      }`}
      onClick={props.onClick}
    >
      <span className="transition-all duration-300 ease-in-out origin-top-left hamburger-line"></span>
      <span className="transition-all duration-300 ease-in-out hamburger-line"></span>
      <span className="transition-all duration-300 ease-in-out origin-bottom-left hamburger-line"></span>
    </button>
  );
}
