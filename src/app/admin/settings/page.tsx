'use client';

import { useState } from 'react';
import { Save, Calendar, Lock, Unlock, AlertTriangle } from 'lucide-react';

export default function AdminSettingsPage() {
  const [systemPhase, setSystemPhase] = useState('pendaftaran'); // pendaftaran, pelaksanaan, penilaian

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Konfigurasi Sistem</h1>
        <p className="text-slate-500 text-sm mt-1">Atur jadwal, periode aktif, dan hak akses pengguna.</p>
      </div>

      {/* Card: Status Periode */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" /> Periode Aktif
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Periode</label>
            <input type="text" defaultValue="KKN Reguler Periode I - 2026" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Status Saat Ini</label>
            <select 
              value={systemPhase} 
              onChange={(e) => setSystemPhase(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50 font-medium"
            >
              <option value="pendaftaran">Masa Pendaftaran</option>
              <option value="pelaksanaan">Masa Pelaksanaan (Logbook)</option>
              <option value="penilaian">Masa Penilaian & Laporan</option>
              <option value="arsip">Diarsipkan (Read Only)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Card: Kontrol Akses */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Lock className="w-5 h-5 text-indigo-600" /> Kontrol Akses Fitur
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-semibold text-slate-800 text-sm">Pendaftaran Mahasiswa</p>
              <p className="text-xs text-slate-500">Izinkan mahasiswa baru mendaftar dan mengisi biodata.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-semibold text-slate-800 text-sm">Input Logbook Harian</p>
              <p className="text-xs text-slate-500">Buka akses pengisian logbook bagi mahasiswa yang sudah diplot.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors">
            <div>
              <p className="font-semibold text-slate-800 text-sm">Input Nilai Dosen</p>
              <p className="text-xs text-slate-500">Izinkan dosen memasukkan nilai akhir mahasiswa.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> Danger Zone
        </h3>
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-bold text-red-700">Reset Semua Data Plotting</p>
                <p className="text-xs text-red-600">Tindakan ini akan menghapus semua pembagian kelompok yang sudah ada.</p>
            </div>
            <button className="bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
                Reset Data
            </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 transition-all">
            <Save className="w-5 h-5" /> Simpan Konfigurasi
        </button>
      </div>
    </div>
  );
}