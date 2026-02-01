'use client';

import { useState } from 'react';
import { 
  Search, UserPlus, GripVertical, MapPin
} from 'lucide-react';

export default function PlottingPage() {
  const [activeTab, setActiveTab] = useState<'mahasiswa' | 'kelompok'>('kelompok');

  // Dummy Groups
  const groups = [
    { id: 1, desa: 'Desa Sukaratu', kuota: 12, terisi: 12, status: 'Penuh' },
    { id: 2, desa: 'Desa Ciawi', kuota: 12, terisi: 10, status: 'Tersedia' },
    { id: 3, desa: 'Desa Rajapolah', kuota: 12, terisi: 8, status: 'Tersedia' },
    { id: 4, desa: 'Desa Singaparna', kuota: 12, terisi: 12, status: 'Penuh' },
  ];

  // Dummy Unassigned Students
  const unassigned = [
    { nim: '197006881', name: 'Dimas Anggara', prodi: 'Informatika' },
    { nim: '197006882', name: 'Bella Saphira', prodi: 'Akuntansi' },
    { nim: '197006883', name: 'Joko Anwar', prodi: 'Agroteknologi' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Plotting Kelompok</h1>
          <p className="text-slate-500 text-sm mt-1">Manajemen pembagian peserta KKN ke lokasi desa.</p>
        </div>
        <div className="flex gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
            <button 
                onClick={() => setActiveTab('kelompok')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${activeTab === 'kelompok' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
            >
                Data Kelompok
            </button>
            <button 
                onClick={() => setActiveTab('mahasiswa')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${activeTab === 'mahasiswa' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500 hover:text-slate-900'}`}
            >
                Mahasiswa Belum Dapat
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        
        {/* LEFT: UNASSIGNED POOL */}
        <div className="bg-white border border-slate-200 rounded-xl flex flex-col h-full overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <UserPlus className="w-4 h-4 text-orange-500" />
                    Belum Plotting <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full ml-1">3</span>
                </h3>
                <button className="text-xs font-bold text-indigo-600 hover:underline">Auto-Assign</button>
            </div>
            <div className="p-3 border-b border-slate-100">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                    <input type="text" placeholder="Cari mahasiswa..." className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-indigo-500" />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {unassigned.map((mhs, idx) => (
                    <div key={idx} className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-move group">
                        <div className="flex items-center gap-3">
                            <GripVertical className="w-4 h-4 text-slate-300 group-hover:text-indigo-400" />
                            <div>
                                <p className="text-sm font-bold text-slate-900">{mhs.name}</p>
                                <p className="text-xs text-slate-500">{mhs.nim} • {mhs.prodi}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* RIGHT: VILLAGE GROUPS */}
        <div className="lg:col-span-2 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-4 h-full overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {groups.map((group) => (
                    <div key={group.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-start">
                            <div>
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-500" /> {group.desa}
                                </h4>
                                <p className="text-xs text-slate-500 mt-1">Kec. Sukaratu</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                                group.status === 'Penuh' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}>
                                {group.status}
                            </span>
                        </div>
                        
                        <div className="p-4">
                            <div className="flex justify-between text-xs mb-2">
                                <span className="text-slate-500 font-medium">Kapasitas</span>
                                <span className="font-bold text-slate-900">{group.terisi} / {group.kuota}</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                                <div 
                                    className={`h-2 rounded-full ${group.status === 'Penuh' ? 'bg-green-500' : 'bg-blue-500'}`} 
                                    style={{ width: `${(group.terisi / group.kuota) * 100}%` }}
                                ></div>
                            </div>
                            
                            <div className="flex -space-x-2 overflow-hidden">
                                {[...Array(group.terisi > 5 ? 5 : group.terisi)].map((_, i) => (
                                    // PERBAIKAN: Menghapus 'inline-block', mempertahankan 'flex'
                                    <div key={i} className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 text-[10px] font-bold text-slate-500">
                                        M{i+1}
                                    </div>
                                ))}
                                {group.terisi > 5 && (
                                    // PERBAIKAN: Menghapus 'inline-block', mempertahankan 'flex'
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-slate-100 text-[10px] font-bold text-slate-500">
                                        +{group.terisi - 5}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="bg-slate-50 p-2 border-t border-slate-100 text-center">
                            <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 w-full py-1">
                                Kelola Anggota
                            </button>
                        </div>
                    </div>
                ))}
                
                {/* Add New Group Button */}
                {/* PERBAIKAN: min-h-[180px] -> min-h-45 */}
                <button className="border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-indigo-400 hover:text-indigo-500 hover:bg-indigo-50 transition-all min-h-45">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-2 group-hover:bg-white">
                        <UserPlus className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold">Tambah Kelompok Baru</span>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}