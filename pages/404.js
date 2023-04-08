import Button from "@/components/Button";
import Link from "next/link";

export default function notfound() {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center">
      <div>
        <h1 className="text-primary font-medium text-[200px]">404</h1>
        <h3 className="text-secondary mb-6 font-medium text-[42px]">
          Upsss... Halaman Tidak Ada
        </h3>
        <p className="text-lg text-secondary mb-[150px]">
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
