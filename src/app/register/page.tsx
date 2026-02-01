'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  ArrowLeft, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nim: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi register
    setTimeout(() => {
        setIsLoading(false);
        alert("Pendaftaran berhasil! Silakan cek email untuk verifikasi.");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* SECTION KIRI: FORMULIR */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 xl:p-16 relative z-10 overflow-y-auto">
        
        {/* Header Kecil */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-unsil-600 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-unsil-500 p-2 rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-900">SIM-KKN</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Buat Akun Baru</h1>
            <p className="text-slate-500">Daftarkan diri Anda untuk mengikuti program KKN periode 2026.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Nama Lengkap */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Nama Lengkap</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400 group-focus-within:text-unsil-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all text-sm"
                  placeholder="Nama sesuai KTM"
                  required
                />
              </div>
            </div>

            {/* NIM */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">NIM / NPM</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <ShieldCheck className="h-5 w-5 text-slate-400 group-focus-within:text-unsil-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all text-sm"
                  placeholder="Contoh: 197006001"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">Email Mahasiswa</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-unsil-500 transition-colors" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all text-sm"
                  placeholder="npm@student.unsil.ac.id"
                  required
                />
              </div>
              <p className="text-[10px] text-slate-400">Gunakan email domain @student.unsil.ac.id untuk verifikasi otomatis.</p>
            </div>

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Kata Sandi</label>
                    <div className="relative group">
                        <input 
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all text-sm"
                        placeholder="Min. 8 karakter"
                        required
                        />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-slate-700">Ulangi Sandi</label>
                    <div className="relative group">
                        <input 
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all text-sm"
                        placeholder="Ulangi sandi"
                        required
                        />
                        <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer focus:outline-none"
                        >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                    <input 
                        id="terms" 
                        name="agreeTerms" 
                        type="checkbox" 
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-unsil-300 text-unsil-600 cursor-pointer" 
                        required 
                    />
                </div>
                <label htmlFor="terms" className="text-xs text-slate-600 cursor-pointer select-none">
                    Saya menyetujui <a href="#" className="font-bold text-unsil-600 hover:underline">Syarat & Ketentuan</a> serta memastikan data yang saya masukkan adalah benar dan dapat dipertanggungjawabkan.
                </label>
            </div>

            {/* Tombol Submit */}
            <button 
              type="submit" 
              disabled={isLoading || !formData.agreeTerms}
              className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group mt-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mendaftarkan...
                </>
              ) : (
                <>
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer Form */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Sudah punya akun?{' '}
              <Link href="/login" className="font-bold text-unsil-600 hover:text-unsil-500">
                Masuk disini
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION KANAN: VISUAL / BRANDING */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center">
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 bg-grid-slate opacity-10"></div>
        <div className="absolute top-0 right-0 w-125 h-125 bg-unsil-500 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-600 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-md p-10 text-white">
          <div className="mb-8">
             <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mb-6 border border-white/20">
                <Check className="w-6 h-6 text-unsil-500" />
             </div>
             <h2 className="text-3xl font-bold mb-4 leading-tight">Mulai Perjalanan Pengabdianmu.</h2>
             <p className="text-slate-300 leading-relaxed">
               Bergabunglah dengan ribuan mahasiswa Universitas Siliwangi lainnya dalam membangun desa melalui inovasi teknologi dan sosial.
             </p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold">1</div>
                <div>
                    <h4 className="font-bold text-sm">Pendaftaran Online</h4>
                    <p className="text-xs text-slate-400">Isi data diri dan pilih preferensi lokasi.</p>
                </div>
             </div>
             <div className="w-0.5 h-6 bg-white/10 ml-9"></div>
             <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                <div>
                    <h4 className="font-bold text-sm">Validasi Akademik</h4>
                    <p className="text-xs text-slate-400">Sistem memverifikasi kelayakan SKS Anda.</p>
                </div>
             </div>
             <div className="w-0.5 h-6 bg-white/10 ml-9"></div>
             <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-unsil-500/20 flex items-center justify-center text-unsil-400 font-bold">3</div>
                <div>
                    <h4 className="font-bold text-sm">Siap Mengabdi</h4>
                    <p className="text-xs text-slate-400">Dapatkan kelompok dan mulai program kerja.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}