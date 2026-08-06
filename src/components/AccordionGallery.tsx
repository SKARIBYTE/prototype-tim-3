"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Department } from "@/types";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";
import { motion } from "framer-motion";

interface AccordionGalleryProps {
  departments: Department[];
}

export default function AccordionGallery({ departments }: AccordionGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <div
      onMouseLeave={() => setHoveredIndex(null)}
      className="flex flex-col md:flex-row gap-4 h-[550px] md:h-[480px] w-full"
    >
      {departments.map((dept, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <motion.div
            key={dept.id}
            onMouseEnter={() => setHoveredIndex(index)}
            className={`relative rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isHovered
                ? "flex-[2.8] shadow-2xl"
                : "flex-1 shadow-md opacity-90 hover:opacity-100"
            }`}
          >
            <Link
              href={`/program/jurusan#${dept.id}`}
              className="block relative w-full h-full cursor-pointer"
            >
              <Image
                src={dept.image}
                alt={dept.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 ${
                  isHovered ? "scale-105" : "scale-100"
                }`}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isHovered
                    ? "bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"
                    : "bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/20 opacity-75"
                }`}
              />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                <div className="space-y-2">
                  <h4
                    className={`font-bold text-white leading-tight transition-all duration-300 ${
                      isHovered ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {dept.name}
                  </h4>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isHovered ? "max-h-32 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2 mb-3">
                      {dept.description}
                    </p>

                    <div className="pt-2 border-t border-white/20">
                      <span className="text-xs md:text-sm font-semibold text-white/90">
                        {dept.majors.length} {t.home.competencies_count}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
