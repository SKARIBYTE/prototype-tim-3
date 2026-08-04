import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Kamu adalah asisten virtual resmi SMK PGRI 3 Malang. Jawab pertanyaan pengunjung dengan ramah, informatif, dan singkat dalam Bahasa Indonesia.

Informasi sekolah:
- Nama: SMK PGRI 3 Malang
- Alamat: Jl. Raya Tlogomas No.24, Tlogomas, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144
- Telepon: (0341) 551525

Departemen dan Jurusan:
1. Elektro: Teknik Elektronika dan Audio Video, Teknik Elektronika Industri, Teknik Kimia Industri, Teknik Pembangkit Tenaga Listrik
2. Otomotif: Teknik Sepeda Motor, Teknik Kendaraan Ringan, Teknik Body Otomotif
3. Pemesinan: Bisnis Digital dan Pemasaran, Teknik Pengelasan, Teknik Pemesinan
4. TIK: Animasi, Desain Komunikasi Visual, Broadcasting dan Perfilman, Teknik Komputer Jaringan, Rekayasa Perangkat Lunak

PPDB dibuka setiap tahun dengan jalur Reguler, Prestasi, dan Afirmasi.
Sekolah memiliki program BLUD (Teaching Factory) dan BKK (Bursa Kerja Khusus) untuk penempatan kerja alumni.

Jika ditanya di luar konteks sekolah, arahkan kembali ke topik SMK PGRI 3 Malang.
Jawab maksimal 3 kalimat kecuali perlu penjelasan detail.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { content: "Layanan chat sedang dalam konfigurasi. Silakan hubungi sekolah langsung di (0341) 551525." },
        { status: 200 }
      );
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10),
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const content =
      completion.choices[0]?.message?.content ||
      "Maaf, saya tidak dapat memproses permintaan saat ini.";

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json(
      { content: "Maaf, terjadi gangguan pada layanan. Silakan coba lagi." },
      { status: 200 }
    );
  }
}
