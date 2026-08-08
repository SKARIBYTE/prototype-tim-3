"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AlumniFlipCard, { AlumniData } from "@/components/AlumniFlipCard";

const alumniList: AlumniData[] = [
  {
    id: "1",
    name: "Rizky Febrian",
    year: "2019",
    major: "Teknik Kendaraan Ringan",
    role: "Senior Service Technician",
    company: "PT Honda Prospect Motor",
    quote: "Kedisiplinan dan jam terbang praktikum di Skariga membentuk mental kerja tangguh sebelum saya terjun ke industri otomotif skala besar.",
    image: "https://picsum.photos/seed/alumni1/600/800",
    tag: "AUTOMOTIVE",
    isLegacy: false,
  },
  {
    id: "2",
    name: "Nabila Putri",
    year: "2021",
    major: "Rekayasa Perangkat Lunak",
    role: "Frontend Developer",
    company: "Jagoan Hosting Indonesia",
    quote: "Kurikulum berbasis industri membuat transisi dari bangku sekolah ke ekosistem kerja digital dan startup terasa sangat seamless.",
    image: "https://picsum.photos/seed/alumni2/600/800",
    tag: "TECHNOLOGY",
    isLegacy: false,
  },
  {
    id: "3",
    name: "Dimitri Kurnia",
    year: "2018",
    major: "Teknik Otomasi Industri",
    role: "Automation Engineer",
    company: "PT Indonesia Power",
    quote: "Fasilitas laboratorium modern di SMK PGRI 3 Malang membiasakan kami berteman dengan instrumen otomasi standar industri energi nasional.",
    image: "https://picsum.photos/seed/alumni3/600/800",
    tag: "ENERGY",
    isLegacy: false,
  },
  {
    id: "4",
    name: "Bambang Sutrisno",
    year: "2008",
    major: "Teknik Pemesinan",
    role: "Plant Operations Manager",
    company: "PT Polytron Indonesia",
    quote: "Di era 2000-an, Skariga sudah mengajarkan standar presisi tinggi yang menjadi modal utama saya meniti karir hingga jenjang manajerial.",
    image: "https://picsum.photos/seed/alumni4/600/800",
    tag: "LEGACY ARCHIVE",
    isLegacy: true,
  },
  {
    id: "5",
    name: "Siti Rahmawati",
    year: "2012",
    major: "Teknik Sepeda Motor",
    role: "Chief Technical Specialist",
    company: "AHASS Yamaha",
    quote: "Jam praktikum yang intensif membuat kami tidak canggung saat menghadapi permasalahan teknis mesin di bengkel resmi.",
    image: "https://picsum.photos/seed/alumni5/600/800",
    tag: "LEGACY ARCHIVE",
    isLegacy: true,
  },
  {
    id: "6",
    name: "Fiona Anggraini",
    year: "2022",
    major: "Multimedia / DKV",
    role: "UI/UX Designer",
    company: "Jawa Pos Media Group",
    quote: "Portfolio project-based learning semasa sekolah menjadi modal utama saya langsung direkrut sebelum wisuda.",
    image: "https://picsum.photos/seed/alumni6/600/800",
    tag: "CREATIVE",
    isLegacy: false,
  },
];

const distributionData = [
  { label: "Manufaktur & Otomotif", percent: "42%", detail: "6.300+ Alumni" },
  { label: "Teknologi & Informasi", percent: "28%", detail: "4.200+ Alumni" },
  { label: "Energi & Kelistrikan", percent: "18%", detail: "2.700+ Alumni" },
  { label: "Wirausaha & Media", percent: "12%", detail: "1.800+ Alumni" },
];

export default function AlumniPage() {
  const [filter, setFilter] = useState<"all" | "modern" | "legacy">("all");

  const filteredAlumni = alumniList.filter((item) => {
    if (filter === "modern") return !item.isLegacy;
    if (filter === "legacy") return item.isLegacy;
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      <PageHero
        title="Alumni"
        subtitle="Jaringan ikatan alumni dan rekam jejak lulusan SMK PGRI 3 Malang di berbagai industri nasional dan internasional."
        imageSrc="https://picsum.photos/seed/skariga-alumni/1920/1080"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 pb-6 gap-6">
            <div>
              <span
                className="text-xs font-mono tracking-widest font-bold uppercase"
                style={{ color: "var(--color-primary)" }}
              >
                / DIGITAL YEARBOOK GALLERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Katalog Flip-Card Alumni
              </h2>
            </div>

            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start md:self-auto">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === "all"
                    ? "bg-white text-slate-900 font-bold shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Semua ({alumniList.length})
              </button>
              <button
                onClick={() => setFilter("modern")}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === "modern"
                    ? "bg-white text-slate-900 font-bold shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Angkatan Baru
              </button>
              <button
                onClick={() => setFilter("legacy")}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === "legacy"
                    ? "bg-[#3d2e1e] text-[#f5f0e6] font-bold shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Archive Paper (Lama)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alumni) => (
              <AlumniFlipCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span
                className="text-xs font-mono font-bold uppercase tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                / TRACER STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Bagian dari Alumni Skariga?
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Bantu sekolah memperbarui data Tracer Study untuk memperluas jejaring kemitraan industri dan bimbingan karir bagi adik-adik angkatan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="https://forms.gle"
                target="_blank"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white shadow-md transition-all text-sm hover:opacity-90"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Isi Data Tracer Study
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
