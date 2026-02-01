'use client';

import { UserCheck, MapPin, Search, Plus } from 'lucide-react';

export default function AdminDosenPage() {
  const dosens = [
    { nidn: '0412345601', name: 'Dr. Jajang Suherman, M.P.', homebase: 'Fakultas Pertanian', assigned: 'Desa Sukaratu', total_mhs: 12 },
    { nidn: '0412345602', name: 'Rina Herlina, M.Pd.', homebase: 'FKIP', assigned: 'Desa Ciawi', total_mhs: 12 },
    { nidn: '0412345603', name: 'Budi Raharjo, S.T., M.Kom.', homebase: 'Fakultas Teknik', assigned: '-', total_mhs: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Dosen Pembimbing</h1>
          <p className="text-slate-500 text-sm mt-1">Kelola penugasan DPL ke desa mitra.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20">
          <Plus className="w-4 h-4" /> Tambah Dosen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dosens.map((dosen, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-lg group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
                  {dosen.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{dosen.name}</h3>
                  <p className="text-xs text-slate-500 font-mono">{dosen.nidn}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-indigo-600"><UserCheck className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm bg-slate-50 p-2 rounded-lg">
                <span className="text-slate-500 text-xs">Homebase</span>
                <span className="font-medium text-slate-700 text-xs">{dosen.homebase}</span>
              </div>
              <div className="flex items-center justify-between text-sm bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <MapPin className="w-3.5 h-3.5" /> Penugasan
                </div>
                {dosen.assigned === '-' ? (
                  <span className="text-red-500 text-xs font-bold bg-red-50 px-2 py-0.5 rounded">Belum Ada</span>
                ) : (
                  <span className="font-bold text-indigo-600 text-xs">{dosen.assigned}</span>
                )}
              </div>
            </div>

            <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
              Lihat Detail & Penilaian
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}