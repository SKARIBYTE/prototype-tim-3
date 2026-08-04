import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/jurusan", label: "Jurusan" },
  { href: "/ppdb", label: "PPDB" },
  { href: "/blud", label: "BLUD" },
  { href: "/bkk", label: "BKK" },
  { href: "/equipment", label: "Peralatan" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="36" height="36" rx="8" fill="#E17626" />
                <path
                  d="M8 18L13 11L18 18L23 11L28 18"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 24H26"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-lg font-bold text-white">
                SMK PGRI 3 Malang
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Sekolah Menengah Kejuruan unggulan di Kota Malang yang mencetak
              lulusan kompeten dan siap kerja di berbagai bidang industri.
            </p>
          </div>

          <nav aria-label="Tautan cepat">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Tautan Cepat
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
              Kontak
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
            &copy; {new Date().getFullYear()} SMK PGRI 3 Malang. Seluruh hak
            dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
