export default function InputDaftar(props) {
  return (
    <li className="pb-3 pl-6 border-b border-secondary mb-[60px]">
      <span className="text-lg text-secondary">
        <input
          type={props.type}
          placeholder={`${props.children}*`}
          className=" focus:outline-none"
        />
      </span>
    </li>
  );
}
