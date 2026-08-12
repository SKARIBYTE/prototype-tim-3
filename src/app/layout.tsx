import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import LenisProvider from "@/components/LenisProvider";
import BackToTop from "@/components/BackToTop";
import AccessibilityPanel from "@/components/AccessibilityPanel";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const neuropol = localFont({
  src: "../../public/assets/fonts/Neuropol.otf",
  variable: "--font-neuropol",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png'
  },
  title: {
    default: "SMK PGRI 3 Malang - Success by Discipline",
    template: "%s | SMK PGRI 3 Malang - Success by Discipline",
  },
  description:
    "Sekolah untuk Kerja, Wirausaha, Kuliah Apalagi",
  keywords: [
    "SMK PGRI 3 Malang",
    "SMK Malang",
    "PPDB SMK Malang",
    "sekolah kejuruan",
    "otomotif",
    "pemesinan",
    "elektro",
    "smk terbaik di malang"
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "SMK PGRI 3 Malang",
    title: "SMK PGRI 3 Malang",
    description:
      "Sekolah untuk Kerja, Wirausaha, Kuliah Apalagi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("antialiased", inter.variable, "font-sans", geist.variable, neuropol.variable)}>
      <head>
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-white text-slate-900">
        <LenisProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatBot />
          <BackToTop />
          <AccessibilityPanel />
        </LenisProvider>
      </body>
    </html>
  );
}
