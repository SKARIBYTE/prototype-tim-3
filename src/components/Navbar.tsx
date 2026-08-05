"use client";

import { useState, useEffect, forwardRef } from "react";
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
import { navigationData, NavSection, NavItem } from "@/data";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isScrolledOrNotHome = scrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
        isScrolledOrNotHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3"
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
                "text-lg font-bold tracking-wider transition-colors duration-300 font-neuropol",
                isScrolledOrNotHome ? "text-slate-900" : "text-white"
              )}
            >
              SMK PGRI 3 Malang
            </span>
          </Link>

          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationData.map((section, idx) => {
                  const isActive = isSectionActive(section);
                  
                  if (section.href && !section.items) {

                    return (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuLink
                          render={<Link href={section.href} />}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "cursor-pointer",
                            isActive
                              ? "text-primary/90 bg-transparent hover:text-primary hover:bg-transparent focus:bg-transparent focus:text-primary"
                              : cn(
                                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                                  isScrolledOrNotHome
                                    ? "text-slate-600 hover:text-primary focus:text-primary!"
                                    : "text-white/90 hover:text-primary focus:text-primary!"
                                )
                          )}
                        >
                          {section.title}
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
                              ? "text-primary/90 hover:text-primary data-[state=open]:text-primary focus:text-primary!"
                              : cn(
                                  isScrolledOrNotHome
                                    ? "text-slate-600 hover:text-primary data-[state=open]:text-primary focus:text-primary"
                                    : "text-white/90 hover:text-primary data-[state=open]:text-primary focus:text-primary"
                                )
                          )}
                        >
                          {section.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className={cn(
                            "grid gap-3 p-4",
                            section.items.length > 3 ? "w-100 md:w-125 md:grid-cols-2 lg:w-150" : "w-75"
                          )}>
                            {section.items.map((item, itemIdx) => (
                              <ListItem key={itemIdx} href={item.href} title={item.title}>
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }
                  
                  return null;
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolledOrNotHome
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
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
                
                if (section.href && !section.items) {
                  if (section.href === "/ppdb") {
                    return (
                      <Link
                        key={idx}
                        href={section.href}
                        className={cn("block w-full mt-6 py-3 px-4 text-center font-medium rounded-lg", isActive ? "bg-primary text-white ring-2 ring-primary ring-offset-2" : "bg-primary text-white")}
                        onClick={() => setMenuOpen(false)}
                      >
                        {section.title}
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={idx}
                      href={section.href}
                      className={cn("block font-medium py-2 rounded-md px-3", isActive ? "bg-primary text-white" : "text-slate-700 hover:text-primary")}
                      onClick={() => setMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  );
                }

                if (section.items) {
                  return (
                    <div key={idx} className="space-y-2">
                      <button
                        className={cn("flex items-center justify-between w-full font-medium py-2 px-3 rounded-md", isActive ? "bg-primary text-white" : "text-slate-700 hover:text-primary")}
                        onClick={() => toggleSection(section.title.toLowerCase())}
                      >
                        {section.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSection === section.title.toLowerCase() ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openSection === section.title.toLowerCase() && (
                        <div className="pl-4 space-y-3 py-2 border-l-2 border-slate-100">
                          {section.items.map((item, itemIdx) => {
                            const isItemActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                            return (
                              <Link key={itemIdx} href={item.href} className={cn("block text-sm", isItemActive ? "text-primary font-bold" : "text-slate-600 hover:text-primary")} onClick={() => setMenuOpen(false)}>
                                {item.title}
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
