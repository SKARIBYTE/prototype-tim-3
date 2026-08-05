import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProfileContent from "./ProfileContent";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description: "Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main className="min-h-[100dvh] bg-slate-50 pb-24">
      <Hero
        title="Profil Sekolah"
        description="Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang."
      />
      <ProfileContent />
    </main>
  );
}
