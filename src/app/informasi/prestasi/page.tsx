import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrestasiClient from "./PrestasiClient";

export const metadata: Metadata = {
  title: "Prestasi",
  description: "Daftar pencapaian membanggakan siswa dan sekolah.",
};

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      <PageHero
        title="Prestasi"
        subtitle="Daftar pencapaian membanggakan siswa dan sekolah."
        imageSrc="https://picsum.photos/seed/skariga-prestasi/1920/1080"
      />
      <PrestasiClient />
    </main>
  );
}
