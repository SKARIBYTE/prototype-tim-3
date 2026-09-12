import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisplayCards from "@/components/ui/display-cards";
import DraggableScroll from "@/components/ui/draggable-scroll";
import PageHero from "@/components/PageHero";
import { 
  Factory, 
  Globe, 
  Zap, 
  Briefcase, 
  Users, 
  Award, 
  GraduationCap, 
  Handshake, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kerjasama Industri | SMK PGRI 3 Malang",
  description: "Jaringan mitra industri terpercaya untuk Praktik Kerja Lapangan (PKL), kelas industri, dan penempatan kerja lulusan SMK PGRI 3 Malang.",
};

const industries = [
  {
    name: "Honda",
    logo: "/assets/images/honda.svg",
    sector: "Otomotif",
    dot: "bg-red-500",
  },
  {
    name: "Indonesia Power",
    logo: "/assets/images/indopo.png",
    sector: "Energi",
    dot: "bg-blue-500",
  },
  {
    name: "Jagoan Hosting",
    logo: "/assets/images/jaghos.png",
    sector: "Teknologi",
    dot: "bg-orange-500",
  },
  {
    name: "Jawa Pos Radar Malang",
    logo: "/assets/images/jawa-pos.png",
    sector: "Media",
    dot: "bg-sky-600",
  },
  {
    name: "LG",
    logo: "/assets/images/lg.png",
    sector: "Elektronik",
    dot: "bg-rose-600",
  },
  {
    name: "PJB",
    logo: "/assets/images/pjb.png",
    sector: "Energi",
    dot: "bg-emerald-600",
  },
  {
    name: "Polytron",
    logo: "/assets/images/polytron.png",
    sector: "Elektronik",
    dot: "bg-red-700",
  },
  {
    name: "Yamaha",
    logo: "/assets/images/yamaha.png",
    sector: "Otomotif",
    dot: "bg-indigo-600",
  },
];

const heroCards = [
  {
    icon: <Factory className="size-5 text-orange-600" />,
    title: "Industri Otomotif",
    description: "Honda & Yamaha - Mitra Utama PKL & Kelas Industri",
    date: "Kemitraan Aktif",
    iconClassName: "text-orange-600",
    titleClassName: "text-orange-600",
    className:
      "[grid-area:stack] hover:-translate-y-10 focus:-translate-y-10 transition-all duration-500",
  },
  {
    icon: <Zap className="size-5 text-amber-600" />,
    title: "Sektor Energi",
    description: "Indonesia Power & PJB - Sertifikasi & Magang Pembangkitan",
    date: "Kemitraan Aktif",
    iconClassName: "text-amber-600",
    titleClassName: "text-amber-600",
    className:
      "[grid-area:stack] max-sm:translate-x-6 sm:translate-x-12 translate-y-10 hover:-translate-y-1 focus:-translate-y-1 transition-all duration-500",
  },
  {
    icon: <Globe className="size-5 text-blue-600" />,
    title: "Teknologi & Media",
    description: "Jagoan Hosting, LG, Polytron & Jawa Pos Group",
    date: "Kemitraan Aktif",
    iconClassName: "text-blue-600",
    titleClassName: "text-blue-600",
    className:
      "[grid-area:stack] max-sm:translate-x-12 sm:translate-x-24 translate-y-20 hover:translate-y-10 focus:translate-y-10 transition-all duration-500",
  },
];

const programs = [
  {
    icon: Briefcase,
    title: "Praktik Kerja Lapangan (PKL)",
    description: "Program magang terstruktur selama 6–12 bulan di perusahaan mitra sesuai kompetensi keahlian siswa.",
  },
  {
    icon: GraduationCap,
    title: "Kelas Industri & Kurikulum Kemitraan",
    description: "Sinkronisasi kurikulum sekolah dengan kebutuhan riil dunia usaha dan dunia industri (DUDI).",
  },
  {
    icon: Users,
    title: "Program Guru Tamu & Praktisi",
    description: "Praktisi dan pakar dari industri berkunjung secara berkala untuk memberikan materi eksklusif.",
  },
  {
    icon: Award,
    title: "Rekrutmen & Penempatan Kerja",
    description: "Fasilitas penyaluran kerja langsung bagi lulusan melalui BKK (Bursa Kerja Khusus) sekolah.",
  },
];

const stats = [
  { value: "100+", label: "Mitra Industri Aktif" },
  { value: "92%", label: "Tingkat Serapan Lulusan" },
  { value: "1.200+", label: "Siswa PKL per Tahun" },
  { value: "15+", label: "Kelas Binaan Industri" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Hero Section */}
      <PageHero
        title="Kerjasama Industri"
        subtitle="Membangun sinergi kuat antara pendidikan vokasi dan dunia industri nasional untuk mencetak lulusan yang siap kerja dan berdaya saing global."
        imageSrc="https://picsum.photos/seed/skariga-kerjasama/1920/1080"
      />

      {/* 2. Highlight Cards & Intro Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Handshake className="size-4" />
                Sinergi Vokasi & Industri
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Menghubungkan Pembelajaran dengan Realitas Industri
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                SMK PGRI 3 Malang secara berkelanjutan menjalin kemitraan strategis dengan berbagai lini industri terkemuka. Kami memastikan kurikulum selalu relevan dengan perkembangan teknologi masa kini.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Peningkatan kompetensi berbasis standar industri",
                  "Kesempatan rekrutmen prioritas bagi alumni",
                  "Sertifikasi keahlian resmi dari industri mitra",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <DisplayCards cards={heroCards} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stat Section */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className={`${idx !== 0 ? "pt-6 sm:pt-0" : ""}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-400 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Draggable Logo Showcase Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Jaringan Kemitraan</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mt-1">
                Daftar Mitra Industri Utama
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-xs sm:text-right">
              Geser secara horizontal untuk menelusuri daftar mitra industri kami
            </p>
          </div>
          <div className="mt-6 h-px bg-slate-200" />
        </div>

        <DraggableScroll className="flex gap-6 px-4 sm:px-8 lg:px-16 pb-6 pt-2">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group flex-none flex flex-col items-center justify-between w-44 sm:w-56 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-full flex items-center justify-between mb-4">
                <span className={`size-2.5 rounded-full ${ind.dot}`} />
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {ind.sector}
                </span>
              </div>

              <div className="relative w-32 h-20 sm:w-40 sm:h-24 my-2 flex items-center justify-center">
                <Image
                  src={ind.logo}
                  alt={`Logo ${ind.name}`}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  sizes="(max-width: 640px) 128px, 160px"
                  draggable={false}
                />
              </div>

              <p className="text-sm font-bold text-slate-800 text-center mt-3 group-hover:text-blue-600 transition-colors">
                {ind.name}
              </p>
            </div>
          ))}
        </DraggableScroll>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
          <p className="text-xs text-slate-400">
            {industries.length}+ Mitra Terverifikasi · SMK PGRI 3 Malang
          </p>
        </div>
      </section>

      {/* 5. Program Kerjasama */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Pilar Program Kerjasama
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Berbagai bentuk kolaborasi yang dirancang untuk memberikan dampak nyata bagi pengembangan kompetensi siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {prog.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ingin Menjadi Mitra Industri Kami?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Buka peluang kolaborasi dalam rekrutmen tenaga kerja berkualitas, program magang, hingga pengembangan kelas industri bersama SMK PGRI 3 Malang.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                <span>Hubungi Tim Hubin</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}