"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Variants Ultra-Smooth berbasis Spring Physics & Soft Blur
const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(6px)"
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 65,
            damping: 16,
            mass: 0.8,
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.05,
        },
    },
};

const stats = [
    { label: "Siswa Aktif", value: "1.800+", desc: "Generasi unggul & berbakat" },
    { label: "Tenaga Pendidik", value: "120+", desc: "Pengajar profesional" },
    { label: "Program Keahlian", value: "6", desc: "Jurusan berstandar industri" },
    { label: "Prestasi Diraih", value: "200+", desc: "Tingkat daerah & nasional" },
];

const coreValues = [
    {
        title: "Kedisiplinan & Karakter",
        desc: "Membentuk pembiasaan karakter kerja industri dan integritas tinggi sejak dini.",
    },
    {
        title: "Inovasi & Teknologi",
        desc: "Pembelajaran berbasis praktik langsung menggunakan perangkat dan standar DUDI modern.",
    },
    {
        title: "Kemitraan Industri",
        desc: "Peluang kerja luas lewat jaringan kerja sama industri aktif dan Bursa Kerja Khusus (BKK).",
    },
];

const historyMilestones = [
    {
        year: "1988",
        title: "Pendirian Sekolah",
        desc: "Berdiri di bawah naungan Yayasan Pembina Lembaga Pendidikan (YPLP) PGRI.",
    },
    {
        year: "2010",
        title: "Pengembangan Kurikulum Industri",
        desc: "Mulai menjalin kemitraan strategis dengan DUDI berskala nasional.",
    },
    {
        year: "2020",
        title: "SMK Pusat Keunggulan",
        desc: "Terpilih sebagai SMK PK dengan pembaharuan sarana digital & teknologi modern.",
    },
];

const certifications = [
    { name: "Akreditasi A (Unggul)", detail: "BAN-S/M Resmi" },
    { name: "LSP-P1 BNSP", detail: "Lisensi Sertifikasi Profesi" },
    { name: "BKK Aktif", detail: "Bursa Kerja Khusus DUDI" },
];

export default function ProfileContent() {

    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 overflow-hidden bg-white">
            {/* 1. TENTANG SEKOLAH / PROFIL OVERVIEW */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="relative bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm transition-all duration-300"
            >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl">
                        <Image
                            src="/assets/images/gedung.png"
                            alt="Gedung SMK PGRI 3 Malang"
                            width={600}
                            height={400}
                            className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                            <span className="text-xs font-semibold text-slate-800">
                                Gedung Utama & Lingkungan Belajar
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-primary" /> Profile Overview
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                            Membangun Generasi Siap Kerja & Berdaya Saing Global
                        </h2>

                        <p className="text-slate-600 leading-relaxed text-base">
                            SMK PGRI 3 Malang merupakan sekolah kejuruan terkemuka yang berkomitmen menghadirkan pendidikan vokasi berkualitas tinggi. Kami membentuk lulusan yang tidak hanya unggul secara akademis dan teknis, tetapi juga memiliki integritas karakter serta kesiapan adaptasi di dunia kerja maupun jenjang perguruan tinggi.
                        </p>

                        <div className="pt-2 text-sm font-semibold text-primary">
                            <span>Berkomitmen dalam Inovasi & Tradisi Keunggulan</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. VISI & MISI */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-6"
            >
                <motion.div
                    variants={fadeUp}
                    className="relative group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Visi Utama</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">Visi Sekolah</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Menjadi SMK unggul yang menghasilkan lulusan profesional, berkarakter mulia, inovatif, serta berdaya saing tinggi di era industri global.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    className="relative group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300"
                >
                    <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Misi Kami</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">Misi Utama</h3>
                    <ul className="space-y-2.5 text-slate-600">
                        {[
                            "Meningkatkan kualitas pembelajaran berbasis teknologi & praktek.",
                            "Memperkuat jejaring kerja sama dengan dunia industri relevan.",
                            "Mengembangkan pendidikan karakter dan kedisiplinan peserta didik.",
                            "Mendorong inovasi serta jiwa kewirausahaan (entrepreneurship).",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                                <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>

            {/* 3. SEJARAH & MILESTONE */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8"
            >
                <motion.div variants={fadeUp} className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">Jejak Langkah & Sejarah</h3>
                    <p className="text-xs text-slate-500">Perjalanan pengembangan SMK PGRI 3 Malang</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 relative">
                    {historyMilestones.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="relative bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <span className="text-xs font-extrabold text-primary bg-blue-50 px-3 py-1 rounded-full">
                                {item.year}
                            </span>
                            <h4 className="font-bold text-slate-900 text-base pt-2">{item.title}</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 4. NILAI UTAMA / CORE VALUES */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
            >
                <motion.div variants={fadeUp} className="text-center max-w-xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary bg-blue-50 px-3 py-1 rounded-full">
                        Budaya Sekolah
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-2">Pilar Utama Pendidikan Kami</h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {coreValues.map((val, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -4 }}
                            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
                        >
                            <h4 className="font-bold text-slate-900 text-lg mb-2">{val.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* 5. STATISTIK */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
                {stats.map((s) => (
                    <motion.div
                        key={s.label}
                        variants={fadeUp}
                        style={{ willChange: "transform, opacity, filter" }}
                        whileHover={{ y: -4 }}
                        className="relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
                    >
                        {/* ELEMEN GARIS DI SINI SUDAH DIHAPUS */}

                        <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                            {s.value}
                        </h4>
                        <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                        <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <motion.div variants={fadeUp} className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold border border-slate-700">
                        Standar Mutu Pendidikan
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Terakreditasi & Tersertifikasi Resmi</h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                        Lulusan dibekali ijazah dan sertifikat kompetensi yang diakui oleh dunia usaha dan industri nasional.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-3 gap-3 w-full md:w-auto">
                    {certifications.map((c, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="bg-slate-800 border border-slate-700 p-4 rounded-2xl text-center space-y-1"
                        >
                            <h4 className="font-bold text-xs text-slate-100">{c.name}</h4>
                            <p className="text-[10px] text-slate-400">{c.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}