"use client";

import { useState } from "react";
import Image from "next/image";

export interface AlumniData {
  id: string;
  name: string;
  year: string;
  major: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  tag: string;
  isLegacy?: boolean;
}

export default function AlumniFlipCard({ alumni }: { alumni: AlumniData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-[400px] [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* === TAMPILAN DEPAN (FRONT) === */}
        <div
          className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden border [backface-visibility:hidden] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
            alumni.isLegacy
              ? "bg-[#f5f0e6] border-[#d6c7b2] text-[#3d2e1e]"
              : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          <div className="relative w-full h-3/5 overflow-hidden">
            <Image
              src={alumni.image}
              alt={alumni.name}
              fill
              className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                alumni.isLegacy ? "sepia-[0.35] contrast-[0.95]" : ""
              }`}
            />
            <div
              className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold text-white"
              style={{ backgroundColor: alumni.isLegacy ? "#3d2e1e" : "var(--color-secondary)" }}
            >
              {alumni.tag}
            </div>
            
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-1 rounded-lg">
              [ Klik untuk Balik ]
            </div>
          </div>

          <div className="p-6 h-2/5 flex flex-col justify-between">
            <div>
              <span
                className="text-xs font-mono font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Lulusan {alumni.year}
              </span>
              <h3 className="text-xl font-bold leading-snug mt-0.5">
                {alumni.name}
              </h3>
            </div>
            <p className="text-xs font-medium opacity-80">
              {alumni.role} — <span className="font-semibold">{alumni.company}</span>
            </p>
          </div>
        </div>

        {/* === TAMPILAN BELAKANG (BACK) === */}
        <div
          className={`absolute inset-0 w-full h-full rounded-3xl p-8 border [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between ${
            alumni.isLegacy
              ? "bg-[#3d2e1e] border-[#291e13] text-[#f5f0e6]"
              : "text-white border-slate-800"
          }`}
          style={{
            backgroundColor: alumni.isLegacy ? "#3d2e1e" : "var(--color-secondary)"
          }}
        >
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <span
                className="text-xs font-mono font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {alumni.major}
              </span>
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
                [ TESTIMONIAL ]
              </span>
            </div>

            <p className="text-sm sm:text-base font-serif italic leading-relaxed opacity-90">
              &ldquo;{alumni.quote}&rdquo;
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold">{alumni.name}</p>
              <p className="text-xs opacity-60">{alumni.company}</p>
            </div>
            <span className="text-[10px] font-mono opacity-40 underline">
              Kembali &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}