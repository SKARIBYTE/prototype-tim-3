import type { Metadata } from "next";
import { departments, equipmentData } from "@/data";
import EquipmentExplorer from "./EquipmentExplorer";
import PageHero from "@/components/PageHero";
import { getAsset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Peralatan",
  description: "Fasilitas dan peralatan praktik di SMK PGRI 3 Malang - mesin CNC, lab komputer, studio broadcasting, dan lainnya.",
};

export default function EquipmentPage() {
  return (
    <div className="bg-slate-50">
      <PageHero
        title="Fasilitas dan Peralatan"
        subtitle="Jelajahi berbagai fasilitas dan peralatan standar industri yang tersedia untuk kegiatan praktik siswa SMK PGRI 3 Malang."
        imageSrc={getAsset('images', 'otomotif-full.webp')}
      />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentExplorer departments={departments} equipment={equipmentData} />
        </div>
      </section>
    </div>
  );
}
