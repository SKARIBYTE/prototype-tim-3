"use client";

import { useState, useEffect } from "react";

export function useLanguage() {
  const [lang, setLang] = useState<"id" | "en">("id");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "id" | "en";
    if (saved) setLang(saved);

    const handler = () => {
      const current = (localStorage.getItem("lang") as "id" | "en") || "id";
      setLang(current);
    };

    window.addEventListener("lang-change", handler);
    return () => window.removeEventListener("lang-change", handler);
  }, []);

  return lang;
}

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (localStorage.getItem("lang") as "id" | "en") || "id";
    setLang(saved);
  }, []);

  function switchLang(newLang: "id" | "en") {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    window.dispatchEvent(new Event("lang-change"));
  }

  const activeLang = mounted ? lang : "id";

  return (
    <div className="flex items-center bg-white border border-slate-200 shadow-sm rounded-sm p-1">
      {(["id", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLang(l)}
          className={
            activeLang === l
              ? "bg-primary text-white rounded-sm px-3 py-1.5 text-xs font-bold transition-all"
              : "px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-primary transition-all cursor-pointer"
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
