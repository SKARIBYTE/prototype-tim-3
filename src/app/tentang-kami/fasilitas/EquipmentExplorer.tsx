'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Department, Equipment } from "@/types";
import { Button } from "@/components/ui/button";

interface EquipmentExplorerProps {
  departments: Department[];
  equipment: Equipment[];
}

export default function EquipmentExplorer({ departments, equipment }: EquipmentExplorerProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  const filteredEquipment = equipment.filter(eq => {
    return selectedDepartment === "all" || eq.departmentId === selectedDepartment;
  });

  return (
    <div className="flex flex-col gap-8">
      <h2 className="sr-only">Daftar Fasilitas & Peralatan</h2>

      <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200" role="search" aria-label="Filter peralatan">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Bidang Keahlian</span>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedDepartment("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === "all" ? "bg-primary text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"}`}
              aria-pressed={selectedDepartment === "all"}
            >
              Semua
            </Button>
            {departments.map(dept => (
              <Button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === dept.id ? "bg-primary text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"}`}
                aria-pressed={selectedDepartment === dept.id}
              >
                {dept.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map(eq => (
          <Link 
            href={`/tentang-kami/fasilitas/${eq.id}`}
            key={eq.id}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 cursor-pointer"
            aria-label={`Lihat detail ${eq.name}`}
          >
            <div className="relative aspect-square overflow-hidden bg-slate-100">
              <Image 
                src={eq.image}
                alt={eq.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-5 flex flex-col grow">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{eq.name}</h3>
              </div>
              <p className="text-sm text-slate-700 line-clamp-2 mb-4 grow">
                {eq.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-200">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Tidak ada fasilitas ditemukan</h3>
          <p className="text-slate-500">Coba sesuaikan filter pencarian untuk melihat hasil lainnya.</p>
        </div>
      )}
    </div>
  );
}
