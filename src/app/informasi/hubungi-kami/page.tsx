import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Informasi kontak dan lokasi SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 pb-24">
      <Hero 
        title="Hubungi Kami"
        description="Informasi kontak dan lokasi SMK PGRI 3 Malang."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
          <p className="text-slate-500 text-lg">Halaman ini sedang dalam tahap pengembangan.</p>
        </div>
      </section>
    </main>
  );
}
