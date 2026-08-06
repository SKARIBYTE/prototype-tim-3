"use client";

import Image from "next/image";
import Link from "next/link";

const deptColors: Record<string, string> = {
  elektro: "bg-yellow-500",
  otomotif: "bg-red-500",
  pemesinan: "bg-blue-500",
  tik: "bg-purple-500",
};

interface JurCardProps {
  id: string;
  name: string;
  abbreviation: string;
  departmentId: string;
  description: string;
  image: string;
}

export default function JurCard({ id, name, abbreviation, departmentId, description, image }: JurCardProps) {
  const accentColor = deptColors[departmentId] ?? "bg-slate-500";

  return (
    <Link
      href={`/program/jurusan/${id}`}
      className="group relative rounded-2xl overflow-hidden cursor-pointer block hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className={`w-1 h-8 rounded-full ${accentColor}`} />
            <div>
              <h3 className="font-bold text-xl text-white drop-shadow-lg leading-tight">{name}</h3>
              <p className="text-sm text-slate-200">{abbreviation}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border border-slate-100 border-t-0 rounded-b-2xl">
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
