'use client';

import { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Save, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  Smartphone,
  Loader2
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notification'>('profile');
  const [isLoading, setIsLoading] = useState(false);

  // Simulasi Save
  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Perubahan berhasil disimpan!');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Pengaturan Akun</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* SIDEBAR NAVIGATION (TABS) */}
        <div className="w-full lg:w-64 shrink-0 space-y-2">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
              activeTab === 'profile' 
                ? 'bg-white text-unsil-600 shadow-sm border border-slate-200' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <User className="w-4 h-4" />
            Profil Saya
          </button>
          <button 
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
              activeTab === 'security' 
                ? 'bg-white text-unsil-600 shadow-sm border border-slate-200' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Lock className="w-4 h-4" />
            Keamanan
          </button>
          <button 
            onClick={() => setActiveTab('notification')}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
              activeTab === 'notification' 
                ? 'bg-white text-unsil-600 shadow-sm border border-slate-200' 
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            <Bell className="w-4 h-4" />
            Notifikasi
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1">
          
          {/* --- TAB: PROFILE --- */}
          {activeTab === 'profile' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-8 animate-fade-in">
              {/* Avatar Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-slate-100">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md overflow-hidden">
                     {/* Placeholder Image */}
                     <div className="w-full h-full flex items-center justify-center bg-slate-800 text-white text-2xl font-bold">RG</div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm text-slate-600">
                    <Camera className="w-3 h-3" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-slate-900">Foto Profil</h3>
                  <p className="text-sm text-slate-500 mb-3">Format: JPG, GIF atau PNG. Maks 2MB.</p>
                  <div className="flex gap-2 justify-center sm:justify-start">
                    <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50">Upload Baru</button>
                    <button className="px-4 py-2 text-red-600 text-xs font-bold hover:bg-red-50 rounded-lg">Hapus</button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="Rhafi Gunawan" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">NPM / NIM</label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="197006001" disabled className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed" />
                  </div>
                  <p className="text-[10px] text-slate-400">Hubungi akademik untuk perubahan NIM.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Program Studi</label>
                  <input type="text" defaultValue="Teknik Informatika" disabled className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Fakultas</label>
                  <input type="text" defaultValue="Fakultas Teknik" disabled className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Kampus</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="email" defaultValue="197006001@student.unsil.ac.id" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nomor WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="text" defaultValue="081234567890" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Alamat Domisili</label>
                <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea rows={3} defaultValue="Jl. Kahuripan No. 25, Kota Tasikmalaya" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none resize-none"></textarea>
                </div>
              </div>
            </div>
          )}

          {/* --- TAB: SECURITY --- */}
          {activeTab === 'security' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-6 animate-fade-in">
               <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-4">Ubah Kata Sandi</h3>
               
               <div className="space-y-4 max-w-lg">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Kata Sandi Lama</label>
                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Kata Sandi Baru</label>
                    <input type="password" placeholder="Min. 8 karakter" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Konfirmasi Kata Sandi Baru</label>
                    <input type="password" placeholder="Ulangi kata sandi" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" />
                  </div>
               </div>

               <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-6">
                 <h4 className="font-bold text-blue-800 text-sm mb-2">Tips Keamanan</h4>
                 <ul className="list-disc list-inside text-xs text-blue-700 space-y-1">
                    <li>Gunakan kombinasi huruf besar, huruf kecil, angka, dan simbol.</li>
                    <li>Jangan gunakan tanggal lahir atau NPM sebagai password.</li>
                    <li>Ganti password secara berkala (min. 3 bulan sekali).</li>
                 </ul>
               </div>
            </div>
          )}

          {/* --- TAB: NOTIFICATION --- */}
          {activeTab === 'notification' && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 space-y-6 animate-fade-in">
              <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-4">Preferensi Notifikasi</h3>
              
              <div className="space-y-6">
                
                {/* Email Notifications */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="bg-slate-100 p-2 rounded-lg h-fit">
                        <Mail className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">Notifikasi Email</h4>
                        <p className="text-xs text-slate-500 mt-1 max-w-xs">Terima update penting mengenai validasi logbook dan pengumuman LPPM.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-unsil-500"></div>
                  </label>
                </div>

                {/* WhatsApp Notifications */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="bg-slate-100 p-2 rounded-lg h-fit">
                        <Smartphone className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-sm">Notifikasi WhatsApp</h4>
                        <p className="text-xs text-slate-500 mt-1 max-w-xs">Pemberitahuan real-time untuk chat grup kelompok dan deadline mendesak.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-unsil-500"></div>
                  </label>
                </div>

              </div>
            </div>
          )}

          {/* GLOBAL SAVE BUTTON */}
          <div className="mt-6 flex justify-end">
            <button 
                onClick={handleSave}
                disabled={isLoading}
                className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-slate-800 disabled:opacity-70 flex items-center gap-2 transition-all"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Menyimpan...
                    </>
                ) : (
                    <>
                        <Save className="w-5 h-5" />
                        Simpan Perubahan
                    </>
                )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}