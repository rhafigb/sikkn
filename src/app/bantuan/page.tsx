'use client';

import { ChevronDown, ChevronUp, Mail, Phone, MapPin, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BantuanPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Apakah saya bisa mendaftar KKN jika SKS belum mencukupi?", a: "Tidak bisa. Sistem akan secara otomatis memvalidasi jumlah SKS yang telah Anda tempuh (minimal 100 SKS). Jika belum mencukupi, menu pendaftaran akan terkunci." },
    { q: "Bagaimana cara memilih teman sekelompok?", a: "Plotting kelompok dilakukan secara otomatis oleh sistem berdasarkan algoritma pemerataan prodi dan jenis kelamin. Namun, Anda dapat mengajukan 'Request Teman' khusus jika memiliki alasan medis atau urgensi tertentu melalui surat ke LPPM." },
    { q: "Apakah logbook harus diisi setiap hari?", a: "Ya, Logbook wajib diisi harian. Dosen Pembimbing Lapangan (DPL) akan memvalidasi logbook Anda setiap minggu. Keterlambatan pengisian lebih dari 3 hari akan menutup akses input tanggal tersebut." },
    { q: "Apa yang harus dilakukan jika lupa password akun?", a: "Anda dapat menggunakan fitur 'Lupa Kata Sandi' di halaman login. Tautan reset akan dikirimkan ke email mahasiswa (@student.unsil.ac.id) Anda." },
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-unsil-500 selection:text-white">
      <Navbar />

      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6 border border-red-100">Pusat Bantuan</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Kami Siap <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">Membantu.</span></h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Temukan jawaban cepat atau hubungi tim Helpdesk kami untuk kendala teknis.</p>
        </div>
      </header>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-unsil-200 transition-colors">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4"><Mail className="w-5 h-5" /></div>
                    <h3 className="font-bold text-slate-900 mb-1">Email Support</h3>
                    <p className="text-slate-500 text-sm mb-4">Untuk kendala akun dan administrasi.</p>
                    <a href="mailto:helpdesk@unsil.ac.id" className="text-sm font-bold text-blue-600 hover:underline">helpdesk@unsil.ac.id</a>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-unsil-200 transition-colors">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4"><Phone className="w-5 h-5" /></div>
                    <h3 className="font-bold text-slate-900 mb-1">WhatsApp Center</h3>
                    <p className="text-slate-500 text-sm mb-4">Senin - Jumat (08.00 - 16.00 WIB)</p>
                    <a href="#" className="text-sm font-bold text-green-600 hover:underline">+62 812-3456-7890</a>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="font-bold text-lg mb-2">Panduan Video</h4>
                        <p className="text-slate-400 text-sm mb-4">Tutorial langkah demi langkah penggunaan SIM-KKN.</p>
                        <button className="px-4 py-2 bg-white text-slate-900 text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-slate-100 transition-colors"><PlayCircle className="w-4 h-4" /> Tonton Video</button>
                    </div>
                </div>
            </div>

            {/* Right Column: FAQ */}
            <div className="lg:col-span-7">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Pertanyaan Umum</h3>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                            <button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors">
                                <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
                                {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-unsil-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                            </button>
                            <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}