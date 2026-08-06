"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Major, Department } from "@/types";
import { Suspense } from "react";
import { useLanguage } from "@/components/LanguageSwitcher";
import { translations } from "@/i18n";

interface Props {
  major: Major;
  dept: Department;
}

function TabsContent({ major }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = searchParams.get("tab") || "profil";
  const lang = useLanguage();
  const t = translations[lang];

  const tabItems = [
    { id: "profil", label: t.jurusan.tab_profil },
    { id: "kurikulum", label: t.jurusan.tab_kurikulum },
    { id: "karir", label: t.jurusan.tab_karir },
    { id: "kebutuhan", label: t.jurusan.tab_kebutuhan },
    { id: "kegiatan", label: t.jurusan.tab_kegiatan },
  ];

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Tabs Header */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide border-b border-slate-200">
        {tabItems.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative px-4 py-3 text-sm font-semibold rounded-t-xl whitespace-nowrap transition-colors cursor-pointer ${
              currentTab === tab.id
                ? "text-primary"
                : "text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            {tab.label}
            {currentTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentTab === "profil" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.jurusan.profil_title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {major.description}
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{t.jurusan.competencies_title}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {major.competencies.map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-slate-700">{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {currentTab === "kurikulum" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.jurusan.curriculum_title}</h3>
                <p className="text-slate-600">
                  {t.jurusan.curriculum_desc}
                </p>
                <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <p className="text-slate-500">Detail kurikulum {major.name}.</p>
                </div>
              </div>
            )}

            {currentTab === "karir" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.jurusan.career_title}</h3>
                <div className="flex flex-wrap gap-3">
                  {major.careerProspects.map((career, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-primary/30 hover:shadow-md transition-all font-semibold text-slate-700 flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {career}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentTab === "kebutuhan" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.jurusan.industry_title}</h3>
                <p className="text-slate-600">
                  {major.name}
                </p>
                <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <p className="text-slate-500">Data kebutuhan industri.</p>
                </div>
              </div>
            )}

            {currentTab === "kegiatan" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">{t.jurusan.activities_title}</h3>
                <p className="text-slate-600">
                  {major.abbreviation}
                </p>
                <div className="p-12 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                  <p className="text-slate-500">Dokumentasi kegiatan.</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function JurusanDetailTabs(props: Props) {
  return (
    <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400">Loading tabs...</div>}>
      <TabsContent {...props} />
    </Suspense>
  );
}
