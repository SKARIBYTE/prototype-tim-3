import type { Metadata } from "next";
import { TeacherCarousel } from "@/components/TeacherCarousel";
import PageHero from "@/components/PageHero";
import ScrollFadeUp from "@/components/ScrollFadeUp";
import { TEAMS } from "@/data";

export default function ProfilGuruPage() {
  return (
    <main className="bg-slate-50 pb-32">
      <PageHero
        title="Profil Guru"
        subtitle="Daftar tenaga pendidik profesional dan staf akademik SMK PGRI 3 Malang."
        imageSrc="https://picsum.photos/seed/skariga-profil-guru/1920/1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {TEAMS.map((team, idx) => (
          <ScrollFadeUp key={idx}>
            <section id={`kelompok-${idx + 1}`}>
              <div className="mb-12 flex flex-col items-center text-center gap-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {team.group}
                </h2>
                <p className="text-slate-500 text-sm">
                  {team.members.length} tenaga pendidik
                </p>
                <div
                  className={`h-0.5 w-16 rounded-full bg-linear-to-r ${team.accent}`}
                />
              </div>

              <TeacherCarousel
                members={team.members}
                dotColor={team.dotColor}
              />
            </section>
          </ScrollFadeUp>
        ))}
      </div>
    </main>
  );
}
