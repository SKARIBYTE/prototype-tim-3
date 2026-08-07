"use client";

import { useState } from "react";

export default function ContactForms() {
  const [loading1, setLoading1] = useState(false);
  const [success1, setSuccess1] = useState(false);
  
  const [loading2, setLoading2] = useState(false);
  const [success2, setSuccess2] = useState(false);

  const handleSubmit1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading1(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading1(false);
    setSuccess1(true);
    setTimeout(() => setSuccess1(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading2(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading2(false);
    setSuccess2(true);
    setTimeout(() => setSuccess2(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Pertanyaan Umum</h2>
            <p className="text-slate-500 text-sm">Punya pertanyaan seputar sekolah atau PPDB? Kirim pesan ke kami.</p>
          </div>

          <form onSubmit={handleSubmit1} className="space-y-6">
            <div>
              <label htmlFor="name-1" className="block text-sm font-medium text-slate-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name-1"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: Budi Santoso"
              />
            </div>

            <div>
              <label htmlFor="email-1" className="block text-sm font-medium text-slate-700 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                id="email-1"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: budi.santoso@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject-1" className="block text-sm font-medium text-slate-700 mb-1">
                Subjek
              </label>
              <input
                type="text"
                id="subject-1"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: Informasi Pendaftaran Siswa Baru"
              />
            </div>

            <div>
              <label htmlFor="message-1" className="block text-sm font-medium text-slate-700 mb-1">
                Pesan
              </label>
              <textarea
                id="message-1"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                placeholder="Jelaskan pertanyaan, keluhan, atau pesan Anda secara detail..."
              />
            </div>

            <button
              type="submit"
              disabled={loading1}
              className="w-full py-3.5 px-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading1 ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
              ) : success1 ? (
                "Pesan Terkirim!"
              ) : (
                "Kirim Pesan"
              )}
            </button>
            {success1 && <p className="text-sm text-green-600 text-center mt-2" role="alert">Terima kasih. Kami akan segera menghubungi Anda.</p>}
          </form>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Kerjasama & Instansi</h2>
            <p className="text-slate-500 text-sm">Untuk keperluan magang, kunjungan industri, atau kemitraan.</p>
          </div>

          <form onSubmit={handleSubmit2} className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                Nama Instansi/Perusahaan
              </label>
              <input
                type="text"
                id="company"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: PT Teknologi Inovasi / Universitas XYZ"
              />
            </div>

            <div>
              <label htmlFor="email-2" className="block text-sm font-medium text-slate-700 mb-1">
                Email Perwakilan
              </label>
              <input
                type="email"
                id="email-2"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: hrd@perusahaan.com"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">
                Jenis Keperluan
              </label>
              <div className="relative">
                <select
                  id="type"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-all text-slate-900 appearance-none pr-10"
                >
                  <option value="" disabled>Pilih jenis keperluan</option>
                  <option value="kunjungan">Kunjungan Industri</option>
                  <option value="magang">Prakerin / Magang</option>
                  <option value="rekrutmen">Rekrutmen Lulusan</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message-2" className="block text-sm font-medium text-slate-700 mb-1">
                Detail Keperluan
              </label>
              <textarea
                id="message-2"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                placeholder="Deskripsikan tujuan kunjungan, jadwal, atau detail program magang..."
              />
            </div>

            <button
              type="submit"
              disabled={loading2}
              className="w-full py-3.5 px-4 bg-secondary text-white font-medium rounded-xl hover:bg-secondary/90 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading2 ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
              ) : success2 ? (
                "Pengajuan Terkirim!"
              ) : (
                "Kirim Pengajuan"
              )}
            </button>
            {success2 && <p className="text-sm text-green-600 text-center mt-2" role="alert">Pengajuan diterima. Tim kami akan merespons melalui email.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
