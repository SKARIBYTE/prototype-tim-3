"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";

const quickLinks = [
  { href: "/program/jurusan", label: "Jurusan" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/tentang-kami/blud", label: "BLUD" },
  { href: "/karir/bki", label: "BKK" },
  { href: "/tentang-kami/fasilitas", label: "Fasilitas" },
];

export default function Footer() {
  const lang = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/images/skariga.png"
                alt="Logo SMK PGRI 3 Malang"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold text-white font-neuropol">
                SMK PGRI 3 Malang
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label="Tautan cepat">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quick_links}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  Jl. Raya Tlogomas No.24, Tlogomas, Kec. Lowokwaru, Kota
                  Malang, Jawa Timur 65144
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a href="tel:+62341551525" className="hover:text-primary transition-colors">
                  (0341) 551525
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a href="mailto:info@smkpgri3malang.sch.id" className="hover:text-primary transition-colors">
                  info@smkpgri3malang.sch.id
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SMK PGRI 3 Malang. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
