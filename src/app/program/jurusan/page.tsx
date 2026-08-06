import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { departments } from "@/data";
import JurCard from "@/components/JurCard";

export const metadata: Metadata = {
  title: "Jurusan",
  description: "16 kompetensi keahlian di 4 departemen SMK PGRI 3 Malang: Elektro, Otomotif, Pemesinan, dan TIK.",
};

const majorImages: Record<string, string> = {
  teav: "https://picsum.photos/seed/major-teav/800/600",
  ei: "https://picsum.photos/seed/major-ei/800/600",
  ki: "https://picsum.photos/seed/major-ki/800/600",
  pb: "https://picsum.photos/seed/major-pb/800/600",
  tsm: "https://picsum.photos/seed/major-tsm/800/600",
  tkr: "https://picsum.photos/seed/major-tkr/800/600",
  bo: "https://picsum.photos/seed/major-bo/800/600",
  bdp: "https://picsum.photos/seed/major-bdp/800/600",
  tl: "https://picsum.photos/seed/major-tl/800/600",
  tp: "https://picsum.photos/seed/major-tp/800/600",
  nima: "https://picsum.photos/seed/major-nima/800/600",
  dkv: "https://picsum.photos/seed/major-dkv/800/600",
  bp: "https://picsum.photos/seed/major-bp/800/600",
  tkj: "https://picsum.photos/seed/major-tkj/800/600",
  rpl: "https://picsum.photos/seed/major-rpl/800/600",
};

const deptBarColors: Record<string, string> = {
  elektro: "bg-yellow-500",
  otomotif: "bg-red-500",
  pemesinan: "bg-blue-500",
  tik: "bg-purple-500",
};

export default function JurusanPage() {
  return (
    <main className="bg-white">
      <PageHero
        title="Jurusan & Kompetensi Keahlian"
        subtitle="16 kompetensi keahlian di 4 departemen: Elektro, Otomotif, Pemesinan, dan TIK."
        imageSrc="https://picsum.photos/seed/skariga-jurusan/1920/1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {departments.map((dept) => {
          const isScrollable = dept.majors.length > 3;

          return (
            <section key={dept.id} id={dept.id} className="scroll-mt-28">
              <div className="flex items-start gap-4 mb-10">
                <div className={`w-1 h-10 rounded-full shrink-0 mt-1 ${deptBarColors[dept.id] ?? "bg-slate-400"}`} />
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 leading-tight">{dept.name}</h2>
                  <p className="text-slate-500 mt-1 max-w-2xl">{dept.description}</p>
                </div>
              </div>

              {isScrollable ? (
                <div
                  className="flex overflow-x-auto gap-6 pb-6 pt-1 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
                  data-lenis-prevent
                >
                  {dept.majors.map((major) => (
                    <div key={major.id} className="w-80 sm:w-96 shrink-0 snap-start">
                      <JurCard
                        id={major.id}
                        name={major.name}
                        abbreviation={major.abbreviation}
                        departmentId={dept.id}
                        description={major.description}
                        image={majorImages[major.id] ?? "https://picsum.photos/seed/major-default/800/600"}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.majors.map((major) => (
                    <JurCard
                      key={major.id}
                      id={major.id}
                      name={major.name}
                      abbreviation={major.abbreviation}
                      departmentId={dept.id}
                      description={major.description}
                      image={majorImages[major.id] ?? "https://picsum.photos/seed/major-default/800/600"}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
