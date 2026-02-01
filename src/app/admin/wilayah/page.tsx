'use client';

import { Map, Edit3, Trash2, PlusCircle } from 'lucide-react';

export default function AdminWilayahPage() {
  const wilayah = [
    { id: 1, kec: 'Sukaratu', desa: 'Desa Sukaratu', kuota: 12, terisi: 12, status: 'Penuh' },
    { id: 2, kec: 'Sukaratu', desa: 'Desa Gunungsari', kuota: 12, terisi: 8, status: 'Tersedia' },
    { id: 3, kec: 'Ciawi', desa: 'Desa Ciawi', kuota: 12, terisi: 10, status: 'Tersedia' },
    { id: 4, kec: 'Ciawi', desa: 'Desa Pakemitan', kuota: 12, terisi: 0, status: 'Kosong' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Master Wilayah KKN</h1>
          <p className="text-slate-500 text-sm mt-1">Kabupaten Tasikmalaya - Periode 2026</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
          <PlusCircle className="w-4 h-4" /> Tambah Desa
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-700">Kecamatan</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Desa</th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-center">Kuota Mahasiswa</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-700 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {wilayah.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-slate-600">{item.kec}</td>
                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-2">
                  <Map className="w-4 h-4 text-indigo-400" /> {item.desa}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-slate-900 font-bold">{item.terisi}</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.status === 'Penuh' ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${(item.terisi/item.kuota)*100}%` }}
                      ></div>
                    </div>
                    <span className="text-slate-400 text-xs">/ {item.kuota}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    item.status === 'Penuh' ? 'bg-red-100 text-red-700' : 
                    item.status === 'Kosong' ? 'bg-slate-100 text-slate-500' : 'bg-green-100 text-green-700'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded"><Edit3 className="w-4 h-4" /></button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}