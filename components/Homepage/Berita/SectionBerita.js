import Button from "@/components/Button";
import Container from "@/components/Container";
import HeadSection from "@/components/HeadSection";
import mockTulisan from "@/utils/Tulisan.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SectionBerita() {
  const [tulisan, setTulisan] = useState(mockTulisan);
  return (
    <section id="Berita" className="md:mt-[150px] mt-[100px]">
      <Container>
        <div>
          <HeadSection
            sect="Baca Tulisan Kami"
            title="Berita, Artikel & Event Terbaru"
          />
          <p className="hidden w-7/12 mt-5 text-xl xl:block pr-14 text-secondary">
            Baca dan ikuti event serta program-program yang kami lakukan untuk
            bumi yang lebih baik
          </p>
          <p className="mt-1 text-base md:w-7/12 xl:hidden pr-14 text-secondary">
            Baca dan ikuti event Bertumbuh
          </p>
        </div>
        <div className="flex md:flex-row flex-col xl:mt-10 mt-[30px] md:space-x-5 xl:space-x-[79px]">
          <div className="md:w-6/12">
            {tulisan.map((t) => {
              if (t.id < 2) {
                return (
                  <div key={t.id}>
                    <Link
                      href={{
                        pathname: "/detailblog",
                        query: { id: `${t.id}` },
                      }}
                    >
                      <Image width="618" height="352" src={t.img} alt="" />
                    </Link>
                    <Link
                      href={{
                        pathname: "/detailblog",
                        query: { id: `${t.id}` },
                      }}
                    >
                      <h4 className="xl:text-[26px] text-xl mt-[10px] xl:mt-6 xl:mb-[18px] mb-[15px] font-medium text-black/80">
                        {t.title}
                      </h4>
                    </Link>
                    <p className="text-lg text-justify xl:text-xl text-secondary">
                      {t.desc}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="md:w-6/12 flex flex-col md:mt-0 mt-8 space-y-5  xl:space-y-[60px]">
            {tulisan.map((t) => {
              if (t.id > 1) {
                return (
                  <div
                    key={t.id}
                    className="flex items-start md:space-x-3 xl:space-x-6"
                  >
                    <div>
                      <Link
                        href={{
                          pathname: "/detailblog",
                          query: { id: `${t.id}` },
                        }}
                      >
                        <h4 className="xl:text-2xl md:text-lg sm:text-base text-black/80 font-medium xl:mb-[25px] mb-2">
                          {t.title}
                        </h4>
                      </Link>
                      <p className="text-sm md:text-base xl:text-xl text-secondary">
                        {t.date}
                      </p>
                    </div>
                    <Link
                      className="flex-shrink-0 order-first mr-5 md:mr-0 md:order-last"
                      href={{
                        pathname: "/detailblog",
                        query: { id: `${t.id}` },
                      }}
                    >
                      <Image
                        width="123"
                        height="120"
                        src={t.img}
                        alt=""
                        className="xl:w-[123px] w-[80px] "
                      />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="xl:mt-20 mt-[60px] sm:text-left md:text-center">
          <Link href="/allblog">
            <Button>Lihat Selengkapnya</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
