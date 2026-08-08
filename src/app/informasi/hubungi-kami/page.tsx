import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForms from "@/components/ContactForms";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Informasi kontak dan lokasi SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main>
      <div className="bg-white">
        <style>{`
          footer { display: none !important; }
          body { overflow: hidden !important; }
        `}</style>
        <PageHero
          title="Hubungi Kami"
          subtitle="Punya pertanyaan atau ingin menjalin kemitraan dengan kami? Silakan hubungi SMK PGRI 3 Malang melalui form di samping."
          imageSrc="https://picsum.photos/seed/skariga-hubungi-kami/1920/1080"
        >
          <ContactForms />
        </PageHero>
      </div>
    </main>
  );
}
