import type { Metadata } from "next";
import { bludProducts } from "@/data/mockData";
import { Phone, Mail, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "BLUD",
  description: "Produk dan layanan Teaching Factory (BLUD) SMK PGRI 3 Malang - hasil karya siswa berkualitas industri.",
};

export default function BludPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <section className="bg-slate-900 pt-32 pb-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Produk dan Layanan BLUD</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Produk dan layanan unggulan hasil Teaching Factory SMK PGRI 3 Malang dengan standar kualitas industri.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bludProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col ${
                index === 0 ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className={`object-cover ${index === 0 ? "md:w-1/2 h-64 md:h-auto" : "w-full aspect-video"}`}
              />
              <div className={`p-6 flex flex-col flex-1 ${index === 0 ? "md:w-1/2" : ""}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mb-2">
                      {product.department}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  </div>
                  <span className="text-primary font-semibold whitespace-nowrap">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 flex-1">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    {product.available ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Tersedia</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-600" />
                        <span className="text-sm text-red-600 font-medium">Kosong</span>
                      </>
                    )}
                  </div>
                  <Link
                    href="mailto:blud@smkpgri3-malang.sch.id"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Pemesanan Khusus</h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            Kami juga melayani pemesanan khusus sesuai kebutuhan instansi atau perusahaan Anda. Silakan hubungi tim marketing kami untuk penawaran terbaik.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+6281234567890"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Telepon Marketing
            </Link>
            <Link
              href="mailto:marketing@smkpgri3-malang.sch.id"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Marketing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
