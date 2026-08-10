import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Timeline } from "@/components/ui/timeline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Car,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  MapPin,
  AlertTriangle,
  Star,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tes Mengemudi | SMK PGRI 3 Malang",
  description:
    "Program pelatihan dan ujian sertifikasi mengemudi resmi SMK PGRI 3 Malang. Siswa mendapatkan bekal kompetensi mengemudi yang aman, tertib, dan bersertifikat.",
};

const materiItems = [
  {
    icon: BookOpen,
    title: "Peraturan Lalu Lintas",
    desc: "Pemahaman UU LLAJ, rambu-rambu, marka jalan.",
  },
  {
    icon: ShieldCheck,
    title: "Keselamatan Berkendara",
    desc: "Defensif driving dan prosedur keselamatan.",
  },
  {
    icon: Car,
    title: "Pengendalian Kendaraan",
    desc: "Teknik kopling, rem, kemudi, bermanuver.",
  },
  {
    icon: Target,
    title: "Etika & Disiplin",
    desc: "Menghargai pengguna jalan & anti-arogan.",
  },
  {
    icon: AlertTriangle,
    title: "Penanganan Darurat",
    desc: "Tindakan preventif & kuratif saat insiden.",
  },
  {
    icon: Star,
    title: "Persiapan Ujian SIM",
    desc: "Simulasi teori & praktik standar Polri.",
  },
];

const alurProgram = [
  { step: "01", title: "Teori & Regulasi", desc: "Pemahaman dasar." },
  { step: "02", title: "Latihan Tertutup", desc: "Praktik di area aman." },
  {
    step: "03",
    title: "Jalan Raya",
    desc: "Terjun langsung ke lalu lintas kota.",
  },
  { step: "04", title: "Ujian Akhir", desc: "SIM A resmi oleh penguji." },
];

export default function Page() {
  const mapData = [
    {
      title: "Titik Awal",
      content: (
        <div key="titik-awal" className="space-y-8">
          <ScrollReveal direction="up" duration={0.4}>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-widest mb-4">
                Tentang Program
              </span>
              <h2 className="text-4xl sm:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
                Mulai Perjalanan Menjadi
                <span className="block text-primary">Pengemudi Handal</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-6">
                Bukan sekadar bisa menyetir, kami mencetak pengemudi yang
                disiplin dan sadar keselamatan. Didampingi instruktur
                bersertifikat dengan kendaraan standar ganda.
              </p>
            </div>
          </ScrollReveal>
        </div>
      ),
    },
    {
      title: "Kurikulum",
      content: (
        <ScrollReveal key="kurikulum" direction="up" duration={0.4}>
          <div className="space-y-6">
            <h3 className="text-3xl font-medium text-slate-900 flex items-center gap-3">
              <MapPin className="size-6 text-primary" aria-hidden="true" />
              Bekal di Jalan Raya
            </h3>
            <p className="text-slate-600 text-lg mb-6">
              Materi disusun sistematis menyerupai rambu dan rute yang harus
              dilewati sebelum lulus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materiItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={i}
                    direction="up"
                    duration={0.4}
                    delay={i * 0.05}
                  >
                    <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all overflow-hidden h-full">
                      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-slate-100 group-hover:bg-primary/20 transition-colors -z-10" />

                      <div className="flex flex-col gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center border-4 border-white shadow-sm transition-colors">
                          <Icon
                            className="size-4 text-slate-500 group-hover:text-primary transition-colors"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 text-base mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      ),
    },
    {
      title: "Garis Finish",
      content: (
        <ScrollReveal key="garis-finish" direction="up" duration={0.4}>
          <div className="bg-secondary text-white rounded-3xl p-8 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <h3 className="text-3xl font-medium mb-2 flex items-center gap-3 relative z-10">
              Rute Pelatihan
            </h3>
            <p className="text-white/80 text-base mb-8 relative z-10">
              Lewati 4 pos pemeriksaan untuk meraih SIM A.
            </p>

            <div className="space-y-4 relative z-10">
              {alurProgram.map((alur, i) => (
                <ScrollReveal
                  key={i}
                  direction="up"
                  duration={0.4}
                  delay={i * 0.1}
                >
                  <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-medium text-white">
                        {alur.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-lg">
                        {alur.title}
                      </h4>
                      <p className="text-white/70 text-sm">{alur.desc}</p>
                    </div>
                    {i < alurProgram.length - 1 && (
                      <ChevronRight
                        className="size-5 text-white/20 ml-auto"
                        aria-hidden="true"
                      />
                    )}
                    {i === alurProgram.length - 1 && (
                      <CheckCircle2
                        className="size-5 text-white ml-auto"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      ),
    },
  ];

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900">
      <PageHero
        title="Tes Mengemudi"
        subtitle="Program pelatihan dan ujian sertifikasi mengemudi. Siap mengaspal dengan aman, tertib, dan percaya diri."
        imageSrc="https://picsum.photos/seed/tes-mengemudi/1920/1080"
      />

      <Timeline data={mapData} />
    </main>
  );
}
