"use client";

import { ArrowRight, QrCode } from "lucide-react";
import { motion } from "framer-motion";

export default function TicketCTA() {
  return (
    <section className="relative w-full bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex justify-center items-center">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Siap Mencetak Sejarahmu Sendiri?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Prestasi besar dimulai dari keputusan yang tepat hari ini. Amankan posisimu di barisan para juara.
          </p>
        </div>

                <style>{`
          @media (min-width: 768px) {
            .ticket-left {
              mask-image: radial-gradient(circle at right top, transparent 16px, black 16.5px), radial-gradient(circle at right bottom, transparent 16px, black 16.5px);
              mask-size: 100% 51%, 100% 51%;
              mask-position: left top, left bottom;
              mask-repeat: no-repeat;
              -webkit-mask-image: radial-gradient(circle at right top, transparent 16px, black 16.5px), radial-gradient(circle at right bottom, transparent 16px, black 16.5px);
              -webkit-mask-size: 100% 51%, 100% 51%;
              -webkit-mask-position: left top, left bottom;
              -webkit-mask-repeat: no-repeat;
            }
            .ticket-right {
              mask-image: radial-gradient(circle at left top, transparent 16px, black 16.5px), radial-gradient(circle at left bottom, transparent 16px, black 16.5px);
              mask-size: 100% 51%, 100% 51%;
              mask-position: right top, right bottom;
              mask-repeat: no-repeat;
              -webkit-mask-image: radial-gradient(circle at left top, transparent 16px, black 16.5px), radial-gradient(circle at left bottom, transparent 16px, black 16.5px);
              -webkit-mask-size: 100% 51%, 100% 51%;
              -webkit-mask-position: right top, right bottom;
              -webkit-mask-repeat: no-repeat;
            }
          }
        `}</style>

                <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full flex flex-col md:flex-row drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] md:drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out group px-2 sm:px-0"
        >
          
                    <div className="ticket-left bg-slate-900/95 backdrop-blur-xl md:bg-slate-900 text-white flex-1 p-8 md:p-10 relative flex flex-col justify-between overflow-hidden rounded-t-[2rem] md:rounded-t-none md:rounded-l-2xl border-b border-white/10 md:border-b-0 md:border-r-[3px] md:border-dashed md:border-white/30 ring-1 ring-white/10 md:ring-0">
                        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col">
                  <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase mb-1">Official Boarding Pass</span>
                  <span className="text-2xl font-black tracking-tighter flex items-center gap-2">
                    SMK PGRI 3 MALANG 
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  </span>
                </div>
                <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded shadow-lg uppercase tracking-wider transform rotate-2">
                  First Class
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 mb-12">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Passenger</span>
                  <span className="font-mono text-sm uppercase font-semibold text-slate-100">Calon Juara</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Destination</span>
                  <span className="font-mono text-sm uppercase font-semibold text-slate-100">Masa Depan Cerah</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Academic Year</span>
                  <span className="font-mono text-lg text-blue-400 font-bold">2026/2027</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between border-t border-slate-700/50 pt-6 mt-2">
              <p className="text-[10px] text-slate-400 leading-relaxed max-w-[280px] uppercase tracking-wide">
                Valid for access to modern laboratories, expert mentorship, & national competitions. Non-transferable.
              </p>
                            <div className="h-8 w-32 opacity-50" style={{ backgroundImage: 'repeating-linear-gradient(to right, #fff, #fff 2px, transparent 2px, transparent 4px, #fff 4px, #fff 5px, transparent 5px, transparent 8px)' }}></div>
            </div>
          </div>

                    <div className="ticket-right bg-blue-600/95 backdrop-blur-xl md:bg-blue-600 w-full md:w-72 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden rounded-b-[2rem] md:rounded-b-none md:rounded-r-2xl ring-1 ring-white/10 md:ring-0">
                          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="relative z-10 flex justify-between items-center md:flex-col md:items-end gap-8 h-full">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20 shadow-inner">
                <QrCode className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
              
              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-blue-700 font-black text-sm uppercase tracking-wider rounded-lg shadow-[0_4px_0_0_#93c5fd] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#93c5fd] active:scale-95 active:translate-y-[4px] active:shadow-none transition-all">
                Daftar PPDB
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
