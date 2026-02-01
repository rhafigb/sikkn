import { 
  Users, MapPin, Layers, AlertTriangle, TrendingUp, Download, Calendar
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      
      {/* HEADER & ACTIONS */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Periode Aktif: <span className="font-bold text-indigo-600">KKN Reguler Periode I - 2026</span></p>
        </div>
        <div className="flex gap-2">
           <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-sm">
              <Calendar className="w-4 h-4" /> Ubah Periode
           </button>
           <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
              <Download className="w-4 h-4" /> Export Laporan
           </button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
            { label: 'Total Pendaftar', val: '3,542', sub: '+12% dari 2025', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
            { label: 'Desa Mitra', val: '120', sub: 'Kab. Tasik & Ciamis', icon: MapPin, color: 'text-green-600', bg: 'bg-green-100' },
            { label: 'Kelompok Terbentuk', val: '115', sub: '5 belum lengkap', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-100' },
            { label: 'Kendala Lapangan', val: '8', sub: 'Perlu penanganan', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
        ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${idx === 3 ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                        {idx === 0 ? 'Live' : 'Total'}
                    </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900">{stat.val}</h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">{stat.sub}</p>
            </div>
        ))}
      </div>

      {/* CHARTS & ACTIVITY GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Registration Chart (CSS Only) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-500" /> Tren Pendaftaran
                </h3>
                <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-lg px-3 py-1 outline-none">
                    <option>7 Hari Terakhir</option>
                    <option>30 Hari Terakhir</option>
                </select>
            </div>
            
            {/* Simple Bar Chart Visualization */}
            <div className="h-64 flex items-end justify-between gap-2 sm:gap-4">
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-2 group">
                        <div className="relative w-full bg-slate-100 rounded-t-xl overflow-hidden h-full flex items-end">
                            <div 
                                className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all duration-500 rounded-t-xl group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                                style={{ height: `${h}%` }}
                            ></div>
                        </div>
                        <span className="text-xs text-slate-400 font-medium">H-{7-i}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Recent Alerts / Activity */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Aktivitas Sistem</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:h-full before:w-0.5 before:bg-slate-100">
                {[
                    { title: "Plotting Otomatis Selesai", time: "Baru saja", desc: "Sistem berhasil membagi 300 mhs ke 25 kelompok.", color: "bg-green-500" },
                    { title: "Pengajuan Pindah Kelompok", time: "25 Menit lalu", desc: "Rina (197001) mengajukan pindah karena sakit.", color: "bg-orange-500" },
                    { title: "Dosen Baru Terdaftar", time: "1 Jam lalu", desc: "Pak Budi ditambahkan sebagai DPL Desa Ciawi.", color: "bg-blue-500" },
                    { title: "Logbook Ditolak Massal", time: "3 Jam lalu", desc: "DPL Kelompok 4 menolak 5 logbook sekaligus.", color: "bg-red-500" },
                ].map((item, idx) => (
                    <div key={idx} className="relative flex items-start gap-4 pl-6">
                        <div className={`absolute left-0 mt-1.5 w-5 h-5 rounded-full border-4 border-white ${item.color} shadow-sm z-10`}></div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">{item.time}</p>
                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-slate-500 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors">
                Lihat Semua Log
            </button>
        </div>

      </div>
    </div>
  );
}