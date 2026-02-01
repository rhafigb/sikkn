'use client';

import { useState } from 'react';
import { Search, Filter, MoreHorizontal, Download, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function AdminMahasiswaPage() {
  const [filterStatus, setFilterStatus] = useState('Semua');

  // Dummy Data
  const students = [
    { nim: '197006001', name: 'Rhafi Gunawan', prodi: 'Informatika', fakultas: 'Teknik', status: 'Terverifikasi', group: 'Kelompok 14' },
    { nim: '197006022', name: 'Siti Aminah', prodi: 'Pend. Inggris', fakultas: 'FKIP', status: 'Terverifikasi', group: 'Kelompok 14' },
    { nim: '197006045', name: 'Budi Santoso', prodi: 'Akuntansi', fakultas: 'Ekonomi', status: 'Pending', group: '-' },
    { nim: '197006055', name: 'Dewi Lestari', prodi: 'Agroteknologi', fakultas: 'Pertanian', status: 'Ditolak', group: '-' },
    { nim: '197006066', name: 'Agus Pratama', prodi: 'Ekonomi Syariah', fakultas: 'Agama Islam', status: 'Terverifikasi', group: 'Kelompok 21' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Terverifikasi': return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"><CheckCircle className="w-3 h-3" /> Verified</span>;
      case 'Pending': return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><AlertCircle className="w-3 h-3" /> Pending</span>;
      case 'Ditolak': return <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"><XCircle className="w-3 h-3" /> Rejected</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Mahasiswa</h1>
          <p className="text-slate-500 text-sm mt-1">Total Pendaftar: <span className="font-bold text-indigo-600">3,542 Mahasiswa</span></p>
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-50 shadow-sm flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Excel
        </button>
      </div>

      {/* Filter & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {['Semua', 'Terverifikasi', 'Pending', 'Ditolak'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterStatus(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                filterStatus === tab 
                  ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' 
                  : 'text-slate-600 hover:bg-slate-50 border border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari NIM atau Nama..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-4">Mahasiswa</th>
                <th className="px-6 py-4">Fakultas / Prodi</th>
                <th className="px-6 py-4">Status Admin</th>
                <th className="px-6 py-4">Kelompok</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((mhs, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900">{mhs.name}</p>
                    <p className="text-xs text-slate-500 font-mono">{mhs.nim}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-900">{mhs.fakultas}</p>
                    <p className="text-xs text-slate-500">{mhs.prodi}</p>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(mhs.status)}
                  </td>
                  <td className="px-6 py-4">
                    {mhs.group === '-' ? (
                      <span className="text-slate-400 text-xs italic">Belum plotting</span>
                    ) : (
                      <span className="text-indigo-600 font-medium text-xs bg-indigo-50 px-2 py-1 rounded">{mhs.group}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination Simple */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
          <span>Menampilkan 1-5 dari 3,542 data</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}