export default function Button(props) {
  return (
    <button className="bg-primary border border-primary hover:bg-white hover:text-primary text-white py-2 px-[20px] text-xl font-medium drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)]">
      {props.children}
    </button>
  );
}
