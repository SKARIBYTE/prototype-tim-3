import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Trophy } from "lucide-react";
import type { Metadata } from "next";
import {
  departments,
  alumniProfiles,
  industryPartners,
  achievements,
} from "@/data/mockData";

export const metadata: Metadata = {
  title: "Beranda",
  description: "SMK PGRI 3 Malang - Sekolah Menengah Kejuruan unggulan di Kota Malang dengan 16 kompetensi keahlian.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10 w-[800px] h-[800px]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="currentColor" />
            <circle cx="50" cy="50" r="30" className="text-primary" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              SMK PGRI 3 Malang
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Sekolah Menengah Kejuruan unggulan di Kota Malang dengan 16 kompetensi keahlian yang siap mencetak generasi profesional untuk masa depan.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/jurusan"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
              >
                Lihat Jurusan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/ppdb"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-white text-white hover:bg-white/10 transition-colors"
              >
                Daftar PPDB
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Lulusan Terbaik Kami</h2>
            <Link href="/alumni" className="text-primary font-medium hover:underline inline-flex items-center">
              Lihat semua <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {alumniProfiles.length > 0 && (
              <div className="lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={alumniProfiles[0].photo}
                    alt={alumniProfiles[0].name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-primary font-semibold mb-2">{alumniProfiles[0].major} &bull; {alumniProfiles[0].graduationYear}</p>
                    <h3 className="text-2xl font-bold text-white mb-1">{alumniProfiles[0].name}</h3>
                    <p className="text-slate-300 mb-4">{alumniProfiles[0].position} di {alumniProfiles[0].company}</p>
                    <p className="text-white/80 italic line-clamp-3">&quot;{alumniProfiles[0].testimonial}&quot;</p>
                  </div>
                </div>
              </div>
            )}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {alumniProfiles.slice(1, 7).map((alumni) => (
                <div key={alumni.id} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="relative h-20 w-20 shrink-0">
                    <Image
                      src={alumni.photo}
                      alt={alumni.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{alumni.name}</h3>
                    <p className="text-sm text-slate-500 mb-1">{alumni.major} &bull; {alumni.graduationYear}</p>
                    <p className="text-sm font-medium text-primary">{alumni.position}</p>
                    <p className="text-sm text-slate-600">{alumni.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Mitra Industri</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Kami bekerja sama dengan berbagai perusahaan terkemuka untuk memastikan lulusan kami siap terjun ke dunia kerja.</p>
        </div>
        <div className="relative flex overflow-hidden group">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />
          <div className="flex animate-marquee whitespace-nowrap">
            {industryPartners.map((partner) => (
              <div key={partner.id} className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap">
            {industryPartners.map((partner) => (
              <div key={partner.id + "-duplicate"} className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Departemen Kami</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Temukan berbagai program keahlian yang disesuaikan dengan kebutuhan industri modern.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <Link key={dept.id} href={`/jurusan#${dept.id}`} className="group block h-full">
                <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg shrink-0">
                        {dept.abbreviation}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{dept.name}</h3>
                        <p className="text-sm font-medium text-slate-500">{dept.majors.length} Kompetensi Keahlian</p>
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-slate-400 shrink-0 ml-4">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed flex-grow">{dept.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Prestasi Membanggakan</h2>
              <p className="mt-2 text-slate-600">Bukti keunggulan siswa siswi kami di berbagai ajang kompetisi.</p>
            </div>
            <Trophy className="h-12 w-12 text-primary opacity-20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.length > 0 && (
              <div className="md:col-span-2 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${achievements[0].level === 'Nasional' ? 'bg-primary text-white' : achievements[0].level === 'Provinsi' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'}`}>
                      Tingkat {achievements[0].level}
                    </span>
                    <span className="text-sm font-medium text-slate-500">{achievements[0].year}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{achievements[0].title}</h3>
                  <p className="text-primary font-medium mb-4">{achievements[0].event}</p>
                  <p className="text-slate-600 mb-6 max-w-xl">{achievements[0].description}</p>
                  <div className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-50 text-sm font-medium text-slate-700 border border-slate-100">
                    {achievements[0].major}
                  </div>
                </div>
              </div>
            )}
            {achievements.slice(1, 4).map((achievement) => (
              <div key={achievement.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-md text-xs font-semibold ${achievement.level === 'Nasional' ? 'bg-primary text-white' : achievement.level === 'Provinsi' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'}`}>
                    {achievement.level}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{achievement.year}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{achievement.title}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{achievement.event}</p>
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <p className="text-xs font-medium text-slate-600 truncate">{achievement.major}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
