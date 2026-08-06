import type { Metadata } from "next";
import ProfileContent from "./ProfileContent";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description: "Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main className="bg-slate-50">
      <PageHero
        title="Profil Sekolah"
        subtitle="Informasi lengkap mengenai visi, misi, dan sejarah SMK PGRI 3 Malang."
        imageSrc="/assets/images/depansekul.png"
      />
      <ProfileContent />
    </main>
  );
}
