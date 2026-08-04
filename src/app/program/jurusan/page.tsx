import { Metadata } from "next";
import { departments } from "@/data";
import { Department, Major } from "@/types";

export const metadata: Metadata = {
  title: "Jurusan",
  description:
    "16 kompetensi keahlian di 4 departemen SMK PGRI 3 Malang: Elektro, Otomotif, Pemesinan, dan TIK.",
};

export default function JurusanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Jurusan dan Kompetensi Keahlian
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            16 kompetensi keahlian di 4 departemen SMK PGRI 3 Malang.
          </p>
        </div>
      </section>

      {departments.map((department: Department) => (
        <section key={department.id} className="py-16 border-b border-slate-100 last:border-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{department.name}</h2>
              <p className="text-lg text-slate-600 max-w-3xl">{department.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.majors.map((major: Major) => (
                <div
                  key={major.id}
                  className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{major.name}</h3>
                    <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ml-4">
                      {major.abbreviation}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-6 flex-grow">{major.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Kompetensi Utama</h4>
                    <ul className="space-y-2">
                      {major.competencies.slice(0, 4).map((competency, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm text-slate-600">{competency}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Prospek Karir</h4>
                    <div className="flex flex-wrap gap-2">
                      {major.careerProspects.map((career, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
