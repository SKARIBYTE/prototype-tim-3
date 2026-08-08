"use client";

import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedAchievement() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-slate-200" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 relative z-10 group">
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                alt="Risca Revan Suasmara dan Edsel Parama Mustapa"
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            <div className="absolute bottom-6 right-4 sm:-bottom-6 sm:-right-6 lg:-right-12 bg-blue-600 text-white p-5 sm:p-6 rounded-2xl shadow-xl z-20 max-w-50 sm:max-w-60">
              <div className="font-bold text-2xl sm:text-3xl tracking-tight mb-1">
                2025
              </div>
              <div className="text-blue-100 text-xs sm:text-sm font-medium leading-snug">
                ASEAN Worldskills Manila, Filipina
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 lg:col-start-7 pt-12 sm:pt-0 relative z-30 -mt-20 sm:mt-0 -mx-4 sm:mx-0 px-6 sm:px-0 bg-white sm:bg-transparent rounded-t-[2.5rem] sm:rounded-none shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] sm:shadow-none"
          >
            <Quote className="absolute top-4 sm:-top-8 right-6 sm:left-auto w-16 h-16 sm:w-24 sm:h-24 text-slate-100 -z-10 rotate-180" />

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-blue-600" />
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">
                Sorotan Utama
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-8">
              "Bukan sekadar menang, tapi{" "}
              <span className="text-blue-600">membuktikan</span> bahwa SMK bisa
              mendunia."
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-10">
              <p>
                Risca Revan Suasmara dan Edsel Parama Mustapa mengukir sejarah
                dengan membawa pulang
                <strong> Medali Emas & Perunggu</strong> di ajang ASEAN
                Worldskills 2025 untuk bidang
                <em> IT Software Solution for Business</em>.
              </p>
              <p className="text-base text-slate-500">
                Pencapaian ini adalah hasil dari ribuan jam latihan di
                laboratorium sekolah, dedikasi tanpa henti, dan dukungan penuh
                dari para guru pembimbing yang percaya bahwa potensi siswa-siswi
                SMK PGRI 3 Malang tidak memiliki batas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-900 text-white font-semibold hover:bg-blue-600 active:scale-95 transition-all duration-300 group">
                Baca Kisah Penuh
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
