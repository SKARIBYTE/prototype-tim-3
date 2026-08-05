import type { Metadata } from "next";
import { ArrowRight, GraduationCap, MessageCircleQuestion } from "lucide-react";

export const metadata: Metadata = {
  title: "Pengumuman",
  description: "Informasi terbaru dan pengumuman penting bagi siswa dan orang tua.",
};

interface AnnouncementItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
  span: string;
  image: string;
}

const PengumumanPenting: AnnouncementItem[] = [
  {
    id: "1",
    date: "12 Agu 2026",
    title: "PPDB Tahun Ajaran 2026/2027",
    excerpt: "Pendaftaran gelombang pertama telah dibuka. Daftarkan putra/putri Anda melalui portal resmi PPDB kami.",
    category: "Penting",
    span: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  },
  {
    id: "2",
    date: "10 Agu 2026",
    title: "Pengambilan Rapor Genap",
    excerpt: "Mulai tanggal 15 hingga 17 Agustus 2026. Harap perhatikan jadwal kelas.",
    category: "Akademik",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
  },
  {
    id: "3",
    date: "8 Agu 2026",
    title: "Beasiswa Prestasi",
    excerpt: "Pendaftaran beasiswa jalur prestasi akademik dan non-akademik telah resmi dibuka.",
    category: "Penting",
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  }
];

const PengumumanTerbaru: AnnouncementItem[] = [
  {
    id: "4",
    date: "5 Agu 2026",
    title: "Libur Kemerdekaan RI",
    excerpt: "Dalam rangka HUT ke-81 RI, KBM diliburkan pada 17 Agustus 2026.",
    category: "Umum",
    span: "md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?w=800&q=80",
  },
  {
    id: "5",
    date: "1 Agu 2026",
    title: "Rapat Orang Tua Kelas X",
    excerpt: "Mengundang seluruh orang tua/wali murid kelas X untuk rapat awal tahun ajaran.",
    category: "Kesiswaan",
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
  },
  {
    id: "6",
    date: "28 Jul 2026",
    title: "Pembaruan Tata Tertib",
    excerpt: "Revisi tata tertib siswa terkait ketentuan penggunaan seragam model terbaru.",
    category: "Kedisiplinan",
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  }
];

const PengumumanSekolah: AnnouncementItem[] = [
  {
    id: "7",
    date: "25 Jul 2026",
    title: "Lomba Kompetensi Siswa",
    excerpt: "Persiapan seleksi LKS tingkat kota.",
    category: "Prestasi",
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: "8",
    date: "20 Jul 2026",
    title: "Kunjungan Industri",
    excerpt: "Jadwal kunjungan ke perusahaan teknologi terkemuka.",
    category: "Pendidikan",
    span: "md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: "9",
    date: "15 Jul 2026",
    title: "Renovasi Fasilitas Olahraga",
    excerpt: "Pemeliharaan lapangan basket dan voli telah selesai dilakukan.",
    category: "Fasilitas",
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
  }
];

function BentoCard({ item }: { item: AnnouncementItem }) {
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
    <main className="min-h-dvh bg-white text-slate-900 pb-32">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Pengumuman
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Informasi terbaru, kebijakan, dan pembaruan penting dari pihak sekolah.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-16">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Pengumuman Penting!</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[340px] md:auto-rows-[280px]">
                {PengumumanPenting.map((item) => (
                  <BentoCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Pengumuman Terbaru</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px] md:auto-rows-[240px]">
                {PengumumanTerbaru.map((item) => (
                  <BentoCard key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-emerald-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">Pengumuman Sekolah</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[320px] md:auto-rows-[240px]">
                {PengumumanSekolah.map((item) => (
                  <BentoCard key={item.id} item={item} />
                ))}
              </div>
            </div>

          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24">
              <div className="group relative rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" 
                  alt="Siswa berdiskusi"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-black/10"></div>
                
                <div className="relative p-8 flex flex-col h-full min-h-[360px] justify-end">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 shadow-xl">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">Penerimaan Siswa Baru 2026</h3>
                  <p className="text-blue-50/90 text-sm mb-8 leading-relaxed line-clamp-3">Wujudkan impianmu dan raih masa depan yang gemilang bersama SMK PGRI 3 Malang.</p>
                  
                  <a href="/ppdb" className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-white text-blue-900 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors shadow-lg focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none focus-visible:ring-offset-2">
                    Daftar Sekarang <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircleQuestion className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Butuh Bantuan?</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">Tim tata usaha kami siap membantu menjawab pertanyaan Anda terkait informasi sekolah.</p>
                <a href="/informasi/hubungi-kami" className="inline-flex items-center justify-center w-full px-5 py-3 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none focus-visible:ring-offset-2">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
