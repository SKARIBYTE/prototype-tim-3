import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Trophy, Award, BookOpen, Users, Briefcase } from "lucide-react";
import type { Metadata } from "next";
import {
  departments,
  industryPartners,
} from "@/data";

export const metadata: Metadata = {
  title: "Beranda | SMK PGRI 3 Malang",
  description: "SMK PGRI 3 Malang - Sekolah Menengah Kejuruan unggulan di Kota Malang dengan 16 kompetensi keahlian.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative min-h-dvh flex items-center justify-center pt-32 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero-skariga/1920/1080"
            alt="SMK PGRI 3 Malang"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse" />
            <span className="text-sm font-medium text-white tracking-wide uppercase">Penerimaan Peserta Didik Baru Dibuka</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl drop-shadow-lg">
            Wujudkan Masa Depan <br className="hidden sm:block" />
            Bersama <span className="text-primary">SMK PGRI 3 Malang</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Sekolah Menengah Kejuruan unggulan di Kota Malang dengan 16 kompetensi keahlian yang siap mencetak generasi profesional untuk masa depan.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/program/jurusan"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              Jelajahi Program Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/ppdb"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1"
            >
              Informasi PPDB
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-3" />
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-slate-100 shadow-xl">
                <Image
                  src="/assets/images/kepsek.webp"
                  alt="Kepala Sekolah SMK PGRI 3 Malang"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">25+ Tahun</p>
                    <p className="text-sm font-medium text-slate-500">Mencetak Lulusan Terbaik</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Sambutan Kepala Sekolah</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Selamat Datang di <br/> SMK PGRI 3 Malang
              </h3>
              <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed">
                <p>
                  Pendidikan kejuruan adalah kunci untuk membuka pintu masa depan yang gemilang. Di SMK PGRI 3 Malang, kami tidak hanya membekali siswa dengan keterampilan teknis mutakhir, tetapi juga membentuk karakter, kedisiplinan, dan mentalitas juara.
                </p>
                <p>
                  Dengan dukungan fasilitas standar industri dan tenaga pendidik profesional, kami terus berkomitmen untuk menyelaraskan kurikulum dengan kebutuhan Dunia Usaha dan Dunia Industri (DUDI), memastikan setiap lulusan kami siap bekerja, melanjutkan studi, atau berwirausaha.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="font-bold text-slate-900 text-xl">M. Lukman Hakim, S.T.</p>
                <p className="text-slate-500 font-medium">Kepala SMK PGRI 3 Malang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Kenapa SKARIGA?</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Keunggulan Bersekolah di Sini</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami memadukan pendidikan vokasi berkualitas tinggi dengan pengembangan karakter untuk menghasilkan lulusan yang siap bersaing secara global.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/20 group">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Akreditasi A</h4>
              <p className="text-slate-600 leading-relaxed">
                Diakui dengan nilai akreditasi unggul, menjamin kualitas pendidikan berstandar nasional dan fasilitas yang memadai.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/20 group">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Kurikulum Industri</h4>
              <p className="text-slate-600 leading-relaxed">
                Pembelajaran diselaraskan langsung dengan industri mitra, menggunakan peralatan dan prosedur standar dunia kerja.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/20 group">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Bursa Kerja Khusus</h4>
              <p className="text-slate-600 leading-relaxed">
                Dukungan penyaluran kerja eksklusif bagi lulusan melalui ratusan mitra perusahaan berskala nasional dan multinasional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-primary/20 group">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Tenaga Ahli</h4>
              <p className="text-slate-600 leading-relaxed">
                Dibimbing langsung oleh para praktisi dan guru produktif yang tersertifikasi secara profesional di bidangnya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Program Kami</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900">Departemen Unggulan</h3>
              <p className="mt-4 text-lg text-slate-600">
                Pilih dari 6 departemen dengan 16 kompetensi keahlian yang dirancang secara spesifik untuk menjawab tantangan industri modern.
              </p>
            </div>
            <Link href="/program/jurusan" className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
              Lihat Seluruh Jurusan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Link key={dept.id} href={`/program/jurusan#${dept.id}`} className="group relative aspect-3/4 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-2">{dept.name}</h4>
                    <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{dept.description}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <p className="text-xs font-medium text-white/90">{dept.majors.length} Kompetensi Keahlian</p>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Koneksi Luas</h2>
          <h3 className="text-3xl font-bold text-white mb-4">Ratusan Mitra Industri</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Berjejaring dengan perusahaan nasional dan multinasional untuk menjamin ekosistem pembelajaran yang aplikatif dan peluang karir yang cemerlang.
          </p>
        </div>
        
        <div className="relative flex overflow-hidden group py-4">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
          
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {industryPartners.map((partner) => (
              <div key={partner.id} className="mx-8 lg:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={180}
                  className="h-12 lg:h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {industryPartners.map((partner) => (
              <div key={partner.id + "-duplicate"} className="mx-8 lg:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={70}
                  className="h-12 lg:h-16 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
