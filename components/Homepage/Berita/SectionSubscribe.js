import Container from "@/components/Container";

export default function SectionSubscribe() {
  return (
    <section className="mt-[150px] pt-[39px] pb-[50px] text-center">
      <Container>
        <h2 className="text-black/80 text-[48px] ">
          Subscribe Newsletter Kami
        </h2>
        <p className="w-5/12 px-5 mb-[45px] mx-auto mt-6 text-lg text-secondary">
          Jangan sampai terlewat indormasi serta berita dari kami subscribe
          sekarang!
        </p>
        <div className="border shadow-lg flex justify-between p-[14px] w-[620px] mx-auto border-primary">
          <input
            type="email"
            placeholder="Masukkan email aktif anda..."
            className="w-full px-2 text-base font-medium text-left focus:outline-none"
          />
          <button
            className="px-9 py-[14px] bg-primary border border-primary hover:bg-white hover:text-primary
           text-white text-base font-medium drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] "
          >
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
}
