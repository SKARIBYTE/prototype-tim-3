'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { Department, Equipment } from "@/types";

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
      <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200" role="search" aria-label="Filter peralatan">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Bidang Keahlian</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDepartment("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === "all" ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              aria-pressed={selectedDepartment === "all"}
            >
              Semua
            </button>
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === dept.id ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                aria-pressed={selectedDepartment === dept.id}
              >
                {dept.name}
              </button>
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
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <Image 
                src={eq.image}
                alt={eq.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${eq.condition === 'Baik' ? 'bg-green-500/90 text-white' : 'bg-amber-500/90 text-white'}`}>
                  {eq.condition}
                </span>
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2 gap-4">
                <h3 className="text-lg font-bold text-slate-900 leading-tight">{eq.name}</h3>
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap">
                  {eq.quantity} Unit
                </span>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2 mb-4 flex-grow">
                {eq.description}
              </p>
              
              <div className="flex gap-2 mt-auto pt-4 border-t border-slate-100">
                <span className="flex-1 text-center py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg">
                  Detail Fasilitas
                </span>
                <span className={`flex-1 text-center py-2 text-sm font-medium rounded-lg ${eq.modelUrl ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'}`}>
                  {eq.modelUrl ? 'Model 3D Tersedia' : 'Tanpa 3D'}
                </span>
              </div>
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
