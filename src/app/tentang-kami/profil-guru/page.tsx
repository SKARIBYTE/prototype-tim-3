import type { Metadata } from "next";
import { TeacherCarousel } from "@/components/TeacherCarousel";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Profil Guru | SMK PGRI 3 Malang",
  description: "Daftar tenaga pendidik profesional dan staf akademik SMK PGRI 3 Malang.",
};

const TEAMS = [
  {
    group: "Teknik Komputer dan Informatika",
    accent: "from-blue-600 to-indigo-700",
    members: [
      { name: "Antiko Effendi", role: "Tenaga Kependidikan : Toolman", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&q=80" },
      { name: "Chrisnanto, S. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80" },
      { name: "Decy Permatasari, S.Sn", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&q=80" },
      { name: "Desi Arisanti, M. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop&q=80" },
      { name: "Dwi Slamet Santoso, SS, M.Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&q=80" },
      { name: "Eko Mulyanto, S.Pd", role: "Tenaga Pendidik : Kepala Bengkel", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&q=80" },
      { name: "Eko Purwanto, S. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80" },
      { name: "Erna Susilowati, S.Pd.", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80" },
      { name: "Febriana Fathonah, S. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&q=80" },
    ],
  },
  {
    group: "Teknik Elektronika",
    accent: "from-orange-500 to-amber-600",
    members: [
      { name: "Dwi Retnosari, M. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&q=80" },
      { name: "Ervina Rufiana Wati, S.Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&q=80" },
      { name: "Fikri Dio Zakaria, ST", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&h=800&fit=crop&q=80" },
      { name: "Hendra Yudhi Nugraha, ST", role: "Tenaga Pendidik", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=800&fit=crop&q=80" },
      { name: "John Perrys Leggie, S. PAK", role: "Tenaga Pendidik", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&h=800&fit=crop&q=80" },
      { name: "Kurnia Larasati, S. Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&h=800&fit=crop&q=80" },
      { name: "Maulana Nur Antoro Putro, M.Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&q=80" },
      { name: "Mohammad Muzakki, S.Pd", role: "Tenaga Pendidik : Guru Wali", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&h=800&fit=crop&q=80" },
      { name: "Mohammad Nurullah, ST", role: "Tenaga Pendidik : Kepala Bidang Keahlian", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&h=800&fit=crop&q=80" },
    ],
  },
];

export default function ProfilGuruPage() {
  return (
    <main className="bg-slate-50 pb-32">
      <PageHero
        title="Profil Guru"
        subtitle="Daftar tenaga pendidik profesional dan staf akademik SMK PGRI 3 Malang."
        imageSrc="https://picsum.photos/seed/skariga-profil-guru/1920/1080"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {TEAMS.map((team, idx) => (
          <section key={idx} id={`kelompok-${idx + 1}`}>
            <div className="mb-12 flex flex-col items-center text-center gap-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {team.group}
              </h2>
              <p className="text-slate-500 text-sm">{team.members.length} tenaga pendidik</p>
              <div className={`h-0.5 w-16 rounded-full bg-gradient-to-r ${team.accent}`} />
            </div>

            <TeacherCarousel members={team.members} />
          </section>
        ))}
      </div>
    </main>
  );
}
