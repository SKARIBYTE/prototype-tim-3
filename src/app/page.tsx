import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Beranda | SMK PGRI 3 Malang",
  description: "SMK Pusat Keunggulan di Malang - Success by Discipline. Sekolah untuk Kerja, Wirausaha, Kuliah Apalagi.",
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero />
      <HomeContent />
    </main>
  );
}
