
import type {
  PPDBTrack
} from "@/types";

export const ppdbTracks: PPDBTrack[] = [
  {
    id: "track-1",
    name: "Jalur Reguler",
    description: "Seleksi berdasarkan nilai rapor, tes akademik, dan wawancara.",
    quota: 320,
    requirements: [
      "Ijazah atau SKL SMP/MTs sederajat",
      "Rapor semester 1-5 SMP/MTs",
      "Kartu Keluarga dan Akta Kelahiran",
      "Pas foto 3x4 latar merah (4 lembar)",
      "Surat keterangan sehat dari dokter",
    ],
  },
  {
    id: "track-2",
    name: "Jalur Prestasi",
    description: "Khusus siswa berprestasi di bidang akademik, olahraga, atau seni tingkat kota/provinsi/nasional.",
    quota: 48,
    requirements: [
      "Semua persyaratan jalur reguler",
      "Sertifikat/piagam prestasi asli (minimal tingkat kota)",
      "Surat rekomendasi dari kepala sekolah asal",
      "Portofolio karya (untuk jurusan DKV, Animasi, BCP)",
    ],
  },
  {
    id: "track-3",
    name: "Jalur Afirmasi",
    description: "Diperuntukkan bagi siswa dari keluarga kurang mampu dengan subsidi biaya pendidikan.",
    quota: 32,
    requirements: [
      "Semua persyaratan jalur reguler",
      "Surat Keterangan Tidak Mampu (SKTM) dari kelurahan",
      "Kartu Indonesia Pintar (KIP) atau KKS/PKH",
      "Surat pernyataan kesanggupan dari orang tua/wali",
    ],
  },
];
