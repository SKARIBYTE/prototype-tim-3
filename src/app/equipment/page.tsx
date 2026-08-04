import type { Metadata } from "next";
import { departments, equipmentData } from "@/data/mockData";
import EquipmentExplorer from "./EquipmentExplorer";

export const metadata: Metadata = {
  title: "Peralatan",
  description: "Fasilitas dan peralatan praktik di SMK PGRI 3 Malang - mesin CNC, lab komputer, studio broadcasting, dan lainnya.",
};

export default function EquipmentPage() {
  return (
    <div className="bg-slate-50 min-h-[100dvh]">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Fasilitas dan Peralatan
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Jelajahi berbagai fasilitas dan peralatan standar industri yang tersedia untuk kegiatan praktik siswa SMK PGRI 3 Malang.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EquipmentExplorer departments={departments} equipment={equipmentData} />
        </div>
      </section>
    </div>
  );
}
