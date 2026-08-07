"use client";

import { useState, useEffect, forwardRef, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationData, NavSection } from "@/data";
import { Button } from "./ui/button";
import LanguageSwitcher, { useLanguage } from "./LanguageSwitcher";
import { translations } from "@/i18n";

const navKeyMap: Record<string, keyof typeof translations.id.nav> = {
  "Beranda": "home",
  "Tentang Kami": "about",
  "Program": "program",
  "Informasi": "info",
  "Karir": "career",
  "PPDB": "ppdb",
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

  return (
    <li>
      <NavigationMenuLink
        ref={ref as any}
        render={<Link href={href} />}
        className={cn(
          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          isActive
            ? "bg-primary text-white hover:bg-primary/90 hover:text-white"
            : "bg-transparent hover:bg-transparent focus:bg-transparent hover:text-primary focus:text-primary",
          className
        )}
        {...props}
      >
        <div className={cn("text-sm font-medium leading-none transition-colors group-hover:text-primary", isActive ? "text-white group-hover:text-white" : "text-slate-900")}>{title}</div>
        {children && (
          <p className={cn("line-clamp-2 text-sm leading-snug transition-colors group-hover:text-primary/80", isActive ? "text-white/80 group-hover:text-white/80" : "text-slate-500")}>
            {children}
          </p>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Navbar({ backDark = true }: { backDark?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  const lang = useLanguage();
  const t = translations[lang];
  
  const hasBackDarkInMenu = useMemo(() => {
    for (const section of navigationData) {
      if (section.href === pathname && section.backDark) return true;
      if (section.items) {
        const item = section.items.find(item => pathname === item.href || pathname?.startsWith(item.href));
        if (item?.backDark) return true;
      }
    }
    return false;
  }, [pathname]);

  const isHomePageBehavior = backDark || hasBackDarkInMenu || pathname === "/";
  const isDarkText = scrolled || menuOpen || !isHomePageBehavior;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const isSectionActive = (section: NavSection) => {
    if (section.href) {
      return pathname === section.href || (section.href !== "/" && pathname?.startsWith(section.href));
    }
    if (section.items) {
      return section.items.some(item => pathname === item.href || pathname?.startsWith(item.href));
    }
    return false;
  };

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3"
          : isHomePageBehavior
          ? "bg-linear-to-b from-slate-950/60 via-slate-950/20 to-transparent border-transparent py-5 border-none"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-4"
            aria-label="SMK PGRI 3 Malang - Beranda"
          >
            <Image
              src="/assets/images/skariga.png"
              alt="Logo SMK PGRI 3 Malang"
              width={64}
              height={64}
              className="rounded-md"
            />
            <span
              className={cn(
                "text-xl font-bold tracking-wider transition-colors duration-300 font-neuropol",
                isDarkText ? "text-slate-900" : "text-white"
              )}
            >
              SMK PGRI 3 Malang
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationData.map((section, idx) => {
                  const isActive = isSectionActive(section);
                  const key = navKeyMap[section.title];
                  const titleText = key && t.nav[key] ? t.nav[key] : section.title;
                  
                  if (section.href && !section.items) {

                    return (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuLink
                          render={<Link href={section.href} />}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "cursor-pointer",
                            isActive
                              ? "text-primary bg-transparent hover:text-primary hover:bg-transparent focus:bg-transparent"
                              : cn(
                                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                                  isDarkText
                                    ? "text-slate-600 hover:text-primary focus:text-primary"
                                    : "text-white/90 hover:text-primary focus:text-primary"
                                )
                          )}
                        >
                          {titleText}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }

                  if (section.items) {
                    return (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuTrigger
                          className={cn(
                            "cursor-pointer bg-transparent hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent",
                            isActive
                              ? "text-primary hover:text-primary data-[state=open]:text-primary focus:text-primary!"
                              : cn(
                                  isDarkText
                                    ? "text-slate-600 hover:text-primary data-[state=open]:text-primary focus:text-primary"
                                    : "text-white/90 hover:text-primary data-[state=open]:text-primary focus:text-primary"
                                )
                          )}
                        >
                          {titleText}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={cn(
                            "grid gap-3 p-4",
                            section.items.length > 3 ? "w-100 md:w-125 md:grid-cols-2 lg:w-150" : "w-75"
                          )}>
                            {section.items.map((item, itemIdx) => {
                              const navItemTrans = (t.nav_items as Record<string, { title: string; desc: string }>)[item.href];
                              const itemTitle = navItemTrans?.title || item.title;
                              const itemDesc = navItemTrans?.desc || item.description;
                              return (
                                <ListItem key={itemIdx} href={item.href} title={itemTitle}>
                                  {itemDesc}
                                </ListItem>
                              );
                            })}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  
                  return null;
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-4 pl-4 border-l border-slate-200/50">
              <LanguageSwitcher />
            </div>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors cursor-pointer",
              isDarkText
                ? "text-slate-600 active:bg-slate-100"
                : "text-white active:bg-white/10"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md rounded-b-xl shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationData.map((section, idx) => {
                const isActive = isSectionActive(section);
                const key = navKeyMap[section.title];
                const titleText = key && t.nav[key] ? t.nav[key] : section.title;
                
                if (section.href && !section.items) {
                  return (
                    <Link
                      key={idx}
                      href={section.href}
                      className={cn("block font-medium py-2 rounded-md px-3 bg-transparent cursor-pointer", isActive ? "text-primary/90 font-bold" : "text-slate-700 hover:text-primary")}
                      onClick={() => setMenuOpen(false)}
                    >
                      {titleText}
                    </Link>
                  );
                }

                if (section.items) {
                  return (
                    <div key={idx} className="space-y-2">
                      <Button
                        variant="ghost"
                        className={cn("flex items-center justify-between w-full font-medium py-2 px-3 rounded-md hover:bg-transparent focus:bg-transparent", isActive ? "text-primary/90 font-bold" : "text-slate-700 hover:text-primary")}
                        onClick={() => toggleSection(section.title.toLowerCase())}
                      >
                        {titleText}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSection === section.title.toLowerCase() ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      {openSection === section.title.toLowerCase() && (
                        <div className="pl-4 space-y-3 py-2 border-l-2 border-slate-100">
                          {section.items.map((item, itemIdx) => {
                            const isItemActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                            const navItemTrans = (t.nav_items as Record<string, { title: string; desc: string }>)[item.href];
                            const itemTitle = navItemTrans?.title || item.title;
                            return (
                              <Link key={itemIdx} href={item.href} className={cn("block text-sm cursor-pointer", isItemActive ? "text-primary font-bold" : "text-slate-600 hover:text-primary")} onClick={() => setMenuOpen(false)}>
                                {itemTitle}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
