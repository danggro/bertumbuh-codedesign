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
    <section id="Berita" className="mt-[150px]">
      <Container>
        <div>
          <HeadSection
            sect="Baca Tulisan Kami"
            title="Berita, Artikel & Event Terbaru"
          />
          <p className="w-7/12 mt-5 text-xl pr-14 text-secondary">
            Baca dan ikuti event serta program-program yang kami lakukan untuk
            bumi yang lebih baik
          </p>
        </div>
        <div className="flex mt-10 space-x-[79px]">
          <div className="w-6/12">
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
                      <h4 className="text-[26px] mt-6 mb-[18px] font-medium text-black/80">
                        {t.title}
                      </h4>
                    </Link>
                    <p className="text-xl text-justify text-secondary">
                      {t.desc}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="w-6/12 flex flex-col space-y-[60px]">
            {tulisan.map((t) => {
              if (t.id > 1) {
                return (
                  <div key={t.id} className="flex items-center space-x-6">
                    <div>
                      <Link
                        href={{
                          pathname: "/detailblog",
                          query: { id: `${t.id}` },
                        }}
                      >
                        <h4 className="text-2xl text-black/80 font-medium mb-[25px]">
                          {t.title}
                        </h4>
                      </Link>
                      <p className="text-xl text-secondary">{t.date}</p>
                    </div>
                    <Link
                      className="flex-shrink-0"
                      href={{
                        pathname: "/detailblog",
                        query: { id: `${t.id}` },
                      }}
                    >
                      <Image width="123" height="120" src={t.img} alt="" />
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link href="/allblog">
            <Button>Lihat Selengkapnya</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
