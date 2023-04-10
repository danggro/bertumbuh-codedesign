import Link from "next/link";

export default function CardBlog(props) {
  return (
    <>
      <Link href={{ pathname: "/detailblog", query: { id: `${props.id}` } }}>
        <div
          className={`xl:w-[510px] xl:h-[278px] w-full h-[193px] bg-cover bg-bottom`}
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </Link>
      <div className="text-white bg-primary w-fit px-[21px] py-[6px] text-sm xl:my-6 my-3">
        {props.descImg}
      </div>
      <Link href={{ pathname: "/detailblog", query: { id: `${props.id}` } }}>
        <h3 className="text-secondary mb-4 xl:mb-[30px] font-semibold text-xl xl:text-2xl">
          {props.title}
        </h3>
      </Link>
      <p className="text-sm text-justify xl:text-base text-secondary">
        {props.desc}
      </p>
    </>
  );
}
