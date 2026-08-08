import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EkstraCard from "@/components/EkstraCard";
import { extracurricularCategories, extracurriculars } from "@/data";

export const metadata: Metadata = {
  title: "Ekstrakurikuler",
  description:
    "Beragam kegiatan ekstrakurikuler SMK PGRI 3 Malang: olahraga, seni, teknologi, bahasa, kebangsaan, dan keagamaan untuk mengembangkan bakat dan karakter siswa.",
};

const extracurricularImages: Record<string, string> = {
  futsal: "https://picsum.photos/seed/ekstra-futsal/800/600",
  voli: "https://picsum.photos/seed/ekstra-voli/800/600",
  "sepak-bola": "https://picsum.photos/seed/ekstra-sepakbola/800/600",
  badminton: "https://picsum.photos/seed/ekstra-badminton/800/600",
  beladiri: "https://picsum.photos/seed/ekstra-beladiri/800/600",
  band: "https://picsum.photos/seed/ekstra-band/800/600",
  fotografi: "https://picsum.photos/seed/ekstra-fotografi/800/600",
  "indonesia-craft": "https://picsum.photos/seed/ekstra-craft/800/600",
  robotik: "https://picsum.photos/seed/ekstra-robotik/800/600",
  "e-sport": "https://picsum.photos/seed/ekstra-esport/800/600",
  "bahasa-inggris": "https://picsum.photos/seed/ekstra-inggris/800/600",
  "bahasa-perancis": "https://picsum.photos/seed/ekstra-perancis/800/600",
  "bahasa-jerman": "https://picsum.photos/seed/ekstra-jerman/800/600",
  pramuka: "https://picsum.photos/seed/ekstra-pramuka/800/600",
  paskibra: "https://picsum.photos/seed/ekstra-paskibra/800/600",
  bdi: "https://picsum.photos/seed/ekstra-bdi/800/600",
};

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        title="Ekstrakurikuler"
        subtitle="Beragam kegiatan di luar jam pelajaran untuk mengembangkan bakat, minat, dan karakter siswa SMK PGRI 3 Malang."
        imageSrc="https://picsum.photos/seed/skariga-ekstrakurikuler/1920/1080"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Mengembangkan Potensi di Luar Kelas</h2>
          <p className="text-slate-600 leading-relaxed">
            Ekstrakurikuler SMK PGRI 3 Malang dirancang untuk melengkapi pendidikan formal dengan pengalaman
            praktis di bidang olahraga, seni, teknologi, bahasa, kebangsaan, dan keagamaan. Setiap siswa
            didorong untuk aktif berpartisipasi guna mengasah soft skill, kerja sama tim, dan kepemimpinan
            yang dibutuhkan di dunia kerja maupun masyarakat.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24">
        {extracurricularCategories.map((category) => {
          const items = extracurriculars.filter((item) => item.categoryId === category.id);
          if (items.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="scroll-mt-28">
              <div className="flex items-start gap-4 mb-10">
                <div className={`w-1 h-10 rounded-full shrink-0 mt-1 ${category.color}`} />
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 leading-tight">{category.name}</h2>
                  <p className="text-slate-500 mt-1 max-w-2xl">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <EkstraCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={
                      extracurricularImages[item.id] ??
                      "https://picsum.photos/seed/ekstra-default/800/600"
                    }
                    accentColor={category.color}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Tertarik Bergabung?</h2>
          <p className="text-primary-50 mb-2 max-w-2xl mx-auto">
            Siswa dapat mendaftar kegiatan ekstrakurikuler melalui wali kelas masing-masing atau
            menghubungi Bidang Kesiswaan SMK PGRI 3 Malang untuk informasi jadwal dan persyaratan.
          </p>
          <p className="text-primary-50/80 text-sm max-w-xl mx-auto">
            Setiap kegiatan dibimbing oleh pembina yang berpengalaman dan rutin mengikuti kompetisi
            tingkat sekolah, kota, hingga provinsi.
          </p>
        </div>
      </section>
    </main>
  );
}
