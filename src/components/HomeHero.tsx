"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lang = useLanguage();
  const t = translations[lang];
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const blurFilter = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(24px)"]);
  const textY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200dvh]">
      <div className="sticky top-0 h-dvh overflow-hidden cursor-default">
        <motion.div className="absolute inset-0 z-0" style={{ scale, filter: blurFilter }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            poster="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg"
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-900/55" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/10 to-transparent" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-8 text-white text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-neuropol text-primary font-bold uppercase tracking-[0.25em] text-md mb-6"
          >
            Success by discipline
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-neuropol text-[clamp(3.5rem,12vw,8rem)] font-bold leading-none tracking-widest drop-shadow-2xl mb-8"
          >
            SKARIGA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/program/jurusan"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary-light hover:-translate-y-0.5 transition-all"
            >
              {t.home.explore_programs}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ppdb"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl border-2 border-white/80 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-0.5"
            >
              {t.home.ppdb_info}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
