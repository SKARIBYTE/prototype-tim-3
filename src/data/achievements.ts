import type {
  Department,
  AlumniProfile,
  IndustryPartner,
  Achievement,
  BLUDProduct,
  BKKJob,
  PPDBTimeline,
  PPDBTrack,
  Equipment,
} from "@/types";

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Juara 1 LKS Web Technologies",
    event: "Lomba Kompetensi Siswa Tingkat Nasional",
    year: 2024,
    level: "Nasional",
    major: "Rekayasa Perangkat Lunak",
    description:
      "Meraih emas dalam kategori Web Technologies pada LKS SMK Nasional di Surabaya.",
  },
  {
    id: "ach-2",
    title: "Juara 2 Industrial Control",
    event: "Lomba Kompetensi Siswa Tingkat Nasional",
    year: 2024,
    level: "Nasional",
    major: "Teknik Elektronika Industri",
    description:
      "Perak pada kategori Industrial Control, mengalahkan 28 kontingen provinsi.",
  },
  {
    id: "ach-3",
    title: "Best Innovation Award",
    event: "Indonesia Skills Competition",
    year: 2023,
    level: "Nasional",
    major: "Teknik Pemesinan",
    description:
      "Penghargaan inovasi terbaik untuk prototype mesin pengolah limbah plastik.",
  },
  {
    id: "ach-4",
    title: "Juara 1 Film Pendek Pelajar",
    event: "Festival Film Pelajar Jawa Timur",
    year: 2024,
    level: "Provinsi",
    major: "Broadcasting dan Perfilman",
    description:
      "Film dokumenter tentang pelestarian sumber mata air Malang Raya meraih penghargaan tertinggi.",
  },
];
