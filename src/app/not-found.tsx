import Link from 'next/link';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-unsil-100 rounded-full animate-ping opacity-20"></div>
            <div className="relative bg-white p-6 rounded-full shadow-xl border border-slate-100 flex items-center justify-center">
                <FileQuestion className="w-16 h-16 text-unsil-500" />
            </div>
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-500 mb-8">Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan.</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard" className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
            <Home className="w-4 h-4" />
            Ke Dashboard
          </Link>
          <Link href="/" className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Halaman Depan
          </Link>
        </div>

        <p className="mt-12 text-xs text-slate-400">Error Code: 404 • SIM-KKN Universitas Siliwangi</p>
      </div>
    </div>
  );
}