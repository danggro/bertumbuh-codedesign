export default function InputDaftar(props) {
  return (
    <li className="pb-3 pl-3 md:pl-6 border-b border-secondary mb-10 xl:mb-[60px]">
      <span className="text-sm xl:text-lg text-secondary">
        <input
          type={props.type}
          placeholder={`${props.children}*`}
          className=" focus:outline-none"
        />
      </span>
    </li>
  );
}
