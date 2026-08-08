"use client";

import { useState } from "react";

export default function ContactForms() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        <div className="p-8 sm:p-10 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Nama Lengkap / Instansi
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: Budi Santoso"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                placeholder="Cth: budi@email.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Keperluan
                </label>
                <div className="relative">
                  <select
                    id="type"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-900 appearance-none pr-10"
                  >
                    <option value="" disabled>
                      Pilih...
                    </option>
                    <option value="umum">Umum</option>
                    <option value="kunjungan">Kunjungan</option>
                    <option value="magang">Magang</option>
                    <option value="rekrutmen">Rekrutmen</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="Cth: Pendaftaran"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Pesan / Detail Keperluan
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-slate-900 placeholder:text-slate-400 resize-none"
                placeholder="Tuliskan pesan Anda secara detail..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 bg-primary hover:bg-primary-dark text-white text-base font-semibold rounded-xl active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    aria-hidden="true"
                  />
                ) : success ? (
                  "Pesan Terkirim!"
                ) : (
                  "Kirim Pesan"
                )}
              </button>
              {success && (
                <p
                  className="text-sm text-green-600 text-center mt-3 font-medium"
                  role="alert"
                >
                  Terima kasih! Kami akan segera menghubungi Anda.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
