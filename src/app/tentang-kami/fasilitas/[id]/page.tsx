import { notFound } from "next/navigation";
import { equipmentData, departments } from "@/data";
import EquipmentDetail from "./EquipmentDetail";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const equipment = equipmentData.find((eq) => eq.id === id);
  
  if (!equipment) {
    return {
      title: "Peralatan Tidak Ditemukan",
    };
  }

  return {
    title: `${equipment.name} | Fasilitas SMK PGRI 3 Malang`,
    description: equipment.description,
  };
}

export function generateStaticParams() {
  return equipmentData.map((equipment) => ({
    id: equipment.id,
  }));
}

export default async function EquipmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const equipment = equipmentData.find((eq) => eq.id === id);

  if (!equipment) {
    notFound();
  }

  return (
    <main>
      <EquipmentDetail 
        equipment={equipment} 
        departments={departments}
        allEquipment={equipmentData}
      />
    </main>
  );
}
