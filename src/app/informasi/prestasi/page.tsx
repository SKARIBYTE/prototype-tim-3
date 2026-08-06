import type { Metadata } from "next";
import PrestasiClient from "./PrestasiClient";

export const metadata: Metadata = {
  title: "Prestasi",
  description: "Daftar pencapaian membanggakan siswa dan sekolah.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-white pb-24">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Prestasi
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Daftar pencapaian membanggakan siswa dan sekolah.
          </p>
        </div>
      </section>
      <PrestasiClient />
    </main>
  );
}
