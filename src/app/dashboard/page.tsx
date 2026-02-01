import { 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  MoreHorizontal,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Halo Rhafi, berikut progres KKN Anda minggu ini.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            Unduh Panduan
          </button>
          <button className="px-4 py-2 bg-unsil-500 text-white text-sm font-bold rounded-lg hover:bg-unsil-600 transition-colors shadow-lg shadow-unsil-500/20">
            + Logbook Baru
          </button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">Sisa Waktu</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">24 <span className="text-sm font-medium text-slate-500">Hari</span></h3>
          <p className="text-xs text-slate-500 mt-1">Periode berakhir 28 Feb 2026</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+2 Minggu ini</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">12 <span className="text-sm font-medium text-slate-500">Logbook</span></h3>
          <p className="text-xs text-slate-500 mt-1">Total kegiatan tervalidasi</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-900">85%</h3>
          <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2">
            <div className="bg-orange-500 h-1.5 rounded-full w-[85%]"></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">Kelengkapan Laporan</p>
        </div>

         {/* Card 4 - Status Kelompok */}
         <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-slate-600">Desa Sukaratu</span>
          </div>
          <div className="flex -space-x-2 mt-1">
             <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
             <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
             <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
             <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">+12</div>
          </div>
          <p className="text-xs text-slate-500 mt-3">Kelompok 14 - Tasikmalaya</p>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* MAIN CHART / ACTIVITY AREA */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900">Aktivitas Terbaru</h3>
              <button className="text-sm text-unsil-600 font-medium hover:underline">Lihat Semua</button>
            </div>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-unsil-500 transition-colors"></div>
                  <div className="w-0.5 h-full bg-slate-100 my-1"></div>
                </div>
                <div className="pb-6">
                  <p className="text-xs text-slate-400 mb-1">Hari ini, 10:00 WIB</p>
                  <p className="text-sm font-medium text-slate-900">Mengunggah Logbook Kegiatan "Sosialisasi Digital Marketing"</p>
                  <p className="text-sm text-slate-500 mt-1">Status: <span className="text-orange-500 font-medium">Menunggu Validasi</span></p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-unsil-500 transition-colors"></div>
                   <div className="w-0.5 h-full bg-slate-100 my-1"></div>
                </div>
                <div className="pb-6">
                  <p className="text-xs text-slate-400 mb-1">Kemarin, 14:30 WIB</p>
                  <p className="text-sm font-medium text-slate-900">Dosen Pembimbing menyetujui "Rancangan Program Kerja"</p>
                  <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 italic">
                    "Bagus, lanjutkan ke tahap eksekusi minggu depan."
                  </div>
                </div>
              </div>

               {/* Item 3 */}
               <div className="flex gap-4 group">
                <div className="flex flex-col items-center">
                   <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-unsil-500 transition-colors"></div>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">28 Jan 2026</p>
                  <p className="text-sm font-medium text-slate-900">Bergabung ke Kelompok 14</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIDE WIDGETS */}
        <div className="space-y-6">
          {/* Announcement Widget */}
          <div className="bg-slate-900 text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-unsil-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <div className="bg-white/10 w-fit p-2 rounded-lg mb-4">
                 <AlertCircle className="w-5 h-5 text-unsil-500" />
               </div>
               <h3 className="font-bold text-lg mb-2">Deadline Laporan</h3>
               <p className="text-slate-300 text-sm mb-4">Pengumpulan Laporan Bab 1 maksimal tanggal 10 Februari 2026.</p>
               <button className="w-full py-2 bg-white text-slate-900 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                 Upload Sekarang
               </button>
             </div>
          </div>

          {/* Dosen Widget */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Dosen Pembimbing</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-100"></div>
              <div>
                <p className="text-sm font-bold text-slate-900">Dr. Budi Santoso, M.T.</p>
                <p className="text-xs text-slate-500">NIDN: 0412345678</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 border border-slate-200 rounded-lg text-xs font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
                 WhatsApp
              </button>
              <button className="flex-1 py-2 border border-slate-200 rounded-lg text-xs font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
                 Email
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}