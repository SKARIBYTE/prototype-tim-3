import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DisplayCards from "@/components/ui/display-cards";
import DraggableScroll from "@/components/ui/draggable-scroll";
import { Factory, Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Kerjasama Industri",
  description: "Jaringan mitra industri kami untuk praktik kerja dan penempatan kerja.",
};

const industries = [
  {
    name: "Honda",
    logo: "/assets/images/honda.svg",
    sector: "Otomotif",
    hoverBorder: "hover:border-red-500",
    hoverShadow: "hover:shadow-red-500/15",
    hoverText: "hover:text-red-600",
    dot: "bg-red-500",
  },
  {
    name: "Indonesia Power",
    logo: "/assets/images/indopo.png",
    sector: "Energi",
    hoverBorder: "hover:border-blue-500",
    hoverShadow: "hover:shadow-blue-500/15",
    hoverText: "hover:text-blue-600",
    dot: "bg-blue-500",
  },
  {
    name: "Jagoan Hosting",
    logo: "/assets/images/jaghos.png",
    sector: "Teknologi",
    hoverBorder: "hover:border-orange-500",
    hoverShadow: "hover:shadow-orange-500/15",
    hoverText: "hover:text-orange-600",
    dot: "bg-orange-500",
  },
  {
    name: "Jawa Pos Radar Malang",
    logo: "/assets/images/jawa-pos.png",
    sector: "Media",
    hoverBorder: "hover:border-sky-600",
    hoverShadow: "hover:shadow-sky-600/15",
    hoverText: "hover:text-sky-600",
    dot: "bg-sky-600",
  },
  {
    name: "LG",
    logo: "/assets/images/lg.png",
    sector: "Elektronik",
    hoverBorder: "hover:border-rose-600",
    hoverShadow: "hover:shadow-rose-600/15",
    hoverText: "hover:text-rose-600",
    dot: "bg-rose-600",
  },
  {
    name: "PJB",
    logo: "/assets/images/pjb.png",
    sector: "Energi",
    hoverBorder: "hover:border-emerald-600",
    hoverShadow: "hover:shadow-emerald-600/15",
    hoverText: "hover:text-emerald-600",
    dot: "bg-emerald-600",
  },
  {
    name: "Polytron",
    logo: "/assets/images/polytron.png",
    sector: "Elektronik",
    hoverBorder: "hover:border-red-700",
    hoverShadow: "hover:shadow-red-700/15",
    hoverText: "hover:text-red-700",
    dot: "bg-red-700",
  },
  {
    name: "Yamaha",
    logo: "/assets/images/yamaha.png",
    sector: "Otomotif",
    hoverBorder: "hover:border-indigo-600",
    hoverShadow: "hover:shadow-indigo-600/15",
    hoverText: "hover:text-indigo-600",
    dot: "bg-indigo-600",
  },
];

const heroCards = [
  {
    icon: <Factory className="size-4 text-orange-300" />,
    title: "Industri Otomotif",
    description: "Honda & Yamaha — mitra utama PKL",
    date: "Aktif 2024",
    iconClassName: "text-orange-500",
    titleClassName: "text-orange-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 focus:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 focus:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 focus:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-yellow-300" />,
    title: "Sektor Energi",
    description: "Indonesia Power & PJB — tenaga listrik",
    date: "Aktif 2024",
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-400",
    className:
      "[grid-area:stack] max-sm:translate-x-6 sm:translate-x-12 translate-y-10 hover:-translate-y-1 focus:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 focus:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 focus:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Globe className="size-4 text-blue-300" />,
    title: "Teknologi & Media",
    description: "Jagoan Hosting, LG, Polytron & Jawa Pos",
    date: "Aktif 2024",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] max-sm:translate-x-12 sm:translate-x-24 translate-y-20 hover:translate-y-10 focus:translate-y-10",
  },
];

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50">
      <section className="bg-slate-900 pt-32 pb-32 lg:pb-40 overflow-hidden relative">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                Kerjasama Industri
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Jaringan mitra industri terpercaya untuk praktik kerja lapangan dan penempatan kerja lulusan SMK PGRI 3 Malang.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <DisplayCards cards={heroCards} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Daftar Mitra Industri
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-slate-400 max-w-xs text-right">
              Geser untuk melihat seluruh mitra kami
            </p>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent" />
        </div>

        <DraggableScroll className="flex gap-4 sm:gap-6 px-4 sm:px-8 lg:px-16 pb-4 pt-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group flex-none flex flex-col items-center gap-2 sm:gap-4 w-36 sm:w-52 py-4 sm:py-8"
            >
              <div
                className={`w-8 sm:w-10 h-0.5 rounded-full transition-all duration-500 group-hover:w-16 sm:group-hover:w-20 ${ind.dot}`}
              />

              <div className="relative w-28 h-16 sm:w-44 sm:h-28 flex items-center justify-center">
                <Image
                  src={ind.logo}
                  alt={`Logo ${ind.name}`}
                  fill
                  className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  sizes="(max-width: 640px) 112px, 176px"
                  draggable={false}
                />
              </div>

              <div className="text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <p className="text-sm font-semibold text-slate-800">{ind.name}</p>
                <div className="mt-1 inline-flex items-center gap-1.5">
                  <span className={`inline-block size-1.5 rounded-full ${ind.dot}`} />
                  <span className="text-xs text-slate-400">{ind.sector}</span>
                </div>
              </div>
            </div>
          ))}
        </DraggableScroll>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <p className="text-center text-xs text-slate-400 mt-4">
            {industries.length} mitra industri aktif · SMK PGRI 3 Malang
          </p>
        </div>
      </section>
    </main>
  );
}
