import type { Metadata } from "next";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description: "Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 pb-24">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Profil Sekolah
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang.
          </p>
        </div>
      </section>
      <ProfileContent />
    </main>
  );
}
