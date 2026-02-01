import { UserPlus, UsersRound, Tent, FileCheck, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AlurPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-unsil-500 selection:text-white">
      <Navbar />

      <header className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider mb-6 border border-green-100">Timeline Kegiatan</div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Jadwal Pelaksanaan <br/> KKN Periode 2026</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">Catat tanggal penting berikut agar Anda tidak melewatkan tahapan administrasi dan lapangan.</p>
            <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2 mx-auto">
                <Download className="w-4 h-4" /> Unduh PDF Lengkap
            </button>
        </div>
      </header>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 mb-20">
         <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {/* Steps Components (Sama seperti sebelumnya, tapi tanpa Navbar/Footer duplikat) */}
            {/* ITEM 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-unsil-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm z-10">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-unsil-200 transition-all">
                    <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-900">Pendaftaran</h3><span className="text-xs font-bold text-unsil-600 bg-unsil-50 px-2 py-1 rounded">1-15 Jan</span></div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">Pendaftaran via SIM-KKN, melengkapi biodata, upload surat kesehatan, dan pelunasan biaya.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 p-2 rounded-lg"><UserPlus className="w-4 h-4" /> Action: Isi Form Online</div>
                </div>
            </div>
            {/* ITEM 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-white border-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm z-10">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-unsil-200 transition-all">
                    <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-900">Pembekalan</h3><span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">20-25 Jan</span></div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">Pengumuman kelompok dan DPL. Materi pembekalan dilakukan secara Hybrid (Zoom & Offline).</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 p-2 rounded-lg"><UsersRound className="w-4 h-4" /> Action: Cek Kelompok</div>
                </div>
            </div>
            {/* ITEM 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-white border-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm z-10">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-unsil-200 transition-all">
                    <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-900">Pelaksanaan</h3><span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">1 Feb - 2 Mar</span></div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">Penerjunan ke lokasi. Wajib mengisi logbook harian dan menjalankan program kerja.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 p-2 rounded-lg"><Tent className="w-4 h-4" /> Action: Input Logbook</div>
                </div>
            </div>
            {/* ITEM 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-white border-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-sm z-10">4</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-unsil-200 transition-all">
                    <div className="flex items-center justify-between mb-2"><h3 className="font-bold text-slate-900">Pelaporan</h3><span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">3-10 Mar</span></div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">Penarikan mahasiswa. Unggah laporan akhir, artikel ilmiah, dan video dokumenter.</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 p-2 rounded-lg"><FileCheck className="w-4 h-4" /> Action: Upload Laporan</div>
                </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}