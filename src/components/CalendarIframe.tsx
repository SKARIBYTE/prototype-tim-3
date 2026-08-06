"use client";

import { useState, useRef, useEffect } from "react";

interface CalendarIframeProps {
  src: string;
}

export default function CalendarIframe({ src }: CalendarIframeProps) {
  const [interactive, setInteractive] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleOverlayWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(lenis.scroll + e.deltaY, { immediate: false });
    } else {
      window.scrollBy({ top: e.deltaY, behavior: "smooth" });
    }
  };

  const handleOverlayClick = () => {
    setInteractive(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setInteractive(false);
    }, 4000);
  };

  return (
    <div
      onMouseLeave={() => setInteractive(false)}
      className="relative w-full h-200 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white group"
    >
      <iframe
        src={src}
        className={`w-full h-full border-0 transition-opacity ${
          interactive ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-95"
        }`}
        title="Kalender Aktivitas"
      />

      {!interactive && (
        <div
          onWheel={handleOverlayWheel}
          onClick={handleOverlayClick}
          className="absolute inset-0 z-10 cursor-pointer flex items-end justify-center pb-4 bg-transparent"
        >
          <span className="px-4 py-2 rounded-full bg-slate-900/75 text-white text-xs font-semibold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Klik untuk interaksi kalender • Scroll untuk navigasi
          </span>
        </div>
      )}
    </div>
  );
}
