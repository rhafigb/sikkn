'use client';

import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Award, 
  BookOpen, 
  MoreHorizontal,
  Linkedin,
  Instagram,
  CheckCircle2,
  Clock,
  CircleDashed,
  UserCircle2
} from 'lucide-react';

export default function KelompokPage() {
  // Data Anggota (Dummy)
  const members = [
    {
      id: 1,
      name: 'Rhafi Gunawan',
      nim: '197006001',
      role: 'Ketua Kelompok',
      prodi: 'Teknik Informatika',
      avatar_color: 'bg-slate-800',
      is_me: true
    },
    {
      id: 2,
      name: 'Siti Aminah',
      nim: '197006022',
      role: 'Sekretaris',
      prodi: 'Pendidikan Bahasa Inggris',
      avatar_color: 'bg-pink-600',
      is_me: false
    },
    {
      id: 3,
      name: 'Budi Santoso',
      nim: '197006045',
      role: 'Bendahara',
      prodi: 'Akuntansi',
      avatar_color: 'bg-blue-600',
      is_me: false
    },
    {
      id: 4,
      name: 'Dewi Lestari',
      nim: '197006088',
      role: 'Divisi Humas',
      prodi: 'Ilmu Komunikasi',
      avatar_color: 'bg-purple-600',
      is_me: false
    },
    {
      id: 5,
      name: 'Agus Pratama',
      nim: '197006099',
      role: 'Divisi Logistik',
      prodi: 'Agroteknologi',
      avatar_color: 'bg-green-600',
      is_me: false
    }
  ];

  // Data Program Kerja (Dummy)
  const proker = [
    {
      title: "Digitalisasi Pemasaran UMKM Keripik Pisang",
      category: "Ekonomi Kreatif",
      progress: 100,
      status: "Selesai",
      date: "20 Jan - 25 Jan"
    },
    {
      title: "Pimbel Gratis & Pojok Baca Desa",
      category: "Pendidikan",
      progress: 65,
      status: "Berjalan",
      date: "Rutinitas Mingguan"
    },
    {
      title: "Pembuatan Peta Batas Desa Digital",
      category: "Teknologi Tepat Guna",
      progress: 10,
      status: "Persiapan",
      date: "10 Feb - 15 Feb"
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION: LOKASI & DPL */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Cover Image Placeholder */}
        <div className="h-32 bg-slate-800 relative">
          <div className="absolute inset-0 bg-grid-slate opacity-10"></div>
          <div className="absolute inset-0 bg-linear-to-r from-unsil-600/90 to-slate-900/90"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <div className="flex items-center gap-2 text-unsil-100 text-sm font-medium mb-1">
              <MapPin className="w-4 h-4" />
              Kec. Sukaratu, Kab. Tasikmalaya
            </div>
            <h1 className="text-2xl font-bold">Kelompok 14 - Desa Sukaratu</h1>
          </div>
        </div>
        
        {/* Info Bar */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
              <UserCircle2 className="w-8 h-8 text-slate-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Dosen Pembimbing Lapangan</p>
              <p className="text-slate-900 font-bold">Dr. Ir. H. Jajang Suherman, M.P.</p>
              <p className="text-xs text-slate-500">NIDN: 0412345678</p>
            </div>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Chat Grup WA
            </button>
            <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors">
              <Mail className="w-4 h-4" />
              Email DPL
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: MEMBER LIST */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-900">Anggota Tim ({members.length})</h3>
            <button className="text-sm text-unsil-600 font-medium hover:underline">Unduh Data Kontak</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {members.map((member) => (
              <div key={member.id} className={`p-4 rounded-xl border transition-all duration-300 ${member.is_me ? 'bg-unsil-50 border-unsil-200 ring-1 ring-unsil-500/20' : 'bg-white border-slate-200 hover:border-unsil-300 hover:shadow-md'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full ${member.avatar_color} text-white flex items-center justify-center font-bold text-lg shadow-sm`}>
                    {member.name.charAt(0)}
                  </div>
                  {member.role === 'Ketua Kelompok' && (
                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3 text-unsil-500" />
                      KETUA
                    </span>
                  )}
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900">{member.name} {member.is_me && <span className="text-slate-400 font-normal text-xs">(Anda)</span>}</h4>
                  <p className="text-xs text-slate-500 font-medium mb-1">{member.role}</p>
                  <div className="w-full h-px bg-slate-100 my-3"></div>
                  <div className="space-y-1">
                    <p className="text-xs text-slate-600 flex items-center gap-2">
                      <BookOpen className="w-3 h-3 text-slate-400" /> {member.prodi}
                    </p>
                    <p className="text-xs text-slate-600 flex items-center gap-2">
                      <Award className="w-3 h-3 text-slate-400" /> {member.nim}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100/50">
                  <button className="p-1.5 text-slate-400 hover:text-unsil-600 hover:bg-unsil-50 rounded-lg transition-colors"><MessageCircle className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"><Instagram className="w-4 h-4" /></button>
                  <button className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"><Linkedin className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: PROKER STATUS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg text-slate-900">Status Proker</h3>
            <button className="p-1 hover:bg-slate-100 rounded-lg"><MoreHorizontal className="w-4 h-4" /></button>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {proker.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 pr-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.category}</span>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight mt-1">{item.title}</h4>
                    <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  
                  {/* Status Icon Logic */}
                  {item.status === 'Selesai' && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
                  {item.status === 'Berjalan' && <CircleDashed className="w-5 h-5 text-unsil-500 animate-spin-slow shrink-0" />}
                  {item.status === 'Persiapan' && <div className="w-5 h-5 rounded-full border-2 border-slate-200 shrink-0"></div>}
                </div>

                {/* Progress Bar */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.status === 'Selesai' ? 'bg-green-500' : 
                        item.status === 'Berjalan' ? 'bg-unsil-500' : 'bg-slate-300'
                      }`} 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 w-8 text-right">{item.progress}%</span>
                </div>
              </div>
            ))}

            <button className="w-full py-3 mt-4 border border-dashed border-slate-300 rounded-xl text-sm font-medium text-slate-500 hover:text-unsil-600 hover:border-unsil-300 hover:bg-unsil-50 transition-all flex items-center justify-center gap-2">
              Lihat Detail Proposal
            </button>
          </div>

          {/* Mini Widget: Jadwal Piket */}
          <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
             <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-unsil-600 rounded-full opacity-20 blur-xl"></div>
             <h4 className="font-bold mb-3 flex items-center gap-2">
               <Clock className="w-4 h-4 text-unsil-500" />
               Jadwal Piket Posko
             </h4>
             <ul className="space-y-3 text-sm text-slate-300">
               <li className="flex justify-between border-b border-slate-700 pb-2">
                 <span>Senin</span>
                 <span className="font-semibold text-white">Rhafi & Budi</span>
               </li>
               <li className="flex justify-between border-b border-slate-700 pb-2">
                 <span>Selasa</span>
                 <span className="font-semibold text-white">Siti & Dewi</span>
               </li>
               <li className="flex justify-between">
                 <span>Rabu</span>
                 <span className="font-semibold text-white">Agus & Rhafi</span>
               </li>
             </ul>
          </div>

        </div>
      </div>
    </div>
  );
}