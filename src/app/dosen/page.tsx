import { 
  Users, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  MoreVertical,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function DosenDashboard() {
  // Dummy Data Kelompok Binaan
  const groups = [
    {
      id: 14,
      desa: 'Desa Sukaratu',
      ketua: 'Rhafi Gunawan',
      anggota: 12,
      proker_selesai: 2,
      total_proker: 3,
      logbook_pending: 5,
      status: 'On Track',
      color: 'bg-green-100 text-green-700'
    },
    {
      id: 21,
      desa: 'Desa Ciawi',
      ketua: 'Ahmad Fauzi',
      anggota: 10,
      proker_selesai: 1,
      total_proker: 4,
      logbook_pending: 12,
      status: 'Perlu Perhatian',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      id: 0, // Quick action card dummy
      desa: '', ketua: '', anggota: 0, proker_selesai: 0, total_proker: 0, logbook_pending: 0, status: '', color: '' 
    }
  ].filter(g => g.id !== 0);

  return (
    <div className="space-y-8">
      
      {/* WELCOME SECTION */}
      <div className="bg-blue-600 rounded-2xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Selamat Pagi, Pak Jajang!</h1>
          <p className="text-blue-100 max-w-xl">
            Ada <span className="font-bold text-white underline decoration-yellow-400">17 Logbook Baru</span> menunggu validasi dan 
            <span className="font-bold text-white underline decoration-yellow-400 ml-1">1 Kelompok</span> yang progresnya terlambat minggu ini.
          </p>
          <div className="mt-6 flex gap-3">
             <button className="px-4 py-2 bg-white text-blue-700 font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                Mulai Validasi
             </button>
             <button className="px-4 py-2 bg-blue-700 text-white font-bold text-sm rounded-lg hover:bg-blue-800 transition-colors border border-blue-500">
                Lihat Laporan Masalah
             </button>
          </div>
        </div>
      </div>

      {/* STATS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                <Users className="w-6 h-6" />
            </div>
            <div>
                <p className="text-slate-500 text-xs font-medium uppercase">Total Mahasiswa</p>
                <h3 className="text-2xl font-bold text-slate-900">22 <span className="text-sm font-normal text-slate-400">Org</span></h3>
            </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <FileText className="w-6 h-6" />
            </div>
            <div>
                <p className="text-slate-500 text-xs font-medium uppercase">Menunggu Validasi</p>
                <h3 className="text-2xl font-bold text-slate-900">17 <span className="text-sm font-normal text-slate-400">Log</span></h3>
            </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <TrendingUp className="w-6 h-6" />
            </div>
            <div>
                <p className="text-slate-500 text-xs font-medium uppercase">Rata-rata Progres</p>
                <h3 className="text-2xl font-bold text-slate-900">68% <span className="text-sm font-normal text-slate-400">Selesai</span></h3>
            </div>
        </div>
      </div>

      {/* MONITORING KELOMPOK SECTION */}
      <div>
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-900 text-lg">Monitoring Kelompok Binaan</h3>
            <button className="text-sm text-blue-600 font-medium hover:underline flex items-center gap-1">
                Lihat Semua <ArrowRight className="w-4 h-4" />
            </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-slate-700">Desa / Lokasi</th>
                        <th className="px-6 py-4 font-semibold text-slate-700">Ketua Kelompok</th>
                        <th className="px-6 py-4 font-semibold text-slate-700">Progres Proker</th>
                        <th className="px-6 py-4 font-semibold text-slate-700">Logbook Pending</th>
                        <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                        <th className="px-6 py-4 font-semibold text-slate-700 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {groups.map((group) => (
                        <tr key={group.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{group.desa}</p>
                                        <p className="text-xs text-slate-500">Kelompok {group.id}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                                        {group.ketua.charAt(0)}
                                    </div>
                                    <span className="text-slate-700">{group.ketua}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-full max-w-35">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-slate-600 font-medium">{group.proker_selesai}/{group.total_proker} Selesai</span>
                                        <span className="text-slate-900 font-bold">{Math.round((group.proker_selesai/group.total_proker)*100)}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-blue-600 rounded-full" 
                                            style={{ width: `${(group.proker_selesai/group.total_proker)*100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {group.logbook_pending > 0 ? (
                                    <span className="inline-flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-1 rounded text-xs font-bold border border-orange-100">
                                        <AlertCircle className="w-3 h-3" />
                                        {group.logbook_pending} Baru
                                    </span>
                                ) : (
                                    <span className="text-slate-400 text-xs">Semua tervalidasi</span>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${group.color}`}>
                                    {group.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600">
                                    <MoreVertical className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

      {/* QUICK ACTIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Perlu Perhatian */}
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-50 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-slate-900">Kendala Lapangan</h3>
            </div>
            <ul className="space-y-3">
                <li className="flex items-start gap-3 pb-3 border-b border-slate-50">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                    <div>
                        <p className="text-sm font-semibold text-slate-800">Izin Lokasi Ditolak (Desa Ciawi)</p>
                        <p className="text-xs text-slate-500 mt-1">Kades meminta proposal revisi sebelum program dimulai.</p>
                        <button className="text-xs text-blue-600 font-bold mt-2 hover:underline">Balas Laporan</button>
                    </div>
                </li>
            </ul>
        </div>

        {/* Card: Jadwal Mendatang */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="font-bold text-slate-900">Agenda Dosen</h3>
            </div>
            <ul className="space-y-3">
                <li className="flex gap-4 items-center p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-center bg-white px-3 py-1 rounded border border-slate-200 shadow-sm">
                        <span className="block text-xs text-slate-500 uppercase font-bold">Feb</span>
                        <span className="block text-lg font-bold text-slate-900">10</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Monitoring Ke-1 (Offline)</p>
                        <p className="text-xs text-slate-500">Lokasi: Desa Sukaratu & Ciawi</p>
                    </div>
                </li>
            </ul>
        </div>
      </div>

    </div>
  );
}