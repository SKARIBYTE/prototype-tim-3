import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { industryPartners } from "@/data/industryPartners";
import {
  BookOpen,
  Clock,
  Award,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  TrendingUp,
  ShieldCheck,
  CalendarDays,
  FileText,
  Briefcase,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Praktik Kerja Lapangan (PKL) | SMK PGRI 3 Malang",
  description:
    "Program magang industri resmi SMK PGRI 3 Malang. Siswa ditempatkan di perusahaan mitra selama 1 tahun untuk mendapatkan pengalaman kerja nyata sesuai kompetensi keahlian.",
};

const timeline = [
  {
    step: "01",
    icon: GraduationCap,
    title: "Persiapan sebelum PKL",
    period: "6 Bulan Sebelum",
    color: "bg-secondary text-white",
    desc: "Sebagai langkah awal, siswa kelas XI wajib menuntaskan Tugas Akhir dan mengikuti pelatihan BINTALSIK untuk mematangkan kesiapan kerja. Kamu juga berkesempatan memilih tempat PKL dari rekomendasi wali kelas dan bersiap mengikuti tahapan interview dengan perusahaan.",
  },
  {
    step: "02",
    icon: MapPin,
    title: "Penempatan di Industri",
    period: "Bulan ke-1",
    color: "bg-primary text-white",
    desc: "Siswa ditempatkan di perusahaan mitra sesuai kompetensi keahlian. Sekolah berkoordinasi langsung dengan perusahaan untuk memastikan kesesuaian.",
  },
  {
    step: "03",
    icon: Briefcase,
    title: "Pelaksanaan PKL",
    period: "Bulan 1–12",
    color: "bg-secondary text-white",
    desc: "Siswa bekerja aktif di industri, didampingi pembimbing perusahaan dan guru pembimbing dari sekolah yang melakukan kunjungan berkala.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Laporan & Evaluasi Akhir",
    period: "Akhir Periode",
    color: "bg-primary text-white",
    desc: "Siswa menyusun laporan PKL dan menjalani penilaian dari pembimbing industri serta guru sekolah sebagai syarat kelulusan tahap PKL.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Pengalaman Kerja Nyata",
    desc: "Langsung terlibat dalam proses kerja profesional di perusahaan ternama sesuai kompetensi jurusan masing-masing.",
    bg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Nilai Plus untuk CV",
    desc: "Satu tahun terjun langsung di industri memberikan jam terbang berharga yang bikin CV dan portofolio kamu makin dilirik HRD.",
    bg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "Jaringan Profesional",
    desc: "Membangun relasi dengan para praktisi industri yang bisa menjadi jembatan karir setelah lulus dari sekolah.",
    bg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Building2,
    title: "Peluang Rekrutmen Langsung",
    desc: "Siswa berprestasi selama PKL berpeluang langsung ditawarkan posisi kerja penuh oleh perusahaan mitra.",
    bg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const persyaratan = [
  "Telah menyelesaikan pembelajaran kelas X dan XI dengan nilai yang memenuhi syarat minimum",
  "Memiliki presensi kehadiran sekolah minimal 85% dalam satu tahun terakhir",
  "Tidak memiliki tanggungan nilai mata pelajaran produktif (remedial tuntas)",
  "Lulus pembekalan pra-PKL yang diselenggarakan oleh sekolah",
  "Mendapatkan persetujuan tertulis dari orang tua atau wali siswa",
  "Menyerahkan berkas administrasi lengkap sesuai ketentuan yang ditetapkan",
];

const dokumen = [
  { icon: FileText, label: "Surat Pengantar dari Sekolah" },
  { icon: ClipboardList, label: "Formulir Pendaftaran PKL" },
  { icon: Award, label: "Fotokopi Rapor Terakhir" },
  { icon: Users, label: "Surat Izin Orang Tua / Wali" },
  { icon: BookOpen, label: "CV / Portofolio Singkat" },
  { icon: CalendarDays, label: "Pas Foto Terbaru (3×4)" },
];

const faqItems = [
  {
    q: "Kapan PKL dilaksanakan?",
    a: "PKL dilaksanakan pada semester genap kelas XI, biasanya dimulai pada bulan Januari–Februari dan berakhir pada bulan Juni–Juli. Jadwal pasti diumumkan setiap tahun oleh tim BKI sekolah.",
  },
  {
    q: "Apakah siswa mendapatkan uang saku selama PKL?",
    a: "Kebijakan uang saku bergantung sepenuhnya pada masing-masing perusahaan mitra. Beberapa perusahaan memberikan uang saku, akomodasi, atau fasilitas makan. Hal ini akan dikomunikasikan saat proses penempatan.",
  },
  {
    q: "Bagaimana proses penempatan perusahaan?",
    a: "Sekolah melalui tim BKI berkoordinasi dengan perusahaan mitra untuk menyesuaikan kompetensi keahlian siswa dengan kebutuhan industri. Siswa juga dapat mengajukan usulan perusahaan, namun tetap melalui persetujuan sekolah.",
  },
  {
    q: "Apa yang terjadi jika siswa tidak lulus PKL?",
    a: "Siswa yang tidak memenuhi standar penilaian PKL akan mengikuti program remedial sesuai ketentuan. PKL merupakan komponen wajib yang mempengaruhi kelulusan, sehingga kehadiran dan kinerja sangat penting.",
  },
];

export default function Page() {
  const pklPartners = industryPartners.filter(
    (p) => p.type === "PKL" || p.type === "MoU",
  );

  return (
    <main className="min-h-dvh bg-white text-slate-800">
      <PageHero
        title="Praktik Kerja Lapangan"
        subtitle="Program magang industri terstruktur selama 1 tahun. Siswa SMK PGRI 3 Malang ditempatkan di perusahaan mitra terpercaya untuk mendapatkan pengalaman kerja nyata."
        imageSrc="https://picsum.photos/seed/skariga-pkl/1920/1080"
      />

      <section className="py-20 sm:py-28 bg-white" id="tentang">
        <ScrollReveal direction="up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
              <div className="space-y-7">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest mb-3">
                    <BookOpen className="size-4" aria-hidden="true" />
                    Tentang Program
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Belajar Langsung
                    <br className="hidden sm:block" /> dari Dunia Industri
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  PKL itu bagian wajib dari kurikulum SMK yang membawa siswa
                  langsung terjun ke dunia industri nyata. Nah, lewat program 1
                  tahun penuh ini, siswa SMK PGRI 3 Malang bisa langsung nerapin
                  semua skill dari kelas ke dalam rutinitas kerja profesional
                  sehari-hari
                </p>
                <ul className="space-y-3" aria-label="Keunggulan program PKL">
                  {[
                    "Pengawasan dari guru pembimbing dan pembimbing industri",
                    "Penempatan disesuaikan dengan kompetensi keahlian tiap siswa",
                    "Jembatan rekrutmen langsung ke perusahaan mitra setelah lulus",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="size-5 text-secondary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/karir/bki"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Cari Lowongan PKL
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/tentang-kami/kerjasama-industri"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold transition-all hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
                  >
                    Daftar Mitra Industri
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Clock,
                    label: "Durasi",
                    value: "1 tahun",
                    bg: "bg-primary",
                    text: "text-primary-foreground",
                    sub: "text-primary-foreground/80",
                  },
                  {
                    icon: Award,
                    label: "Bekal Karir",
                    value: "Portofolio & CV",
                    bg: "bg-white",
                    text: "text-slate-900",
                    sub: "text-slate-500",
                    border: "border border-slate-200 shadow-sm",
                  },
                  {
                    icon: ClipboardList,
                    label: "Penilaian",
                    value: "Pembimbing Industri",
                    bg: "bg-white",
                    text: "text-slate-900",
                    sub: "text-slate-500",
                    border: "border border-slate-200 shadow-sm",
                  },
                  {
                    icon: Users,
                    label: "Peserta Aktif",
                    value: "1.200+ / Tahun",
                    bg: "bg-secondary",
                    text: "text-primary-foreground",
                    sub: "text-primary-foreground/80",
                  },
                ].map(
                  (
                    { icon: Icon, label, value, bg, text, sub, border = "" },
                    i,
                  ) => (
                    <div
                      key={i}
                      className={`p-6 rounded-2xl ${bg} ${border} flex flex-col gap-4`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          bg === "bg-primary" || bg === "bg-secondary"
                            ? "bg-black/10"
                            : "bg-slate-100"
                        }`}
                      >
                        <Icon
                          className={`size-5 ${
                            bg === "bg-primary" || bg === "bg-secondary"
                              ? "text-white"
                              : "text-slate-600"
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p
                          className={`text-xs font-semibold uppercase tracking-wider ${sub}`}
                        >
                          {label}
                        </p>
                        <p className={`text-base font-bold mt-0.5 ${text}`}>
                          {value}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        className="py-20 bg-slate-50 border-y border-slate-200"
        id="manfaat"
      >
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Mengapa Harus PKL?
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Apa yang Didapat Siswa
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map(({ icon: Icon, title, desc, bg, iconColor }, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}
                  >
                    <Icon
                      className={`size-5 ${iconColor}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 sm:py-28 bg-white" id="alur">
        <ScrollReveal direction="up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Tahapan
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Alur Pelaksanaan PKL
              </h2>
              <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
                Dari persiapan awal hingga laporan akhir — semua tahapan
                terpandu oleh sekolah dan perusahaan mitra.
              </p>
            </div>

            <div className="hidden md:grid grid-cols-4 gap-0 relative">
              <div
                className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0"
                aria-hidden="true"
              />

              {timeline.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="relative z-10 flex flex-col items-center text-center px-4"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-5 shadow-sm`}
                    >
                      <Icon className="size-7" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      {item.step}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-3 ${item.color}`}
                    >
                      {item.period}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <ol
              className="md:hidden space-y-4"
              aria-label="Alur pelaksanaan PKL"
            >
              {timeline.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.step}
                    className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-slate-900 text-sm">
                          {item.title}
                        </h3>
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.color}`}
                        >
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </ScrollReveal>
      </section>

      <section
        className="py-20 bg-slate-50 border-y border-slate-200"
        id="persyaratan"
      >
        <ScrollReveal direction="up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Kriteria &amp; Berkas
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Persyaratan Mengikuti PKL
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                  <CheckCircle2
                    className="size-5 text-secondary"
                    aria-hidden="true"
                  />
                  Kriteria Peserta
                </h3>
                <ul className="space-y-4" aria-label="Daftar persyaratan PKL">
                  {persyaratan.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
                  <FileText
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  Berkas yang Diperlukan
                </h3>
                <ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  aria-label="Daftar berkas PKL"
                >
                  {dokumen.map(({ icon: Icon, label }, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <Icon
                        className="size-4 text-primary shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-700 font-medium">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs text-slate-500 mb-4">
                    Berkas dapat diserahkan langsung ke ruang BKI atau
                    dikirimkan melalui email resmi sekolah.
                  </p>
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Hubungi Tim Hubin
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 bg-white" id="faq">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                FAQ
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer select-none hover:bg-slate-50 transition-colors list-none">
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      {item.q}
                    </span>
                    <ChevronRight
                      className="size-5 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
