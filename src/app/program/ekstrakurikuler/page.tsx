import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Ekstrakurikuler",
  description: "Beragam kegiatan di luar jam pelajaran untuk mengembangkan bakat dan minat siswa.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 pb-24">
      <Hero 
        title="Ekstrakurikuler"
        description="Beragam kegiatan di luar jam pelajaran untuk mengembangkan bakat dan minat siswa."
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
          <p className="text-slate-500 text-lg">Halaman ini sedang dalam tahap pengembangan.</p>
        </div>
      </section>
    </main>
  );
}
