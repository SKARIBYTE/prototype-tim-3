'use client';

import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import { X, Search } from "lucide-react";
import type { Department, Equipment } from "@/types";



interface EquipmentExplorerProps {
  departments: Department[];
  equipment: Equipment[];
}

export default function EquipmentExplorer({ departments, equipment }: EquipmentExplorerProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedMajor, setSelectedMajor] = useState<string>("all");
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const activeDepartment = departments.find(d => d.id === selectedDepartment);
  
  const filteredEquipment = equipment.filter(eq => {
    const matchDept = selectedDepartment === "all" || eq.departmentId === selectedDepartment;
    const matchMajor = selectedMajor === "all" || eq.majorId === selectedMajor;
    return matchDept && matchMajor;
  });

  const handleCardClick = (eq: Equipment) => {
    setSelectedEquipment(eq);
    setViewMode("2D");
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setTimeout(() => setSelectedEquipment(null), 200);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    
    const handleCancel = (e: Event) => {
      e.preventDefault();
      closeModal();
    };
    
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, []);

  const handleMouseEnter = (modelUrl?: string) => {
    if (!modelUrl) return;
    const existingLink = document.querySelector(`link[href="${modelUrl}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = modelUrl;
      document.head.appendChild(link);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <Script 
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" 
        strategy="lazyOnload" 
        type="module" 
      />
      
      <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200" role="search" aria-label="Filter peralatan">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Bidang Keahlian</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setSelectedDepartment("all"); setSelectedMajor("all"); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === "all" ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              aria-pressed={selectedDepartment === "all"}
            >
              Semua
            </button>
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => { setSelectedDepartment(dept.id); setSelectedMajor("all"); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedDepartment === dept.id ? "bg-primary text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                aria-pressed={selectedDepartment === dept.id}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {activeDepartment && activeDepartment.majors.length > 0 && (
          <div className="flex flex-col gap-3 pt-6 border-t border-slate-100">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Program Keahlian</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedMajor("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedMajor === "all" ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                aria-pressed={selectedMajor === "all"}
              >
                Semua Program
              </button>
              {activeDepartment.majors.map(major => (
                <button
                  key={major.id}
                  onClick={() => setSelectedMajor(major.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedMajor === major.id ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  aria-pressed={selectedMajor === major.id}
                >
                  {major.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEquipment.map(eq => (
          <div 
            key={eq.id}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 cursor-pointer"
            onClick={() => handleCardClick(eq)}
            onMouseEnter={() => handleMouseEnter(eq.modelUrl)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(eq)}
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
                  Gambar 2D
                </span>
                <span className={`flex-1 text-center py-2 text-sm font-medium rounded-lg ${eq.modelUrl ? 'bg-primary/10 text-primary' : 'bg-slate-50 text-slate-400'}`}>
                  {eq.modelUrl ? 'Model 3D' : 'Tanpa 3D'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEquipment.length === 0 && (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-200">
          <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">Tidak ada peralatan ditemukan</h3>
          <p className="text-slate-500">Coba sesuaikan filter pencarian untuk melihat hasil lainnya.</p>
        </div>
      )}

      <dialog 
        ref={dialogRef}
        className="backdrop:bg-slate-900/80 p-0 rounded-2xl shadow-2xl open:animate-in open:fade-in open:zoom-in-95 max-w-4xl w-full mx-auto my-auto border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {selectedEquipment && (
          <div className="flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-100">
              <h2 id="dialog-title" className="text-xl sm:text-2xl font-bold text-slate-900 pr-8">
                {selectedEquipment.name}
              </h2>
              <button 
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Tutup dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="bg-slate-100 rounded-xl overflow-hidden aspect-video sm:aspect-[16/7] mb-6 relative border border-slate-200">
                {viewMode === "2D" ? (
                  <Image 
                    src={selectedEquipment.image}
                    alt={selectedEquipment.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover"
                  />
                ) : (
                  <model-viewer
                    src={selectedEquipment.modelUrl}
                    alt={`Model 3D dari ${selectedEquipment.name}`}
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    className="w-full h-full"
                    style={{ backgroundColor: '#f8fafc' }}
                  ></model-viewer>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Deskripsi</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedEquipment.description}
                  </p>
                </div>
                
                <div className="sm:w-64 flex flex-col gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Jumlah</span>
                    <span className="text-lg font-semibold text-slate-900">{selectedEquipment.quantity} Unit</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Kondisi</span>
                    <span className="text-lg font-semibold text-slate-900">{selectedEquipment.condition}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2 mt-2">
                    <button
                      onClick={() => setViewMode("2D")}
                      className={`py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${viewMode === "2D" ? "bg-slate-800 text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                    >
                      Gambar 2D
                    </button>
                    {selectedEquipment.modelUrl ? (
                      <button
                        onClick={() => setViewMode("3D")}
                        className={`py-3 px-4 rounded-xl text-sm font-semibold transition-colors ${viewMode === "3D" ? "bg-primary text-white shadow-sm" : "bg-primary/10 text-primary hover:bg-primary/20"}`}
                      >
                        Lihat 3D
                      </button>
                    ) : (
                      <button disabled className="py-3 px-4 rounded-xl text-sm font-semibold bg-slate-50 text-slate-400 cursor-not-allowed">
                        Model 3D tidak tersedia
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
