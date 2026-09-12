"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";
import { navigationData } from "@/data";

const navKeyMap: Record<string, keyof typeof translations.id.nav> = {
  "Beranda": "home",
  "PPDB": "ppdb",
};

const quickLinks = navigationData.flatMap((section) => {
  if (section.href && !section.items) {
    return [
      {
        href: section.href,
        title: section.title,
        navKey: navKeyMap[section.title],
      },
    ];
  }
  return (section.items ?? []).map((item) => ({
    href: item.href,
    title: item.title,
  }));
});

const socialLinks = [
  {
    href: "https://www.youtube.com/channel/UCGGVdb_Wh1lvn8HIoMKdiLA",
    label: "YouTube",
    iconId: "youtube",
  },
  {
    href: "https://www.instagram.com/skariga_official",
    label: "Instagram",
    iconId: "instagram",
  },
  {
    href: "https://www.facebook.com/SKARIGA/?locale=id_ID",
    label: "Facebook",
    iconId: "facebook",
  },
  {
    href: "https://www.tiktok.com/@skariga",
    label: "TikTok",
    iconId: "tiktok",
  },
];

function quickLinkLabel(
  t: (typeof translations)["id"],
  link: { href: string; title: string; navKey?: keyof typeof translations.id.nav }
) {
  if (link.navKey) {
    const navLabel = t.nav[link.navKey];
    if (navLabel) return navLabel;
  }
  const navItem = t.nav_items[link.href as keyof typeof t.nav_items];
  return navItem?.title || link.title;
}

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
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-colors hover:bg-primary hover:text-white"
                  aria-label={social.label}
                >
                  <svg className="h-4 w-4 fill-current" aria-hidden="true">
                    <use href={`/assets/icons/sprite.svg#${social.iconId}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={t.footer.quick_links}>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.quick_links}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {quickLinkLabel(t, link)}
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
                  Jl. Raya Tlogomas Gg. 9 No.29, Tlogomas, Kec. Lowokwaru, Kota
                  Malang, Jawa Timur 65144
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Phone
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a href="tel:+62341554383" className="hover:text-primary transition-colors">
                  (0341) 554383
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MessageCircle
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="https://wa.me/6282133000370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +62 821-3300-0370
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <Mail
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=mail.smkpgri3malang@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mail.smkpgri3malang@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-lg border border-slate-800">
              <iframe
                title="SMK PGRI 3 MALANG"
                src="https://maps.google.com/maps?width=100%&amp;height=220&amp;hl=en&amp;q=smk%20pgri%203%20malang&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="h-44 w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </address>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SMK PGRI 3 Malang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
