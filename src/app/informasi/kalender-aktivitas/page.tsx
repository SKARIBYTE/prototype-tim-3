import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventManagerDemo from "@/components/kalender-demo";

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
        <EventManagerDemo />
      </section>
    </main>
  );
}
