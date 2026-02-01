'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import { 
  GraduationCap, 
  ArrowLeft, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  CheckCircle2,
  Briefcase,
  User
} from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  
  // State untuk Role (mahasiswa | dosen)
  const [role, setRole] = useState<'mahasiswa' | 'dosen'>('mahasiswa');
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(''); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // SIMULASI LOGIN
    setTimeout(() => {
      setIsLoading(false);
      
      // Logika Routing Berdasarkan Tab yang Dipilih
      if (role === 'dosen') {
        router.push('/dosen');
      } else {
        router.push('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* SECTION KIRI: FORMULIR */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 lg:p-16 xl:p-24 relative z-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-unsil-600 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="bg-unsil-500 p-2 rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl text-slate-900">SIM-KKN</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Selamat Datang</h1>
            <p className="text-slate-500">Silakan masuk sesuai peran akademik Anda.</p>
          </div>

          {/* ROLE SWITCHER / TABS */}
          <div className="bg-slate-100 p-1.5 rounded-xl flex mb-8">
            <button 
              onClick={() => setRole('mahasiswa')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                role === 'mahasiswa' 
                  ? 'bg-white text-unsil-600 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <User className="w-4 h-4" />
              Mahasiswa
            </button>
            <button 
              onClick={() => setRole('dosen')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 ${
                role === 'dosen' 
                  ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Dosen / DPL
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                {role === 'mahasiswa' ? 'NPM atau Email Student' : 'NIDN atau Email Kampus'}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className={`h-5 w-5 text-slate-400 transition-colors ${role === 'dosen' ? 'group-focus-within:text-blue-500' : 'group-focus-within:text-unsil-500'}`} />
                </div>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    role === 'dosen' 
                      ? 'focus:ring-blue-500/20 focus:border-blue-500' 
                      : 'focus:ring-unsil-500/20 focus:border-unsil-500'
                  }`}
                  placeholder={role === 'mahasiswa' ? '197006001' : '0412345678'}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700">Kata Sandi</label>
                <a href="#" className={`text-sm font-medium hover:underline ${role === 'dosen' ? 'text-blue-600' : 'text-unsil-600'}`}>Lupa kata sandi?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className={`h-5 w-5 text-slate-400 transition-colors ${role === 'dosen' ? 'group-focus-within:text-blue-500' : 'group-focus-within:text-unsil-500'}`} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  className={`block w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                    role === 'dosen' 
                      ? 'focus:ring-blue-500/20 focus:border-blue-500' 
                      : 'focus:ring-unsil-500/20 focus:border-unsil-500'
                  }`}
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer focus:outline-none"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group ${
                role === 'dosen' 
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20' 
                  : 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/20'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses...
                </>
              ) : (
                <>
                  Masuk ke Dashboard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {role === 'mahasiswa' && (
            <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-2">
              <p className="text-slate-500 text-sm">
                Belum punya akun?{' '}
                <Link href="/register" className="font-bold text-unsil-600 hover:text-unsil-500">
                  Daftar KKN Sekarang
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="text-xs text-slate-400 text-center lg:text-left mt-8">
          &copy; 2026 Universitas Siliwangi. Secure Login System.
        </div>
      </div>

      {/* SECTION KANAN: VISUAL (Dinamis Berdasarkan Role) */}
      <div className={`hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center transition-colors duration-500 ${
        role === 'dosen' ? 'bg-slate-900' : 'bg-slate-50'
      }`}>
        <div className="absolute inset-0 bg-grid-slate opacity-30"></div>
        
        {/* Background Gradients */}
        {role === 'mahasiswa' ? (
          <>
            <div className="absolute inset-0 bg-linear-to-tr from-slate-100/50 to-unsil-100/30"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-unsil-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-125 h-125 bg-slate-700 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
          </>
        )}

        <div className="relative z-10 max-w-lg p-10">
          <div className={`backdrop-blur-xl border p-8 rounded-3xl shadow-xl transition-all duration-500 ${
            role === 'dosen' 
              ? 'bg-slate-800/60 border-slate-700 text-white' 
              : 'bg-white/60 border-white/50 text-slate-900'
          }`}>
            <h3 className="text-2xl font-bold mb-4">
              {role === 'mahasiswa' ? 'Informasi Mahasiswa' : 'Akses Dosen Pembimbing'}
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${role === 'dosen' ? 'text-blue-400' : 'text-unsil-500'}`} />
                <p className={`text-sm ${role === 'dosen' ? 'text-slate-300' : 'text-slate-600'}`}>
                  {role === 'mahasiswa' 
                    ? 'Pastikan KRS semester ini sudah disetujui dosen wali sebelum login.' 
                    : 'Gunakan NIDN untuk akses monitoring dan validasi logbook.'}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${role === 'dosen' ? 'text-blue-400' : 'text-unsil-500'}`} />
                <p className={`text-sm ${role === 'dosen' ? 'text-slate-300' : 'text-slate-600'}`}>
                   {role === 'mahasiswa' 
                    ? 'Gunakan email student (@unsil.ac.id) untuk akses penuh.' 
                    : 'Validasi nilai dapat dilakukan setelah periode logbook berakhir.'}
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${role === 'dosen' ? 'text-blue-400' : 'text-unsil-500'}`} />
                <p className={`text-sm ${role === 'dosen' ? 'text-slate-300' : 'text-slate-600'}`}>
                  Jika mengalami kendala login, hubungi Helpdesk LPPM di Gedung Rektorat Lt. 2.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}