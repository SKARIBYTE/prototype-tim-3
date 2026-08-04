'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import type { Equipment, Department } from "@/types";

interface EquipmentDetailProps {
  equipment: Equipment;
  departments: Department[];
  allEquipment: Equipment[];
}

export default function EquipmentDetail({ equipment, departments, allEquipment }: EquipmentDetailProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");

  const currentIndex = allEquipment.findIndex(eq => eq.id === equipment.id);
  const prevId = currentIndex > 0 ? allEquipment[currentIndex - 1].id : null;
  const nextId = currentIndex < allEquipment.length - 1 ? allEquipment[currentIndex + 1].id : null;

  const department = departments.find(d => d.id === equipment.departmentId);
  const major = department?.majors.find(m => m.id === equipment.majorId);

  const tags = [department?.name, major?.name].filter(Boolean);

  const handleToggle = (checked: boolean) => {
    setViewMode(checked ? "3D" : "2D");
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex flex-col">
      <Script 
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" 
        strategy="lazyOnload" 
        type="module" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col">
        {/* Top bar: Back & Toggle */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>

          <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
            <span className={`text-sm font-medium ${viewMode === "2D" ? "text-primary" : "text-slate-500"}`}>2D</span>
            <Switch 
              checked={viewMode === "3D"} 
              onCheckedChange={handleToggle} 
              disabled={!equipment.modelUrl}
            />
            <span className={`text-sm font-medium ${viewMode === "3D" ? "text-primary" : "text-slate-500"}`}>3D</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow relative flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12 overflow-hidden min-h-[60vh]">
          
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-10">
            {prevId ? (
              <Link href={`/tentang-kami/fasilitas/${prevId}`} className="p-3 bg-white/80 backdrop-blur rounded-full shadow-md text-slate-700 hover:text-primary hover:scale-110 transition-all border border-slate-100">
                <ChevronLeft className="w-6 h-6" />
              </Link>
            ) : (
              <div className="p-3 bg-slate-50 rounded-full text-slate-300 border border-slate-100 cursor-not-allowed">
                <ChevronLeft className="w-6 h-6" />
              </div>
            )}
          </div>
          
          <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-10">
            {nextId ? (
              <Link href={`/tentang-kami/fasilitas/${nextId}`} className="p-3 bg-white/80 backdrop-blur rounded-full shadow-md text-slate-700 hover:text-primary hover:scale-110 transition-all border border-slate-100">
                <ChevronRight className="w-6 h-6" />
              </Link>
            ) : (
              <div className="p-3 bg-slate-50 rounded-full text-slate-300 border border-slate-100 cursor-not-allowed">
                <ChevronRight className="w-6 h-6" />
              </div>
            )}
          </div>

          {/* Model/Image Viewer */}
          <div className="w-full max-w-4xl aspect-[16/9] sm:aspect-video relative rounded-2xl overflow-hidden mb-8 shadow-inner border border-slate-100 bg-slate-50 flex items-center justify-center">
            {viewMode === "2D" ? (
              <Image 
                src={equipment.image}
                alt={equipment.name}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain p-4"
              />
            ) : (
              equipment.modelUrl && (
                <model-viewer
                  src={equipment.modelUrl}
                  alt={`Model 3D dari ${equipment.name}`}
                  auto-rotate
                  camera-controls
                  shadow-intensity="1"
                  className="w-full h-full"
                  style={{ backgroundColor: 'transparent' }}
                ></model-viewer>
              )
            )}
            
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${equipment.condition === 'Baik' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                {equipment.condition}
              </span>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{equipment.name}</h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                {equipment.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 min-w-[200px] shrink-0">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-center shadow-sm">
                <span className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Tersedia</span>
                <span className="text-3xl font-bold text-primary">{equipment.quantity} <span className="text-lg text-slate-600">Unit</span></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
