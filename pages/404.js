import Button from "@/components/Button";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center">
      <div>
        <h1 className="text-primary font-medium xl:text-[200px] md:text-[160px] text-[120px] ">
          404
        </h1>
        <h3 className="text-secondary xl:mb-6 mb-3 font-medium text-2xl xl:text-[42px]">
          Upsss... Halaman Tidak Ada
        </h3>
        <p className="xl:text-lg text-xs text-secondary mb-[60px] xl:mb-[150px]">
          Mohon maaf, halaman yang anda buka tidak ditemukan <br /> Pastikan URL
          yang anda masukkan benar
        </p>
        <Link href={`/`}>
          <Button>Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
