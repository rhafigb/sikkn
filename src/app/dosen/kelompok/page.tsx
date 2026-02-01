'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Search, 
  Phone, 
  MoreVertical, 
  ExternalLink,
  GraduationCap,
  X,
  MessageCircle,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

// --- Tipe Data ---
interface Member {
  nim: string;
  name: string;
  prodi: string;
  role: 'Ketua' | 'Sekretaris' | 'Bendahara' | 'Anggota';
  phone: string;
}

interface GroupData {
  id: number;
  desa: string;
  kecamatan: string;
  kabupaten: string;
  periode: string;
  progress: number; // Persentase Proker
  members: Member[];
  status: 'Active' | 'Warning' | 'Completed';
}

export default function DataKelompokPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<GroupData | null>(null);

  // --- Dummy Data ---
  const groups: GroupData[] = [
    {
      id: 14,
      desa: 'Desa Sukaratu',
      kecamatan: 'Sukaratu',
      kabupaten: 'Tasikmalaya',
      periode: 'Jan - Feb 2026',
      progress: 75,
      status: 'Active',
      members: [
        { nim: '197006001', name: 'Rhafi Gunawan', prodi: 'Informatika', role: 'Ketua', phone: '628123456789' },
        { nim: '197006022', name: 'Siti Aminah', prodi: 'Pend. Inggris', role: 'Sekretaris', phone: '628123456788' },
        { nim: '197006045', name: 'Budi Santoso', prodi: 'Akuntansi', role: 'Bendahara', phone: '628123456787' },
        { nim: '197006055', name: 'Dewi Lestari', prodi: 'Agroteknologi', role: 'Anggota', phone: '628123456786' },
        { nim: '197006066', name: 'Agus Pratama', prodi: 'Ekonomi', role: 'Anggota', phone: '628123456785' },
      ]
    },
    {
      id: 21,
      desa: 'Desa Ciawi',
      kecamatan: 'Ciawi',
      kabupaten: 'Tasikmalaya',
      periode: 'Jan - Feb 2026',
      progress: 40,
      status: 'Warning',
      members: [
        { nim: '197006101', name: 'Ahmad Fauzi', prodi: 'Teknik Sipil', role: 'Ketua', phone: '628123456001' },
        { nim: '197006102', name: 'Rina Wati', prodi: 'Kesehatan Masyarakat', role: 'Sekretaris', phone: '628123456002' },
        { nim: '197006103', name: 'Doni Tata', prodi: 'Penjas', role: 'Anggota', phone: '628123456003' },
      ]
    }
  ];

  // Filter Logic
  const filteredGroups = groups.filter(g => 
    g.desa.toLowerCase().includes(searchTerm.toLowerCase()) || 
    g.members.some(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Kelompok Binaan</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola informasi anggota dan progres desa binaan Anda.</p>
        </div>
        
        <div className="relative w-full sm:w-72">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
           <input 
             type="text" 
             placeholder="Cari Desa atau Mahasiswa..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" 
           />
        </div>
      </div>

      {/* GRID KARTU KELOMPOK */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => {
          const ketua = group.members.find(m => m.role === 'Ketua');
          return (
            <div key={group.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              
              {/* Card Header (Map Visual) */}
              <div className="h-24 bg-slate-800 relative">
                <div className="absolute inset-0 bg-blue-600/20"></div>
                {/* Pattern Grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1.5 text-blue-100 text-xs font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-3 h-3" />
                    Kelompok {group.id}
                  </div>
                  <h3 className="font-bold text-lg leading-none">{group.desa}</h3>
                </div>
                
                <div className="absolute top-4 right-4">
                   <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                     group.status === 'Active' ? 'bg-green-500 text-white' : 
                     group.status === 'Warning' ? 'bg-orange-500 text-white' : 'bg-slate-500 text-white'
                   }`}>
                     {group.status}
                   </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Total Anggota</p>
                      <p className="font-bold text-slate-900">{group.members.length} Mhs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="bg-green-50 p-2 rounded-lg text-green-600">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Progres</p>
                      <p className="font-bold text-slate-900">{group.progress}%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4">
                   <p className="text-xs text-slate-500 mb-2 font-semibold">Ketua Kelompok:</p>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">
                         {ketua?.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                         <p className="text-sm font-bold text-slate-900 truncate">{ketua?.name}</p>
                         <p className="text-xs text-slate-500 truncate">{ketua?.prodi}</p>
                      </div>
                      <a 
                        href={`https://wa.me/${ketua?.phone}`} 
                        target="_blank"
                        className="p-1.5 bg-green-100 text-green-600 rounded hover:bg-green-200 transition-colors"
                        title="Chat WhatsApp"
                      >
                         <MessageCircle className="w-4 h-4" />
                      </a>
                   </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 flex gap-2">
                 <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" /> Lokasi
                 </button>
                 <button 
                   onClick={() => setSelectedGroup(group)}
                   className="flex-1 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                 >
                    Detail <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL DETAIL KELOMPOK */}
      {selectedGroup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedGroup(null)}></div>
           
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative z-10 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in duration-200">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-2 rounded-lg text-white">
                       <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                       <h3 className="font-bold text-lg text-slate-900">{selectedGroup.desa}</h3>
                       <p className="text-xs text-slate-500">Kelompok {selectedGroup.id} • {selectedGroup.kecamatan}, {selectedGroup.kabupaten}</p>
                    </div>
                 </div>
                 <button onClick={() => setSelectedGroup(null)} className="text-slate-400 hover:bg-slate-200 p-2 rounded-full">
                    <X className="w-6 h-6" />
                 </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6">
                 
                 {/* Quick Stats in Modal */}
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                       <p className="text-xs text-slate-500 font-bold uppercase">Periode</p>
                       <p className="text-sm font-bold text-slate-900">{selectedGroup.periode}</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                       <p className="text-xs text-slate-500 font-bold uppercase">Progres Proker</p>
                       <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                             <div className="h-full bg-blue-600 rounded-full" style={{width: `${selectedGroup.progress}%`}}></div>
                          </div>
                          <span className="text-sm font-bold text-slate-900">{selectedGroup.progress}%</span>
                       </div>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                       <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                       <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold mt-1 ${
                         selectedGroup.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                       }`}>
                          <span className={`w-2 h-2 rounded-full ${selectedGroup.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                          {selectedGroup.status === 'Active' ? 'Sedang Berjalan' : 'Perlu Perhatian'}
                       </span>
                    </div>
                 </div>

                 {/* Member List Table */}
                 <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-slate-400" />
                    Daftar Anggota Mahasiswa
                 </h4>
                 
                 <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <table className="w-full text-left text-sm">
                       <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                             <th className="px-5 py-3 font-semibold text-slate-700">Nama Lengkap</th>
                             <th className="px-5 py-3 font-semibold text-slate-700">NIM</th>
                             <th className="px-5 py-3 font-semibold text-slate-700">Program Studi</th>
                             <th className="px-5 py-3 font-semibold text-slate-700">Jabatan</th>
                             <th className="px-5 py-3 font-semibold text-slate-700 text-right">Kontak</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                          {selectedGroup.members.map((member, idx) => (
                             <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                <td className="px-5 py-3">
                                   <div className="font-bold text-slate-900">{member.name}</div>
                                </td>
                                <td className="px-5 py-3 font-mono text-slate-500">{member.nim}</td>
                                <td className="px-5 py-3 text-slate-600">
                                   <div className="flex items-center gap-1.5">
                                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                                      {member.prodi}
                                   </div>
                                </td>
                                <td className="px-5 py-3">
                                   {member.role === 'Ketua' ? (
                                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                                         Ketua
                                      </span>
                                   ) : (
                                      <span className="text-slate-500 text-xs">{member.role}</span>
                                   )}
                                </td>
                                <td className="px-5 py-3 text-right">
                                   <div className="flex justify-end gap-2">
                                      <a href={`tel:${member.phone}`} className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600">
                                         <Phone className="w-4 h-4" />
                                      </a>
                                      <a href={`https://wa.me/${member.phone}`} target="_blank" className="p-1.5 hover:bg-green-50 rounded text-slate-400 hover:text-green-600">
                                         <MessageCircle className="w-4 h-4" />
                                      </a>
                                   </div>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>

              </div>
           </div>
        </div>
      )}

    </div>
  );
}