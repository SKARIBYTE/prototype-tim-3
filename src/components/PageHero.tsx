"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function PageHero({ title, subtitle, imageSrc, imageAlt = "" }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-dvh flex items-end overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-slate-900/10" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            SMK PGRI 3 Malang
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
