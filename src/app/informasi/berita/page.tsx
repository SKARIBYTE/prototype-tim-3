import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Berita",
  description: "Kabar terkini dan liputan kegiatan seputar SMK PGRI 3 Malang.",
};

interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  span: string;
  image: string;
}

const BeritaTerbaru: NewsItem[] = [
  {
    id: "1",
    date: "16 Agu 2026",
    title: "Siswa Rekayasa Perangkat Lunak Raih Juara 1 Lomba LKS Tingkat Provinsi",
    excerpt: "Tim robotik dan web development SMK PGRI 3 Malang berhasil menyisihkan 40 sekolah lainnya dalam ajang bergengsi LKS 2026.",
    category: "Prestasi",
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: "2",
    date: "14 Agu 2026",
    title: "Kunjungan Industri Kampus IT",
    excerpt: "Memperkenalkan dunia perkuliahan dan industri digital kepada siswa.",
    category: "Kegiatan",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
  },
  {
    id: "3",
    date: "12 Agu 2026",
    title: "Pelatihan Kurikulum Merdeka",
    excerpt: "Meningkatkan adaptabilitas pengajar terhadap metode pembelajaran terbaru.",
    category: "Akademik",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  }
];

const BeritaSekolah: NewsItem[] = [
  {
    id: "4",
    date: "10 Agu 2026",
    title: "Sertifikasi Kompetensi BNSP",
    excerpt: "Uji kompetensi keahlian untuk kelas XII sebagai bekal terjun ke dunia kerja.",
    category: "Sertifikasi",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    id: "5",
    date: "8 Agu 2026",
    title: "Peresmian Laboratorium Komputer Baru Standar Industri",
    excerpt: "Fasilitas baru dilengkapi dengan iMac dan PC high-end untuk mendukung produktivitas jurusan multimedia dan RPL.",
    category: "Fasilitas",
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
  },
  {
    id: "6",
    date: "5 Agu 2026",
    title: "Peringatan Kemerdekaan RI",
    excerpt: "Jadwal lomba dan kegiatan pawai budaya yang akan diikuti seluruh siswa.",
    category: "Acara",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80",
  }
];

function BentoCard({ item }: { item: NewsItem }) {
  return (
    <a
      key={item.id}
      href="#"
      className={`group relative overflow-hidden rounded-2xl ${item.span} block focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none focus-visible:ring-offset-4 shadow-sm hover:shadow-xl transition-shadow`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90"></div>
      
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase">
            {item.category}
          </span>
          <time className="text-white/80 text-xs font-semibold tracking-wide">{item.date}</time>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 leading-snug">
          {item.title}
        </h2>
        <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out overflow-hidden">
          <p className="text-slate-200/90 text-sm leading-relaxed mt-2 md:mt-0 min-h-0 line-clamp-2 md:line-clamp-none">
            {item.excerpt}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh bg-white text-slate-900">
      <PageHero
        title="Berita"
        subtitle="Kabar terkini dan liputan kegiatan seputar SMK PGRI 3 Malang."
        imageSrc="https://picsum.photos/seed/skariga-berita/1920/1080"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Berita Terbaru</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px] md:auto-rows-[280px]">
              {BeritaTerbaru.map((item) => (
                <BentoCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-slate-900 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Berita Sekolah</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px] md:auto-rows-[240px]">
              {BeritaSekolah.map((item) => (
                <BentoCard key={item.id} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
