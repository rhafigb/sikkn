import Link from 'next/link';
import { LayoutGrid, FileCheck2, MapPin, BarChart3, ShieldCheck, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FiturPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-unsil-500 selection:text-white">
      <Navbar />
      
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">Teknologi Terkini</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Ekosistem Digital <span className="text-transparent bg-clip-text bg-linear-to-r from-unsil-600 to-orange-500">Terpadu.</span></h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">Kami membangun teknologi yang memudahkan koordinasi antara Mahasiswa, Dosen, dan LPPM dalam satu platform yang mulus.</p>
        </div>
      </header>

      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { icon: LayoutGrid, color: 'text-blue-600', bg: 'bg-blue-50', title: 'Smart Plotting', desc: 'Algoritma cerdas untuk pembagian kelompok yang seimbang antar prodi dan gender.' },
                { icon: FileCheck2, color: 'text-unsil-600', bg: 'bg-unsil-50', title: 'Logbook Digital', desc: 'Pencatatan kegiatan harian berbasis cloud. Validasi real-time oleh Dosen Pembimbing.' },
                { icon: MapPin, color: 'text-green-600', bg: 'bg-green-50', title: 'Geotagging Absensi', desc: 'Sistem absensi berbasis lokasi GPS untuk memastikan kehadiran di lokasi pengabdian.' },
                { icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50', title: 'Monitoring Dashboard', desc: 'Pantau progres program kerja seluruh desa melalui grafik analitik yang intuitif.' },
                { icon: ShieldCheck, color: 'text-red-600', bg: 'bg-red-50', title: 'Nilai Transparan', desc: 'Kalkulasi nilai otomatis dari komponen etika, proker, dan laporan akhir.' },
                { icon: Smartphone, color: 'text-orange-600', bg: 'bg-orange-50', title: 'Mobile Friendly', desc: 'Akses seluruh fitur melalui smartphone tanpa perlu install aplikasi tambahan.' },
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-unsil-200 transition-all duration-300 group">
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Siap mencoba fitur-fitur ini?</h2>
            <div className="flex justify-center gap-4">
                <Link href="/register" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">Daftar Sekarang</Link>
                <Link href="/login" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-white hover:border-slate-300 transition-colors">Masuk Sistem</Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}