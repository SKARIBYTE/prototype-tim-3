import type { Metadata } from "next";
import { bkiJobs } from "@/data";
import { MapPin, DollarSign, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BKI",
  description: "Bursa Kerja Khusus SMK PGRI 3 Malang - lowongan kerja, magang, dan penempatan PKL di perusahaan ternama.",
};

function getTypeStyles(type: string) {
  if (type === "Full-time") return "bg-green-100 text-green-700";
  if (type === "Magang") return "bg-blue-100 text-blue-700";
  if (type === "PKL") return "bg-amber-100 text-amber-800";
  return "bg-slate-100 text-slate-700";
}

export default function BkkPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <section className="bg-slate-900 pt-32 pb-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Bursa Kerja Khusus</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Jembatan karir siswa dan alumni SMK PGRI 3 Malang dengan dunia usaha dan industri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium">Semua</span>
          <span className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
            Full-time
          </span>
          <span className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
            Magang
          </span>
          <span className="px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
            PKL
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bkiJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded bg-slate-50 object-contain border border-slate-100"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-slate-900 truncate">{job.position}</h3>
                  <p className="text-slate-600 truncate">{job.company}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getTypeStyles(job.type)}`}>
                  {job.type}
                </span>
              </div>

              <div className="space-y-2 mb-6 flex-1">
                <div className="flex items-center text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 mr-2 shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                  <DollarSign className="w-4 h-4 mr-2 shrink-0" />
                  <span>{job.salaryRange}</span>
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2 shrink-0" />
                  <span>Batas: {job.deadline}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <h4 className="text-sm font-semibold text-slate-900 mb-2">Persyaratan Khusus:</h4>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-4">
                  {job.requirements.slice(0, 3).map((req, idx) => (
                    <li key={idx} className="truncate">{req}</li>
                  ))}
                  {job.requirements.length > 3 && (
                    <li className="text-slate-400 list-none text-xs mt-1">+{job.requirements.length - 3} syarat lainnya</li>
                  )}
                </ul>
                <Link
                  href={`/bki/${job.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-slate-50 text-slate-700 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Program PKL</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Praktik Kerja Lapangan (PKL) adalah program wajib bagi seluruh siswa SMK PGRI 3 Malang untuk mendapatkan pengalaman kerja nyata di industri. BKI memfasilitasi penempatan siswa di ratusan mitra industri terpercaya.
            </p>
            <ul className="space-y-3 mb-8">
              {["Durasi 6 bulan di industri", "Sertifikat industri resmi", "Pendampingan guru pembimbing", "Peluang rekrutmen langsung"].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/bki/pkl"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80"
            >
              Informasi lengkap PKL <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Agenda Rekrutmen</h2>
            <div className="space-y-4">
              {[
                { date: "15 Agustus 2026", title: "Campus Hiring PT Astra Honda Motor", type: "Rekrutmen" },
                { date: "22 Agustus 2026", title: "Pembekalan PKL Gelombang II", type: "Pelatihan" },
                { date: "05 September 2026", title: "Job Fair SMK Se-Malang Raya", type: "Event" }
              ].map((event, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100">
                  <div className="w-14 h-14 rounded-lg bg-slate-50 flex flex-col items-center justify-center shrink-0 border border-slate-200">
                    <span className="text-lg font-bold text-slate-900 leading-none mb-1">{event.date.split(" ")[0]}</span>
                    <span className="text-xs text-slate-500 font-medium uppercase">{event.date.split(" ")[1].substring(0,3)}</span>
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 mb-1">
                      {event.type}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-2">{event.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
