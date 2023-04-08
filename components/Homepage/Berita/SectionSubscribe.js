import Container from "@/components/Container";

export default function SectionSubscribe() {
  return (
    <section className="mt-[150px] pt-[39px] pb-[50px] text-center">
      <Container>
        <h2 className="text-black/90 font-medium xl:text-[48px] md:text-[26px] ">
          Subscribe Newsletter Kami
        </h2>
        <p className="w-5/12 xl:block md:hidden px-5 xl:mb-[45px] md:mb-8 mx-auto xl:mt-6 md:mt-4 md:text-base xl:text-lg text-secondary">
          Jangan sampai terlewat informasi serta berita dari kami subscribe
          sekarang!
        </p>
        <p className="w-6/12 px-5 xl:hidden xl:mb-[45px] md:mb-8 mx-auto xl:mt-6 md:mt-4 md:text-base xl:text-lg text-secondary">
          Jangan sampai terlewat informasi dari Bertumbuh
        </p>
        <div className="border shadow-lg flex justify-between p-[14px] xl:w-[620px] md:w-[458px] mx-auto border-primary">
          <input
            type="email"
            placeholder="Masukkan email aktif anda..."
            className="w-full px-2 font-medium text-left md:text-sm xl:text-base focus:outline-none"
          />
          <button
            className="xl:px-9 md:px-3 xl:py-[14px] md:py-[10px] bg-primary border border-primary hover:bg-white hover:text-primary
           text-white md:text-xs xl:text-base font-medium drop-shadow-[0_15px_30px_rgba(120,202,147,0.3)] "
          >
            Subscribe
          </button>
        </div>
      </Container>
    </section>
  );
}
