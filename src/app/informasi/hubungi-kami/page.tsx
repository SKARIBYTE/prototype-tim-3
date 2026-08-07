import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForms from "@/components/ContactForms";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Informasi kontak dan lokasi SMK PGRI 3 Malang.",
};

export default function Page() {
  return (
    <main>
    <div className="bg-white">
      <PageHero
        title="Hubungi Kami"
        subtitle="Punya pertanyaan atau ingin menjalin kemitraan dengan kami? Silakan hubungi SMK PGRI 3 Malang melalui salah satu form di bawah ini."
        imageSrc="https://picsum.photos/seed/skariga-hubungi-kami/1920/1080"
      />
      </div>

      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <ContactForms />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <hr className="border-t border-slate-200 mb-12" />
        <div className="mb-8">
          <h2 className="text-4xl font-normal tracking-tight text-slate-900">Lokasi Sekolah</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-sm overflow-hidden shadow-sm border border-slate-200 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.6898709420902!2d112.59936987594892!3d-7.927424392096334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78821eaa6b3655%3A0x3cd0ba7cc35c7b6d!2sSMK%20PGRI%203%20Malang!5e0!3m2!1sid!2sid!4v1786071704570!5m2!1sid!2sid"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
            <div className="rounded-sm overflow-hidden shadow-sm border border-slate-200 h-[300px]">
              <img
                src="/assets/images/foto-depanparkir.webp"
                alt="Kampus SMK PGRI 3 Malang"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col pt-2 lg:pt-0">
            <hr className="border-t-[1.5px] border-slate-900 mb-6" />
            
            <div className="mb-8">
              <h3 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
                MEDIA SOSIAL
              </h3>
              <div className="flex flex-wrap gap-3 lg:gap-4 text-slate-800 text-base lg:text-lg font-medium leading-snug">
                <a href="https://youtube.com/@smkpgri3malang945?si=14bm6hNHNPfzBuEF" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                  YouTube
                </a>
                <a href="https://www.instagram.com/skariga_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/SKARIGA" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                  Facebook
                </a>
                <a href="https://www.tiktok.com/@skariga?is_from_webapp=1&sender_device=pc" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                  TikTok
                </a>
              </div>
            </div>

            <hr className="border-t-[1.5px] border-slate-900 mb-6" />

            <div>
              <h3 className="text-primary font-medium tracking-wide uppercase text-sm mb-3">
                KONTAK
              </h3>
              <div className="text-slate-800 text-lg lg:text-xl font-medium leading-snug space-y-4">
                <p>
                  SMK PGRI 3 Malang<br />
                  Jl. Raya Tlogomas No.29<br />
                  Malang, Jawa Timur 65144
                </p>
                <div className="flex flex-col items-start space-y-2">
                  <a href="tel:0341554383" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                    (0341) 554383
                  </a>
                  <a href="mailto:info@smkpgri3-malang.sch.id" className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-2px] after:left-0 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 transition-colors">
                    info@smkpgri3-malang.sch.id
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
