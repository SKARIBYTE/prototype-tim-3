"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PersonStanding, X } from "lucide-react";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";

type FontSize = "sm" | "md" | "lg";

const FONT_CLASSES: Record<FontSize, string> = {
  sm: "a11y-font-sm",
  md: "a11y-font-md",
  lg: "a11y-font-lg",
};

function applyFont(size: FontSize) {
  const html = document.documentElement;
  html.classList.remove("a11y-font-sm", "a11y-font-md", "a11y-font-lg");
  html.classList.add(FONT_CLASSES[size]);
}

function toggle(cls: string, on: boolean) {
  document.documentElement.classList.toggle(cls, on);
}

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState<FontSize>("md");
  const [contrast, setContrast] = useState(false);
  const [dyslexia, setDyslexia] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [lineSpacing, setLineSpacing] = useState(false);
  const lang = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const f = (localStorage.getItem("a11y-font-size") as FontSize) || "md";
    const c = localStorage.getItem("a11y-contrast") === "on";
    const d = localStorage.getItem("a11y-dyslexia") === "on";
    const r = localStorage.getItem("a11y-reduce-motion") === "on";
    const g = localStorage.getItem("a11y-grayscale") === "on";
    const l = localStorage.getItem("a11y-line-spacing") === "on";
    setFont(f);
    setContrast(c);
    setDyslexia(d);
    setReduceMotion(r);
    setGrayscale(g);
    setLineSpacing(l);
    applyFont(f);
    toggle("a11y-high-contrast", c);
    toggle("a11y-dyslexia", d);
    toggle("a11y-reduce-motion", r);
    toggle("a11y-grayscale", g);
    toggle("a11y-line-spacing", l);
  }, []);

  function changeFont(size: FontSize) {
    setFont(size);
    localStorage.setItem("a11y-font-size", size);
    applyFont(size);
  }

  function changeToggle(
    key: string,
    cls: string,
    val: boolean,
    setter: (v: boolean) => void
  ) {
    setter(val);
    localStorage.setItem(key, val ? "on" : "off");
    toggle(cls, val);
  }

  function reset() {
    ["a11y-font-size", "a11y-contrast", "a11y-dyslexia", "a11y-reduce-motion", "a11y-grayscale", "a11y-line-spacing"].forEach((k) =>
      localStorage.removeItem(k)
    );
    document.documentElement.classList.remove(
      "a11y-font-sm", "a11y-font-md", "a11y-font-lg",
      "a11y-high-contrast", "a11y-dyslexia", "a11y-reduce-motion",
      "a11y-grayscale", "a11y-line-spacing"
    );
    setFont("md");
    setContrast(false);
    setDyslexia(false);
    setReduceMotion(false);
    setGrayscale(false);
    setLineSpacing(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors cursor-pointer"
        aria-label={t.accessibility.title}
      >
        <PersonStanding size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="a11y-panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50 w-72 bg-white shadow-2xl rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-slate-800 text-sm">{t.accessibility.title}</span>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600">{t.accessibility.font_size}</span>
                <div className="flex gap-1">
                  {(["sm", "md", "lg"] as FontSize[]).map((s, i) => (
                    <button
                      key={s}
                      onClick={() => changeFont(s)}
                      className={`w-8 h-8 rounded text-xs font-bold transition-colors cursor-pointer ${
                        font === s
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {i === 0 ? "A-" : i === 1 ? "A" : "A+"}
                    </button>
                  ))}
                </div>
              </div>

              {[
                { label: t.accessibility.high_contrast, val: contrast, setter: setContrast, key: "a11y-contrast", cls: "a11y-high-contrast" },
                { label: t.accessibility.dyslexia_font, val: dyslexia, setter: setDyslexia, key: "a11y-dyslexia", cls: "a11y-dyslexia" },
                { label: t.accessibility.reduce_motion, val: reduceMotion, setter: setReduceMotion, key: "a11y-reduce-motion", cls: "a11y-reduce-motion" },
                { label: t.accessibility.grayscale, val: grayscale, setter: setGrayscale, key: "a11y-grayscale", cls: "a11y-grayscale" },
                { label: t.accessibility.line_spacing, val: lineSpacing, setter: setLineSpacing, key: "a11y-line-spacing", cls: "a11y-line-spacing" },
              ].map(({ label, val, setter, key, cls }) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{label}</span>
                  <button
                    role="switch"
                    aria-checked={val}
                    onClick={() => changeToggle(key, cls, !val, setter)}
                    className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer ${
                      val ? "bg-primary" : "bg-slate-200"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                        val ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={reset}
              className="mt-5 w-full py-2 rounded-lg border border-slate-200 text-xs text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {t.accessibility.reset}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
