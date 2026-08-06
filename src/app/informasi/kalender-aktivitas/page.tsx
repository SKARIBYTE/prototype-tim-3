import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EventManagerDemo from "@/components/kalender-demo";
import { getAsset } from "@/lib/utils";

import CalendarIframe from "@/components/CalendarIframe";

export const metadata: Metadata = {
  title: "Kalender Aktivitas",
  description: "Jadwal kegiatan akademik dan non-akademik selama tahun ajaran.",
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-slate-50 pb-24">
      <PageHero
        title="Kalender Aktivitas"
        subtitle="Jadwal kegiatan akademik dan non-akademik selama tahun ajaran."
        imageSrc={getAsset('images', 'ujian.png')}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
        {/* <EventManagerDemo /> */}
        <CalendarIframe src="https://calendar.google.com/calendar/embed?src=id.indonesian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FJakarta" />
      </section>
    </main>
  );
}
