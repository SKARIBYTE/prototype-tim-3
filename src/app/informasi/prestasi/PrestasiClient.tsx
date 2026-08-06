'use client';

import dynamic from 'next/dynamic';
import FeaturedAchievement from '@/components/FeaturedAchievement';
import TicketCTA from '@/components/TicketCTA';
import MobilePrestasiReel from '@/components/MobilePrestasiReel';

const Masonry = dynamic(() => import('@/components/Masonry'), { ssr: false });

const prestasiItems = [
  { 
    id: '1',  
    img: '/assets/images/prestasi-1.svg',  
    url: '#', 
    height: 600,
    title: 'Juara 1 Lomba Web Design Nasional',
    excerpt: 'Siswa SMK PGRI 3 Malang berhasil meraih juara 1 pada ajang Web Design tingkat nasional tahun 2026.',
    category: 'Akademik',
    date: '12 Mei 2026'
  },
  { 
    id: '2',  
    img: '/assets/images/prestasi-2.svg',  
    url: '#', 
    height: 500,
    title: 'Medali Emas Kejuaraan Pencak Silat',
    excerpt: 'Prestasi gemilang diraih dalam kejuaraan pencak silat antar pelajar se-Jawa Timur.',
    category: 'Non-Akademik',
    date: '28 Apr 2026'
  },
  { 
    id: '3',  
    img: '/assets/images/prestasi-3.svg',  
    url: '#', 
    height: 700,
    title: 'Penghargaan Sekolah Adiwiyata',
    excerpt: 'SMK PGRI 3 Malang kembali menerima penghargaan sebagai sekolah Adiwiyata Mandiri.',
    category: 'Penghargaan',
    date: '10 Apr 2026'
  },
  { 
    id: '4',  
    img: '/assets/images/prestasi-4.svg',  
    url: '#', 
    height: 550,
    title: 'Juara 2 LKS Robotika Provinsi',
    excerpt: 'Tim Robotika membuktikan kemampuannya dengan meraih juara 2 LKS tingkat provinsi.',
    category: 'Akademik',
    date: '05 Mar 2026'
  },
  { 
    id: '5',  
    img: '/assets/images/prestasi-5.svg',  
    url: '#', 
    height: 650,
    title: 'Peringkat 1 Lomba Cipta Puisi',
    excerpt: 'Bakat sastra siswa diakui dengan perolehan peringkat 1 lomba cipta puisi nasional.',
    category: 'Non-Akademik',
    date: '18 Feb 2026'
  },
  { 
    id: '6',  
    img: '/assets/images/prestasi-6.svg',  
    url: '#', 
    height: 480,
    title: 'Juara 3 Turnamen Futsal Pelajar',
    excerpt: 'Tim futsal SMK PGRI 3 Malang menempati posisi ketiga pada turnamen walikota cup.',
    category: 'Olahraga',
    date: '22 Jan 2026'
  },
  { 
    id: '7',  
    img: '/assets/images/prestasi-7.svg',  
    url: '#', 
    height: 620,
    title: 'Penghargaan Inovasi Teknologi',
    excerpt: 'Karya inovasi siswa jurusan RPL mendapat penghargaan dari kementerian.',
    category: 'Penghargaan',
    date: '15 Des 2025'
  },
  { 
    id: '8',  
    img: '/assets/images/prestasi-8.svg',  
    url: '#', 
    height: 540,
    title: 'Medali Perak Olimpiade Matematika',
    excerpt: 'Prestasi membanggakan dari perwakilan sekolah di ajang olimpiade matematika.',
    category: 'Akademik',
    date: '03 Nov 2025'
  },
  { 
    id: '9',  
    img: '/assets/images/prestasi-9.svg',  
    url: '#', 
    height: 580,
    title: 'Juara Umum Lomba Keterampilan Pramuka',
    excerpt: 'Gudep SMK PGRI 3 Malang berhasil menjadi juara umum kemah bakti pelajar.',
    category: 'Non-Akademik',
    date: '14 Okt 2025'
  },
  { 
    id: '10', 
    img: '/assets/images/prestasi-10.svg', 
    url: '#', 
    height: 660,
    title: 'Terbaik Lomba Film Pendek Edukasi',
    excerpt: 'Karya sineas muda sekolah meraih predikat film pendek edukasi terbaik.',
    category: 'Kesenian',
    date: '27 Sep 2025'
  },
  { 
    id: '11', 
    img: '/assets/images/prestasi-11.svg', 
    url: '#', 
    height: 510,
    title: 'Juara 1 Lomba Debat Bahasa Inggris',
    excerpt: 'Tim debat bahasa Inggris mengalahkan puluhan sekolah di kompetisi tahunan.',
    category: 'Akademik',
    date: '08 Sep 2025'
  },
];

export default function PrestasiClient() {
  return (
    <>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <div className="hidden md:block">
          <Masonry
            items={prestasiItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
        
                <div className="block md:hidden">
          <MobilePrestasiReel items={prestasiItems} />
        </div>
      </section>
      <FeaturedAchievement />
      <TicketCTA />
    </>
  );
}
