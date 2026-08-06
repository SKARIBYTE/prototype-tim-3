import type { Metadata } from "next";
import EventManagerDemo from "@/components/kalender-demo";

export const metadata: Metadata = {
  title: "Kalender Aktivitas",
  description: "Jadwal kegiatan akademik dan non-akademik selama tahun ajaran.",
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-slate-50 pb-24">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Kalender Aktivitas
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Jadwal kegiatan akademik dan non-akademik selama tahun ajaran.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EventManagerDemo />
      </section>
    </main>
  );
}
