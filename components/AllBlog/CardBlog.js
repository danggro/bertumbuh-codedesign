import Link from "next/link";

export default function CardBlog(props) {
  return (
    <>
      <Link href={{ pathname: "/detailblog", query: { id: `${props.id}` } }}>
        <div
          className={`w-[510px] h-[278px] bg-cover bg-bottom`}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </Link>
      <div className="text-white bg-primary w-fit px-[21px] py-[6px] text-sm my-6">
        {props.descImg}
      </div>
      <Link href={{ pathname: "/detailblog", query: { id: `${props.id}` } }}>
        <h3 className="text-secondary mb-[30px] font-semibold text-2xl">
          {props.title}
        </h3>
      </Link>
      <p className="text-base text-justify text-secondary">{props.desc}</p>
    </>
  );
}
