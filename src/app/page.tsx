import Link from 'next/link';
import { LayoutDashboard, Download, Users, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-unsil-500 selection:text-white">
      <Navbar /> {/* Panggil Navbar */}

      {/* HERO SECTION (Konten Utama Tetap Ada Disini) */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-wide mb-8">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-unsil-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-unsil-500"></span>
                    </span>
                    Pendaftaran KKN Periode 2026 Telah Dibuka
                </div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Mengabdi untuk Negeri, <br className="hidden md:block"/>
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-unsil-600 to-orange-500">Terintegrasi Digital.</span>
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-unsil-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                    </span>
                </h1>

                <p className="text-lg lg:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Platform resmi manajemen Kuliah Kerja Nyata Universitas Siliwangi. 
                    Mulai dari pendaftaran, plotting kelompok, hingga pelaporan dalam satu ekosistem SaaS.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="/dashboard" className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-base shadow-xl hover:shadow-2xl hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                        <LayoutDashboard className="w-5 h-5" />
                        Masuk Dashboard
                    </Link>
                    <Link href="/alur" className="px-8 py-4 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold text-base shadow-sm hover:border-unsil-500 hover:text-unsil-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Panduan & Jadwal
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-slate-100 w-full">
                    <div><p className="text-3xl font-black text-slate-900">3.5k+</p><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Mahasiswa</p></div>
                    <div><p className="text-3xl font-black text-slate-900">120</p><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Desa Mitra</p></div>
                    <div><p className="text-3xl font-black text-slate-900">100%</p><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Digital</p></div>
                    <div><p className="text-3xl font-black text-slate-900">24/7</p><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Support</p></div>
                </div>
            </div>

            <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-slate-50/50 p-2 shadow-2xl backdrop-blur-sm lg:rounded-3xl lg:p-4">
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                   <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                      <div className="flex gap-1.5">
                         <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                         <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                         <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                      </div>
                      <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md bg-white text-[10px] text-slate-400 shadow-sm font-mono border border-slate-100">sim.unsil.ac.id/dashboard</div>
                   </div>
                   <div className="p-8 grid grid-cols-12 gap-6 bg-slate-50/30">
                      <div className="hidden md:block col-span-3 space-y-3">
                         <div className="h-8 w-full rounded-lg bg-slate-200/50 animate-pulse"></div>
                         <div className="h-8 w-3/4 rounded-lg bg-slate-200/50 animate-pulse"></div>
                         <div className="h-8 w-5/6 rounded-lg bg-slate-200/50 animate-pulse"></div>
                      </div>
                      <div className="col-span-12 md:col-span-9 space-y-6">
                         <div className="grid grid-cols-3 gap-4">
                            <div className="h-24 rounded-xl bg-white border border-slate-100 shadow-sm p-4"><div className="h-8 w-8 rounded-full bg-unsil-100 mb-2"></div><div className="h-4 w-12 rounded bg-slate-100"></div></div>
                            <div className="h-24 rounded-xl bg-white border border-slate-100 shadow-sm p-4"><div className="h-8 w-8 rounded-full bg-blue-100 mb-2"></div><div className="h-4 w-12 rounded bg-slate-100"></div></div>
                            <div className="h-24 rounded-xl bg-white border border-slate-100 shadow-sm p-4"><div className="h-8 w-8 rounded-full bg-green-100 mb-2"></div><div className="h-4 w-12 rounded bg-slate-100"></div></div>
                         </div>
                         <div className="h-64 rounded-xl bg-white border border-slate-100 shadow-sm flex items-end justify-center p-6 gap-4">
                             <div className="w-full bg-slate-100 rounded-t-lg h-[40%]"></div>
                             <div className="w-full bg-slate-100 rounded-t-lg h-[70%]"></div>
                             <div className="w-full bg-unsil-500 rounded-t-lg h-[50%] shadow-lg shadow-unsil-500/30"></div>
                             <div className="w-full bg-slate-100 rounded-t-lg h-[80%]"></div>
                             <div className="w-full bg-slate-100 rounded-t-lg h-[60%]"></div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
         </div>
      </header>

      <Footer /> {/* Panggil Footer */}
    </main>
  );
}