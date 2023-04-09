import { useState } from "react";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";
import Arrow from "./Icon/Arrow";

export default function FooterMobile() {
  const [posts, setPosts] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [alamat, setAlamat] = useState(false);
  return (
    <div className="flex flex-col space-y-5">
      <div className="relative">
        <div
          className={` flex w-fit transition-all items-center space-x-3 cursor-pointer ${
            posts ? "mb-[100px]" : ""
          }`}
          onClick={() => setPosts(!posts)}
        >
          <FooterItem title="POSTS"></FooterItem>
          <div
            className={`transition-transform ${
              posts ? "rotate-0" : "-rotate-90"
            }`}
          >
            <Arrow />
          </div>
        </div>
        <ul
          className={`absolute z-10 transition-all origin-top  ${
            posts ? "top-9 opacity-100 scale-100" : "scale-0 opacity-0 top-0"
          }`}
        >
          <FooterItemLink href="/#">Berita</FooterItemLink>
          <FooterItemLink href="/#">Event</FooterItemLink>
          <FooterItemLink href="/#">Blog</FooterItemLink>
        </ul>
      </div>
      <div className="relative">
        <div
          className={` flex w-fit transition-all items-center space-x-3 cursor-pointer ${
            programs ? "mb-[100px]" : ""
          }`}
          onClick={() => setPrograms(!programs)}
        >
          <FooterItem title="PROGRAMS"></FooterItem>
          <div
            className={`transition-transform ${
              programs ? "rotate-0" : "-rotate-90"
            }`}
          >
            <Arrow />
          </div>
        </div>
        <ul
          className={`absolute z-10 transition-all origin-top  ${
            programs ? "top-9 opacity-100 scale-100" : "scale-0 opacity-0 top-0"
          }`}
        >
          <FooterItemLink href="/#">Jelajah Bersama</FooterItemLink>
          <FooterItemLink href="/#">Tanam Pohon</FooterItemLink>
          <FooterItemLink href="/#">Sosialisasi Hutan</FooterItemLink>
        </ul>
      </div>
      <div className="relative">
        <div
          className={` flex w-fit transition-all items-center space-x-3 cursor-pointer ${
            alamat ? "mb-[150px]" : ""
          }`}
          onClick={() => setAlamat(!alamat)}
        >
          <FooterItem title="Alamat"></FooterItem>
          <div
            className={`transition-transform ${
              alamat ? "rotate-0" : "-rotate-90"
            }`}
          >
            <Arrow />
          </div>
        </div>
        <ul
          className={`absolute z-10 transition-all origin-top  ${
            alamat ? "top-9 opacity-100 scale-100" : "scale-0 opacity-0 top-0"
          }`}
        >
          <li className="mb-[6px]">
            <p className="text-white xl:text-lg md:text-sm xl:leading-[27p md:leading-[21px] w-[250px]">
              Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang,
              Kabupaten Cirebon, Jawa Barat, 45183
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="text-white xl:text-lg md:text-sm xl:leading-[27px] md:leading-[21px]">
              {`(0231) 635308`}
            </p>
          </li>
          <li className="mb-[6px]">
            <p className="text-white xl:text-base md:text-sm xl:leading-[27px] md:leading-[21px]">
              surat@smkn1emahabang.sch.id
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
