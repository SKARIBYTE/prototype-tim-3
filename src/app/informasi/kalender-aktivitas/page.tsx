import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kalender Aktivitas",
  description: "Jadwal kegiatan akademik dan non-akademik selama tahun ajaran.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 pb-24">
      <PageHero
        title="Kalender Aktivitas"
        subtitle="Jadwal kegiatan akademik dan non-akademik selama tahun ajaran."
        imageSrc="https://picsum.photos/seed/skariga-kalender/1920/1080"
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
          <p className="text-slate-500 text-lg">Halaman ini sedang dalam tahap pengembangan.</p>
        </div>
      </section>
    </main>
  );
}
