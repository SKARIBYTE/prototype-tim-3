import { Metadata } from "next";
import Link from "next/link";
import { Check, FileText } from "lucide-react";
import { ppdbTimeline, ppdbTracks } from "@/data";

export const metadata: Metadata = {
  title: "PPDB",
  description: "Informasi Penerimaan Peserta Didik Baru (PPDB) SMK PGRI 3 Malang - Jalur Reguler, Prestasi, dan Afirmasi.",
};

export default function PPDBPage() {
  const documents = [
    "Ijazah atau Surat Keterangan Lulus (SKL) SMP/MTs sederajat",
    "Rapor SMP/MTs semester 1 sampai 5",
    "Kartu Keluarga dan Akta Kelahiran",
    "Pas foto berwarna 3x4 (4 lembar) dengan latar merah",
    "Surat Keterangan Sehat dari dokter atau puskesmas",
    "Sertifikat prestasi (khusus pendaftar Jalur Prestasi)",
    "Kartu KIP/PKH/KKS (khusus pendaftar Jalur Afirmasi)",
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Penerimaan Peserta Didik Baru</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Informasi lengkap pendaftaran dan seleksi penerimaan siswa baru SMK PGRI 3 Malang tahun ajaran 2025/2026.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Jadwal Pelaksanaan</h2>
            <p className="text-lg text-slate-600">Alur dan jadwal kegiatan PPDB tahun ini.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-0">
              {ppdbTimeline.map((item, index) => {
                const isSelesai = item.status === "Selesai";
                const isBerlangsung = item.status === "Berlangsung";
                const isLast = index === ppdbTimeline.length - 1;

                return (
                  <div key={item.id} className="flex gap-4 md:gap-6">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-bold border-2 ${
                        isSelesai ? "bg-green-100 border-green-500 text-green-700" :
                        isBerlangsung ? "bg-primary border-primary text-white" :
                        "bg-slate-100 border-slate-300 text-slate-500"
                      }`}>
                        {item.step}
                      </div>
                      {!isLast && (
                        <div className="border-l-2 border-slate-200 h-full mt-2 mb-2"></div>
                      )}
                    </div>
                    
                    <div className="pb-10 w-full">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-slate-500">{item.dateRange}</span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            isSelesai ? "bg-green-100 text-green-700" :
                            isBerlangsung ? "bg-primary/10 text-primary" :
                            "bg-slate-100 text-slate-500"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Jalur Pendaftaran</h2>
            <p className="text-lg text-slate-600">Pilih jalur pendaftaran yang sesuai dengan kondisi dan kualifikasi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ppdbTracks.map((track) => {
              const isPrimary = track.name.includes("Reguler");
              
              return (
                <div 
                  key={track.id} 
                  className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 ${
                    isPrimary ? "border-primary" : "border-slate-100"
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{track.name}</h3>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        Kuota: {track.quota} Siswa
                      </span>
                    </div>
                    <p className="text-slate-600 mb-6 min-h-12">{track.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">Persyaratan Khusus:</h4>
                      <ul className="space-y-3">
                        {track.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Dokumen Persyaratan Umum</h2>
              <p className="text-lg text-slate-600">Siapkan dokumen berkas berikut untuk pendaftaran semua jalur.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <FileText className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Siap Menjadi Bagian dari Kami?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-slate-100">
            Pendaftaran online telah dibuka. Segera daftarkan diri dan ikuti proses seleksinya.
          </p>
          <Link 
            href="#" 
            className="inline-block bg-white text-primary hover:bg-slate-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-sm"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </main>
  );
}
