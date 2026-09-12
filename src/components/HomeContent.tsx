"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Award, BookOpen, Users, Briefcase, BadgeCheck, BookOpenCheck, Handshake, UserCheck } from "lucide-react";
import { departments, industryPartners } from "@/data";
import AccordionGallery from "@/components/AccordionGallery";
import { useLanguage } from "@/components/LanguageSwitcher";
import { translations } from "@/i18n";

export default function HomeContent() {
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="relative isolate flex items-center justify-center">
                <div className="absolute -top-6 -left-4 w-48 h-64 sm:w-56 sm:h-72 bg-secondary rounded-[0%_100%_0%_100%/0%_100%_0%_100%] rotate-45 z-0" />
                <div className="absolute inset-x-2 sm:inset-x-4 top-8 bottom-0 bg-primary rounded-[100%_0%_100%_0%/100%_0%_100%_0%] z-0" />
                <div className="relative aspect-4/5 w-full z-10">
                  <Image
                    src="/assets/images/kepseknew.webp"
                    alt="Kepala Sekolah SMK PGRI 3 Malang"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* 5. Badge Trophy */}
                {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">{t.home.years_exp}</p>
                      <p className="text-sm font-medium text-slate-500">{t.home.years_exp_desc}</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="lg:mt-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                  {t.home.principal_greeting}
                </h2>
                <h3 className="w-full lg:w-96 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {t.home.welcome}
                </h3>
                <div className="prose prose-lg text-slate-600 prose-p:leading-relaxed">
                  <p>{t.home.principal_desc1}</p>
                  <p>{t.home.principal_desc2}</p>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-xl">Dr. M. Lukman Hakim, S.T., M.M.</p>
                  <p className="text-slate-500 font-medium">{t.home.principal_title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              {t.home.why_title}
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {t.home.why_subtitle}
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.home.why_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BadgeCheck, title: t.home.card_akreditasi_title, desc: t.home.card_akreditasi_desc },
              { icon: BookOpenCheck, title: t.home.card_kurikulum_title, desc: t.home.card_kurikulum_desc },
              { icon: Handshake, title: t.home.card_bki_title, desc: t.home.card_bki_desc },
              { icon: UserCheck, title: t.home.card_ahli_title, desc: t.home.card_ahli_desc },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 ease-out group h-full flex flex-col cursor-default"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 ease-out">
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Keahlian / Jurusan */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
                {t.nav.program}
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                {t.home.departments_title}
              </h3>
              <p className="mt-4 text-lg text-slate-600">
                {t.home.departments_desc}
              </p>
            </div>
            <Link
              href="/program/jurusan"
              className="group inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
            >
              {t.home.view_all_majors} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <AccordionGallery departments={departments} />
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-slate-900 overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              {t.home.partners_subtitle}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.home.partners_title}
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t.home.partners_desc}
            </p>
          </div>
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

          <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center">
            {industryPartners.map((partner) => (
              <div
                key={partner.id}
                className="mx-8 lg:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 w-32 h-16 lg:w-48 lg:h-20"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee whitespace-nowrap items-center">
            {industryPartners.map((partner) => (
              <div
                key={partner.id + "-duplicate"}
                className="mx-8 lg:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 w-32 h-16 lg:w-48 lg:h-20"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
