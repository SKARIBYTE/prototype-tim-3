export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  href?: string;
  items?: NavItem[];
}

export const navigationData: NavSection[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Tentang Kami",
    items: [
      {
        title: "Profil Sekolah",
        href: "/tentang-kami/profil-sekolah",
        description: "Sejarah, visi misi, dan identitas SMK PGRI 3 Malang.",
      },
      {
        title: "Profil Guru",
        href: "/tentang-kami/profil-guru",
        description: "Tenaga pendidik profesional dan berpengalaman.",
      },
      {
        title: "Fasilitas",
        href: "/tentang-kami/fasilitas",
        description: "Sarana dan prasarana penunjang pembelajaran.",
      },
      {
        title: "Kerjasama Industri",
        href: "/tentang-kami/kerjasama-industri",
        description: "Mitra DUDI untuk prakerin dan rekrutmen.",
      },
      {
        title: "BLUD",
        href: "/tentang-kami/blud",
        description: "Badan Layanan Umum Daerah SMK PGRI 3 Malang.",
      },
    ],
  },
  {
    title: "Informasi",
    items: [
      {
        title: "Pengumuman",
        href: "/informasi/pengumuman",
      },
      {
        title: "Berita",
        href: "/informasi/berita",
      },
      {
        title: "Prestasi",
        href: "/informasi/prestasi",
      },
      {
        title: "Kalender Aktivitas",
        href: "/informasi/kalender-aktivitas",
      },
      {
        title: "Hubungi Kami",
        href: "/informasi/hubungi-kami",
      },
    ],
  },
  {
    title: "Program",
    items: [
      {
        title: "Jurusan",
        href: "/program/jurusan",
        description: "Program keahlian unggulan berstandar industri.",
      },
      {
        title: "Ekstrakurikuler",
        href: "/program/ekstrakurikuler",
        description: "Pengembangan minat dan bakat siswa.",
      },
      {
        title: "PKL",
        href: "/program/pkl",
        description: "Praktik Kerja Lapangan.",
      },
      {
        title: "Tes Mengemudi",
        href: "/program/tes-mengemudi",
        description: "Fasilitas dan program lisensi berkendara.",
      },
    ],
  },
  {
    title: "Karir",
    items: [
      {
        title: "BKI (Bidang Kerjasama Industri)",
        href: "/karir/bki",
        description: "Informasi lowongan dan rekrutmen.",
      },
      {
        title: "Alumni",
        href: "/karir/alumni",
        description: "Jejaring dan kisah sukses lulusan.",
      },
    ],
  },
  {
    title: "PPDB",
    href: "/ppdb",
  },
];
