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

export const departments: Department[] = [
  {
    id: "elektro",
    name: "Elektro",
    abbreviation: "EL",
    description:
      "Departemen yang mencetak tenaga ahli di bidang elektronika, kelistrikan, dan teknologi industri dengan kurikulum berbasis praktik langsung.",
    image: "/assets/images/elektro.jpg",
    majors: [
      {
        id: "teav",
        name: "Teknik Elektronika dan Audio Video",
        abbreviation: "TEAV",
        departmentId: "elektro",
        description:
          "Mempelajari perancangan, perakitan, dan perbaikan perangkat elektronika serta sistem audio video profesional.",
        competencies: [
          "Perakitan PCB dan komponen elektronika",
          "Instalasi sistem audio profesional",
          "Perbaikan perangkat televisi dan monitor",
          "Pemrograman mikrokontroler dasar",
        ],
        careerProspects: [
          "Teknisi Elektronika",
          "Audio Engineer",
          "Teknisi Broadcasting",
          "Quality Control Elektronik",
        ],
        icon: "Monitor",
      },
      {
        id: "ei",
        name: "Teknik Elektronika Industri",
        abbreviation: "EI",
        departmentId: "elektro",
        description:
          "Fokus pada sistem otomasi industri, kontrol proses, dan instrumentasi untuk kebutuhan manufaktur modern.",
        competencies: [
          "Pemrograman PLC dan SCADA",
          "Instalasi sistem kontrol industri",
          "Kalibrasi instrumen pengukuran",
          "Troubleshooting sistem otomasi",
        ],
        careerProspects: [
          "Teknisi Otomasi Industri",
          "Operator PLC",
          "Instrument Engineer",
          "Teknisi Maintenance Pabrik",
        ],
        icon: "Cpu",
      },
      {
        id: "ki",
        name: "Teknik Kimia Industri",
        abbreviation: "KI",
        departmentId: "elektro",
        description:
          "Mempelajari proses kimia industri, pengendalian mutu, dan pengolahan bahan baku menjadi produk bernilai tinggi.",
        competencies: [
          "Analisis kimia kuantitatif dan kualitatif",
          "Operasi unit proses kimia",
          "Pengendalian mutu produk",
          "Pengelolaan limbah industri",
        ],
        careerProspects: [
          "Analis Laboratorium",
          "Operator Proses Kimia",
          "Quality Assurance",
          "Teknisi Lingkungan",
        ],
        icon: "FlaskConical",
      },
      {
        id: "pb",
        name: "Teknik Pembangkit Tenaga Listrik",
        abbreviation: "PB",
        departmentId: "elektro",
        description:
          "Mendalami sistem pembangkitan, transmisi, dan distribusi tenaga listrik skala industri.",
        competencies: [
          "Instalasi listrik tegangan rendah dan menengah",
          "Operasi pembangkit listrik",
          "Pemeliharaan transformator dan panel distribusi",
          "Sistem proteksi kelistrikan",
        ],
        careerProspects: [
          "Teknisi PLN",
          "Electrical Engineer",
          "Teknisi Pembangkit",
          "Supervisor Listrik",
        ],
        icon: "Zap",
      },
    ],
  },
  {
    id: "otomotif",
    name: "Otomotif",
    abbreviation: "OT",
    description:
      "Departemen yang menghasilkan lulusan siap kerja di industri otomotif dengan penguasaan teknologi kendaraan terkini.",
    image: "/assets/images/otomotif.png",
    majors: [
      {
        id: "tsm",
        name: "Teknik Sepeda Motor",
        abbreviation: "TSM",
        departmentId: "otomotif",
        description:
          "Mempelajari perawatan, perbaikan, dan modifikasi sepeda motor dengan standar industri.",
        competencies: [
          "Tune-up dan servis berkala sepeda motor",
          "Overhaul mesin sepeda motor",
          "Sistem kelistrikan sepeda motor",
          "Diagnosa kerusakan dengan scanner",
        ],
        careerProspects: [
          "Mekanik Dealer Resmi",
          "Kepala Bengkel",
          "Parts Advisor",
          "Technical Trainer",
        ],
        icon: "Bike",
      },
      {
        id: "tkr",
        name: "Teknik Kendaraan Ringan",
        abbreviation: "TKR",
        departmentId: "otomotif",
        description:
          "Menguasai sistem mekanik, kelistrikan, dan diagnosa kendaraan ringan (mobil) sesuai standar pabrikan.",
        competencies: [
          "Overhaul engine dan transmisi",
          "Sistem suspensi dan kemudi",
          "Diagnosa OBD-II",
          "Sistem AC dan kelistrikan body",
        ],
        careerProspects: [
          "Mekanik Mobil",
          "Service Advisor",
          "Foreman Bengkel",
          "Instruktur Otomotif",
        ],
        icon: "Car",
      },
      {
        id: "bo",
        name: "Teknik Body Otomotif",
        abbreviation: "BO",
        departmentId: "otomotif",
        description:
          "Spesialisasi perbaikan dan pengecatan body kendaraan dengan teknik dan material profesional.",
        competencies: [
          "Teknik pengelasan body kendaraan",
          "Persiapan permukaan dan pendempulan",
          "Pengecatan oven (spray booth)",
          "Estimasi biaya perbaikan body",
        ],
        careerProspects: [
          "Teknisi Body Repair",
          "Painter Otomotif",
          "Estimator Asuransi",
          "Supervisor Body Shop",
        ],
        icon: "PaintBucket",
      },
    ],
  },
  {
    id: "pemesinan",
    name: "Pemesinan",
    abbreviation: "PM",
    description:
      "Departemen yang membekali siswa dengan keahlian manufaktur, pengelasan, dan bisnis digital untuk industri 4.0.",
    image: "/assets/images/pemesinan.png",
    majors: [
      {
        id: "bdp",
        name: "Bisnis Digital dan Pemasaran",
        abbreviation: "BDP",
        departmentId: "pemesinan",
        description:
          "Menggabungkan keahlian pemasaran digital, e-commerce, dan manajemen bisnis online.",
        competencies: [
          "Digital marketing dan SEO",
          "Manajemen marketplace dan e-commerce",
          "Content creation dan copywriting",
          "Analisis data penjualan",
        ],
        careerProspects: [
          "Digital Marketer",
          "E-commerce Specialist",
          "Content Creator",
          "Social Media Manager",
        ],
        icon: "ShoppingBag",
      },
      {
        id: "tl",
        name: "Teknik Pengelasan",
        abbreviation: "TL",
        departmentId: "pemesinan",
        description:
          "Menguasai berbagai teknik pengelasan (SMAW, GMAW, GTAW) sesuai standar internasional.",
        competencies: [
          "Pengelasan SMAW berbagai posisi",
          "Pengelasan GMAW/MIG",
          "Pengelasan GTAW/TIG",
          "Pembacaan gambar teknik las",
        ],
        careerProspects: [
          "Welder Bersertifikat",
          "Welding Inspector",
          "Fabricator",
          "Pipefitter",
        ],
        icon: "Flame",
      },
      {
        id: "tp",
        name: "Teknik Pemesinan",
        abbreviation: "TP",
        departmentId: "pemesinan",
        description:
          "Mempelajari operasi mesin konvensional dan CNC untuk produksi komponen presisi.",
        competencies: [
          "Operasi mesin bubut dan frais",
          "Pemrograman CNC turning dan milling",
          "Pengukuran presisi dengan CMM",
          "Pembacaan gambar teknik manufaktur",
        ],
        careerProspects: [
          "Operator CNC",
          "Programmer CNC",
          "Quality Inspector",
          "Production Supervisor",
        ],
        icon: "Settings",
      },
    ],
  },
  {
    id: "tik",
    name: "TIK",
    abbreviation: "TIK",
    description:
      "Departemen unggulan yang mencetak talenta digital di bidang jaringan, perangkat lunak, desain, dan multimedia.",
    image: "/assets/images/tik.webp",
    majors: [
      {
        id: "nima",
        name: "Animasi",
        abbreviation: "NIMA",
        departmentId: "tik",
        description:
          "Membuat konten animasi 2D dan 3D untuk industri kreatif, game, dan media digital.",
        competencies: [
          "Animasi 2D frame-by-frame",
          "Modelling dan animasi 3D (Blender)",
          "Storyboarding dan character design",
          "Motion graphics dan compositing",
        ],
        careerProspects: [
          "Animator 2D/3D",
          "Motion Designer",
          "Game Artist",
          "VFX Artist",
        ],
        icon: "Clapperboard",
      },
      {
        id: "dkv",
        name: "Desain Komunikasi Visual",
        abbreviation: "DKV",
        departmentId: "tik",
        description:
          "Merancang komunikasi visual yang efektif melalui desain grafis, branding, dan UI/UX.",
        competencies: [
          "Desain grafis (Adobe Creative Suite)",
          "Branding dan identitas visual",
          "UI/UX Design",
          "Fotografi produk dan editorial",
        ],
        careerProspects: [
          "Graphic Designer",
          "UI/UX Designer",
          "Brand Designer",
          "Art Director",
        ],
        icon: "Palette",
      },
      {
        id: "bp",
        name: "Broadcasting dan Perfilman",
        abbreviation: "BP",
        departmentId: "tik",
        description:
          "Menguasai produksi konten audio visual, penyiaran, dan sinematografi profesional.",
        competencies: [
          "Produksi video dan sinematografi",
          "Editing non-linear (Premiere Pro, DaVinci)",
          "Teknik penyiaran TV dan radio",
          "Scriptwriting dan directing",
        ],
        careerProspects: [
          "Videographer",
          "Video Editor",
          "Content Producer",
          "Broadcast Engineer",
        ],
        icon: "Video",
      },
      {
        id: "tkj",
        name: "Teknik Komputer Jaringan",
        abbreviation: "TKJ",
        departmentId: "tik",
        description:
          "Membangun dan mengelola infrastruktur jaringan komputer serta keamanan siber.",
        competencies: [
          "Instalasi dan konfigurasi jaringan LAN/WAN",
          "Administrasi server Linux dan Windows",
          "Keamanan jaringan dan firewall",
          "Cloud computing dasar (AWS/GCP)",
        ],
        careerProspects: [
          "Network Administrator",
          "System Administrator",
          "IT Support Specialist",
          "Cloud Engineer",
        ],
        icon: "Network",
      },
      {
        id: "rpl",
        name: "Rekayasa Perangkat Lunak",
        abbreviation: "RPL",
        departmentId: "tik",
        description:
          "Mengembangkan aplikasi web, mobile, dan desktop dengan metodologi pengembangan modern.",
        competencies: [
          "Pemrograman web (HTML, CSS, JavaScript, PHP)",
          "Pengembangan aplikasi mobile",
          "Basis data dan SQL",
          "Version control (Git) dan deployment",
        ],
        careerProspects: [
          "Web Developer",
          "Mobile Developer",
          "Software Engineer",
          "DevOps Engineer",
        ],
        icon: "Code",
      },
    ],
  },
];
