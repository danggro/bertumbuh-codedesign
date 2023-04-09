import Container from "@/components/Container";

export default function SectionSubscribe() {
  return (
    <section className="mt-[150px] pt-[39px] pb-[50px] text-center">
      <Container>
        <h2 className="text-black/90 font-medium xl:text-[48px] text-[26px] ">
          Subscribe Newsletter Kami
        </h2>
        <p className="w-5/12 xl:block hidden px-5 xl:mb-[45px] md:mb-8 mx-auto xl:mt-6 md:mt-4 md:text-base xl:text-lg text-secondary">
          Jangan sampai terlewat informasi serta berita dari kami subscribe
          sekarang!
        </p>
        <p className="md:w-6/12 px-6 xl:hidden xl:mb-[45px] mb-8 mx-auto xl:mt-6 md:mt-4 md:text-base xl:text-lg text-secondary">
          Jangan sampai terlewat informasi dari Bertumbuh
        </p>
        <div className="border shadow-lg flex justify-between p-[14px] xl:w-[620px] md:w-[458px] mx-auto border-primary">
          <input
            type="email"
            placeholder="Masukkan email aktif anda..."
            className="w-full px-2 text-sm font-medium text-left xl:text-base focus:outline-none"
          />
          <button
            className="xl:px-9 px-3 xl:py-[14px] py-[10px] bg-primary border border-primary hover:bg-white hover:text-primary
           text-white text-xs xl:text-base font-medium drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] "
          >
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
}
