import Container from "@/components/Container";
import Link from "next/link";
import FooterItem from "./FooterItem";
import FooterItemLink from "./FooterItemLink";
import Bertumbuh from "./Icon/Bertumbuh";
import Facebook from "./Icon/Facebook";
import Instagram from "./Icon/Instagram";
import Message from "./Icon/Message";
import Twitter from "./Icon/Twitter";
import FooterMobile from "./FooterMobile";

export default function SectionFooter() {
  return (
    <footer className="xl:pl-[70px] md:px-[48px] p-[35px] md:pt-[49px] xl:pt-[56px] pb-8 mt-[150px] bg-primary pr-[45px]">
      <div className="flex flex-col md:flex-row">
        <div className="xl:w-6/12 md:w-4/12">
          <div className="w-fit xl:scale-100 md:scale-[79%] scale-[55%] origin-top-left">
            <Link href={`/`} className="hover:opacity-70 ">
              <Bertumbuh />
            </Link>
          </div>
        </div>
        <div className="xl:w-6/12 md:w-8/12 md:flex xl:space-x-[73px] md:space-x-[31px] hidden">
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
          </FooterItem>
        </div>
        <div className="md:hidden ">
          <FooterMobile />
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
          <p className="hidden text-sm text-white md:block xl:text-base xl:pr-16">
            &copy; 2022 BERTUMBUH | SKENSALA - SMKN 1 LEMAHABANG
          </p>
          <p className="text-sm text-white md:hidden">&copy; 2022 BERTUMBUH</p>
        </span>
      </div>
    </footer>
  );
}
