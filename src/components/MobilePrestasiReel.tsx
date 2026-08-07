"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Item {
  id: string;
  img: string;
  url: string;
  height: number;
  title?: string;
  excerpt?: string;
  category?: string;
  date?: string;
}

interface MobilePrestasiReelProps {
  items: Item[];
}

export default function MobilePrestasiReel({ items }: MobilePrestasiReelProps) {
  return (
    <div className="w-full h-[80vh] overflow-y-auto snap-y snap-mandatory hide-scrollbar rounded-3xl shadow-2xl relative bg-slate-900 border-4 border-white">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className="w-full h-full snap-start relative flex flex-col justify-end overflow-hidden group cursor-pointer"
          onClick={() => window.open(item.url, '_blank', 'noopener')}
        >
          <Image
            src={item.img}
            alt={item.title || ''}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
          
                    <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, margin: "-10%" }}
            className="relative z-10 p-6 flex flex-col justify-end h-full"
          >
            <div className="flex items-center gap-2 mb-3">
              {item.category && (
                <span className="px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-lg">
                  {item.category}
                </span>
              )}
              {item.date && (
                <time className="text-slate-300 text-xs font-medium tracking-wide bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {item.date}
                </time>
              )}
            </div>
            
            {item.title && (
              <h3 className="text-2xl font-black text-white tracking-tight mb-3 leading-tight drop-shadow-lg">
                {item.title}
              </h3>
            )}
            
            {item.excerpt && (
              <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.excerpt}
              </p>
            )}
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 active:scale-95 transition-transform origin-left">
              <span className="text-white font-bold text-sm flex items-center gap-2">
                Lihat Detail
              </span>
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
          
                    {index === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50 flex flex-col items-center animate-bounce">
               <span className="text-white text-xs font-bold tracking-widest uppercase mb-2 bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">Swipe Up</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
