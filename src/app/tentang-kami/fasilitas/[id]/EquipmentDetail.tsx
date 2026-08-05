'use client';

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { Equipment, Department } from "@/types";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface EquipmentDetailProps {
  equipment: Equipment;
  departments: Department[];
  allEquipment: Equipment[];
}

export default function EquipmentDetail({ equipment, departments, allEquipment }: EquipmentDetailProps) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");

  const currentIndex = allEquipment.findIndex(eq => eq.id === equipment.id);
  const prevEquipment = currentIndex > 0 ? allEquipment[currentIndex - 1] : null;
  const nextEquipment = currentIndex < allEquipment.length - 1 ? allEquipment[currentIndex + 1] : null;
  const prevId = prevEquipment?.id || null;
  const nextId = nextEquipment?.id || null;

  const prefetchModel = useCallback((url?: string) => {
    if (!url) return;
    const linkId = `prefetch-${encodeURIComponent(url)}`;
    if (document.getElementById(linkId)) return;
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "prefetch";
    link.href = url;
    link.as = "fetch";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }, []);

  // Preload models when 3D mode is activated
  useEffect(() => {
    if (viewMode === "3D") {
      //if (prevEquipment?.modelUrl) prefetchModel(prevEquipment.modelUrl);
      if (nextEquipment?.modelUrl) prefetchModel(nextEquipment.modelUrl);
    }
  }, [viewMode, prevEquipment, nextEquipment, prefetchModel]);

  const department = departments.find(d => d.id === equipment.departmentId);

  const tags = [department?.name].filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-12 flex flex-col mt-8">
      <Script
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
        strategy="lazyOnload"
        type="module"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => {router.replace("/tentang-kami/fasilitas")}}
            className="flex items-center gap-2 text-slate-600 hover:bg-primary hover:text-white transition-colors font-medium bg-white px-4 py-2 rounded-sm shadow-sm border border-slate-200 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>

          <Tabs
            value={viewMode}
            onValueChange={(val) => setViewMode(val as "2D" | "3D")}
            className="w-auto"
          >
            <TabsList className="bg-white border border-slate-200 shadow-sm rounded-sm p-1">
              <TabsTrigger
                value="2D"
                className={cn(
                  "px-4 py-2.5 text-sm font-medium transition-all disabled:opacity-50 hover:text-primary cursor-pointer",
                  viewMode === "2D" ? "bg-primary! text-white! rounded-sm" : "",
                )}
              >
                2D
              </TabsTrigger>
              <TabsTrigger
                value="3D"
                disabled={!equipment.modelUrl}
                className={cn(
                  "px-4 py-1.5 text-sm font-medium transition-all disabled:opacity-50 hover:text-primary cursor-pointer",
                  viewMode === "3D" ? "bg-primary! text-white! rounded-sm" : "",
                )}
              >
                3D
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-10">
          {prevId ? (
            <Link
              href={`/tentang-kami/fasilitas/${prevId}`}
              onMouseEnter={() => prefetchModel(prevEquipment?.modelUrl)}
              className="p-3 bg-white bg-opacity-80 backdrop-blur rounded-full shadow-md text-slate-700 hover:text-primary hover:scale-110 transition-all border border-slate-100"
            >
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
            <Link
              href={`/tentang-kami/fasilitas/${nextId}`}
              onMouseEnter={() => prefetchModel(nextEquipment?.modelUrl)}
              className="p-3 bg-white bg-opacity-80 backdrop-blur rounded-full shadow-md text-slate-700 hover:text-primary hover:scale-110 transition-all border border-slate-100"
            >
              <ChevronRight className="w-6 h-6" />
            </Link>
          ) : (
            <div className="p-3 bg-slate-50 rounded-full text-slate-300 border border-slate-100 cursor-not-allowed">
              <ChevronRight className="w-6 h-6" />
            </div>
          )}
        </div>

        <div className="w-full max-h-126 aspect-video relative rounded-2xl overflow-hidden mb-8 flex items-center justify-center mx-auto">
          {viewMode === "2D" ? (
            <Image
              src={equipment.image}
              alt={equipment.name}
              fill
              priority
              className="object-contain p-4"
            />
          ) : (
            equipment.modelUrl && (
              <model-viewer
                src={equipment.modelUrl}
                poster={equipment.image}
                loading="eager"
                alt={`3D ${equipment.name}`}
                auto-rotate
                camera-controls
                shadow-intensity="1"
                className="w-full h-full bg-transparent"
              ></model-viewer>
            )
          )}
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start">
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
        </div>
      </div>
    </div>
  );
}