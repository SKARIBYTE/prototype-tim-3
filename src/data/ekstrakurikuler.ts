import type { Extracurricular, ExtracurricularCategory } from "@/types";

export const extracurricularCategories: ExtracurricularCategory[] = [
  {
    id: "olahraga",
    name: "Olahraga",
    description:
      "Mengembangkan kebugaran jasmani, sportivitas, dan kerja sama tim melalui berbagai cabang olahraga.",
    color: "bg-green-500",
  },
  {
    id: "seni-kreatif",
    name: "Seni & Kreatif",
    description:
      "Mengasah bakat seni, kreativitas, dan ekspresi diri melalui kegiatan musik, fotografi, dan kerajinan.",
    color: "bg-pink-500",
  },
  {
    id: "teknologi",
    name: "Teknologi",
    description:
      "Mengembangkan minat di bidang teknologi modern seperti robotika dan e-sport berbasis kompetisi.",
    color: "bg-blue-500",
  },
  {
    id: "bahasa",
    name: "Bahasa",
    description:
      "Memperdalam kemampuan berkomunikasi dalam bahasa asing untuk mendukung kesiapan global siswa.",
    color: "bg-indigo-500",
  },
  {
    id: "kebangsaan",
    name: "Kebangsaan",
    description:
      "Menanamkan nilai disiplin, kepemimpinan, dan cinta tanah air melalui kegiatan kepramukaan dan upacara.",
    color: "bg-red-500",
  },
  {
    id: "keagamaan",
    name: "Keagamaan",
    description:
      "Membina akhlak dan spiritualitas siswa melalui kegiatan keagamaan yang terstruktur dan rutin.",
    color: "bg-emerald-600",
  },
];

export const extracurriculars: Extracurricular[] = [
  {
    id: "futsal",
    name: "Futsal",
    categoryId: "olahraga",
    description:
      "Tim futsal sekolah melatih teknik dribbling, passing, dan strategi permainan untuk mengikuti turnamen antar sekolah.",
    icon: "CircleDot",
  },
  {
    id: "voli",
    name: "Bola Voli",
    categoryId: "olahraga",
    description:
      "Melatih koordinasi, lompatan, dan kerja sama tim dalam permainan voli indoor maupun lapangan terbuka.",
    icon: "Volleyball",
  },
  {
    id: "sepak-bola",
    name: "Sepak Bola",
    categoryId: "olahraga",
    description:
      "Mengembangkan teknik dasar sepak bola dan taktik permainan untuk kompetisi tingkat sekolah dan kota.",
    icon: "Goal",
  },
  {
    id: "badminton",
    name: "Badminton",
    categoryId: "olahraga",
    description:
      "Melatih kelincahan, smash, dan strategi ganda maupun tunggal dalam kejuaraan badminton sekolah.",
    icon: "Feather",
  },
  {
    id: "beladiri",
    name: "Beladiri",
    categoryId: "olahraga",
    description:
      "Membangun kebugaran, disiplin, dan rasa percaya diri melalui latihan seni bela diri terstruktur.",
    icon: "Swords",
  },
  {
    id: "band",
    name: "Band",
    categoryId: "seni-kreatif",
    description:
      "Grup musik sekolah yang berlatih instrumen dan vokal untuk tampil di acara sekolah dan kompetisi seni.",
    icon: "Music",
  },
  {
    id: "fotografi",
    name: "Fotografi",
    categoryId: "seni-kreatif",
    description:
      "Mempelajari teknik komposisi, pencahayaan, dan editing foto untuk mendokumentasikan kegiatan sekolah.",
    icon: "Camera",
  },
  {
    id: "indonesia-craft",
    name: "Indonesia Craft",
    categoryId: "seni-kreatif",
    description:
      "Melestarikan kerajinan tradisional Indonesia sambil mengembangkan kreativitas dan keterampilan tangan siswa.",
    icon: "Palette",
  },
  {
    id: "robotik",
    name: "Robotik",
    categoryId: "teknologi",
    description:
      "Merancang, merakit, dan memprogram robot untuk mengikuti lomba robotika tingkat regional dan nasional.",
    icon: "Bot",
  },
  {
    id: "e-sport",
    name: "E-Sport",
    categoryId: "teknologi",
    description:
      "Mengembangkan strategi permainan, teamwork, dan sportivitas digital dalam kompetisi e-sport antar sekolah.",
    icon: "Gamepad2",
  },
  {
    id: "bahasa-inggris",
    name: "Klub Bahasa Inggris",
    categoryId: "bahasa",
    description:
      "Memperdalam kemampuan speaking, listening, dan debat berbahasa Inggris melalui kegiatan interaktif rutin.",
    icon: "Languages",
  },
  {
    id: "bahasa-perancis",
    name: "Klub Bahasa Perancis",
    categoryId: "bahasa",
    description:
      "Mengenal budaya dan bahasa Prancis melalui percakapan, lagu, dan kegiatan budaya yang menarik.",
    icon: "BookOpen",
  },
  {
    id: "bahasa-jerman",
    name: "Klub Bahasa Jerman",
    categoryId: "bahasa",
    description:
      "Memperkenalkan bahasa dan budaya Jerman sebagai bekal komunikasi internasional bagi siswa.",
    icon: "Globe",
  },
  {
    id: "pramuka",
    name: "Pramuka",
    categoryId: "kebangsaan",
    description:
      "Kegiatan kepramukaan yang melatih kemandirian, kepemimpinan, dan cinta alam melalui perkemahan dan latihan rutin.",
    icon: "Tent",
  },
  {
    id: "paskibra",
    name: "Paskibra",
    categoryId: "kebangsaan",
    description:
      "Pasukan Pengibar Bendera yang melatih disiplin, gerak baris-berbaris, dan semangat nasionalisme siswa.",
    icon: "Flag",
  },
  {
    id: "bdi",
    name: "Badan Dakwah Islam (BDI)",
    categoryId: "keagamaan",
    description:
      "Kegiatan rutin pendalaman baca tulis Al-Qur'an, peringatan hari besar Islam (PHBI), wisata rohani, dan shalawat banjari.",
    icon: "Moon",
  },
];
