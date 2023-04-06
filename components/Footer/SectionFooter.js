import Container from "@/components/Container";
import Link from "next/link";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";
import Bertumbuh from "./Icon/Bertumbuh";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Message from "./Icon/Message";
import Twitter from "./Icon/Twitter";

export default function SectionFooter() {
  return (
    <footer className="pl-[70px] pt-[56px] pb-8 mt-[150px] bg-primary pr-[45px]">
      <div className="flex ">
        <div className="w-6/12">
          <div className="w-fit">
            <Link href={`/`} className="hover:opacity-70">
              <Bertumbuh />
            </Link>
          </div>
        </div>
        <div className="w-6/12 flex space-x-[73px]">
          <FooterItem title="POSTS">
            <FooterItemLink href="/#">Berita</FooterItemLink>
            <FooterItemLink href="/#">Event</FooterItemLink>
            <FooterItemLink href="/#">Blog</FooterItemLink>
          </FooterItem>
          <FooterItem title="Programs">
            <FooterItemLink href="/#">Jelajah Bersama</FooterItemLink>
            <FooterItemLink href="/#">Tanam Pohon</FooterItemLink>
            <FooterItemLink href="/#">Sosialisasi Hutan</FooterItemLink>
          </FooterItem>
          <FooterItem title="Alamat">
            <li className="mb-[6px]">
              <p className="text-white text-lg leading-[27px] w-[250px]">
                Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang,
                Kabupaten Cirebon, Jawa Barat, 45183
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="text-white text-lg leading-[27px]">
                {`(0231) 635308`}
              </p>
            </li>
            <li className="mb-[6px]">
              <p className="text-white text-base leading-[27px]">
                surat@smkn1emahabang.sch.id
              </p>
            </li>
          </FooterItem>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <ul className="flex space-x-[18px]">
          <li className="transition-transform origin-center hover:scale-125">
            <Link
              href="http://instagram.com"
              target="_blank"
              className="text-white "
            >
              <Instagram />
            </Link>
          </li>
          <li className="transition-transform origin-center hover:scale-125">
            <Link
              href="http://facebook.com"
              target="_blank"
              className="text-white "
            >
              <Facebook />
            </Link>
          </li>
          <li className="transition-transform origin-center hover:scale-125">
            <Link
              href="http://twitter.com"
              target="_blank"
              className="text-white "
            >
              <Twitter />
            </Link>
          </li>
          <li className="transition-transform origin-center hover:scale-125">
            <Link
              href="http://message.com"
              target="_blank"
              className="text-white "
            >
              <Message />
            </Link>
          </li>
        </ul>
        <span>
          <p className="text-base text-white">
            &copy; 2022 BERTUMBUH | SKENSALA - SMKN 1 LEMAHABANG
          </p>
        </span>
      </div>
    </footer>
  );
}
