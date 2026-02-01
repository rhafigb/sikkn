'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook untuk deteksi URL aktif
import { GraduationCap, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Ambil URL saat ini

  // Efek Scroll (Glassmorphism)
  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper untuk styling menu aktif
  const getLinkClass = (path: string) => {
    return pathname === path 
      ? "text-sm font-bold text-unsil-600" 
      : "text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors";
  };

  const getMobileLinkClass = (path: string) => {
    return pathname === path
      ? "block px-4 py-3 bg-unsil-50 text-unsil-700 font-bold rounded-xl"
      : "block px-4 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-xl";
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-2' 
          : 'bg-white border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <Link href="/" className="shrink-0 flex items-center gap-3">
            <div className="bg-unsil-500 p-2 rounded-xl text-white shadow-lg shadow-unsil-500/20">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">SIM-KKN</span>
              <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-0.5">Universitas Siliwangi</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            <Link href="/" className={getLinkClass('/')}>Beranda</Link>
            <Link href="/fitur" className={getLinkClass('/fitur')}>Fitur</Link>
            <Link href="/alur" className={getLinkClass('/alur')}>Alur</Link>
            <Link href="/bantuan" className={getLinkClass('/bantuan')}>Bantuan</Link>
          </div>

          {/* AUTH BUTTONS */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/login" className="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
              Masuk
            </Link>
            <Link href="/register" className="px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 shadow-md hover:shadow-lg transition-all flex items-center gap-2">
              Daftar KKN <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU CONTENT */}
      <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-3">
          <Link href="/" className={getMobileLinkClass('/')}>Beranda</Link>
          <Link href="/fitur" className={getMobileLinkClass('/fitur')}>Fitur</Link>
          <Link href="/alur" className={getMobileLinkClass('/alur')}>Alur Program</Link>
          <Link href="/bantuan" className={getMobileLinkClass('/bantuan')}>Pusat Bantuan</Link>
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
             <Link href="/login" className="flex justify-center px-4 py-3 border border-slate-200 rounded-xl font-bold text-slate-700">Masuk</Link>
             <Link href="/register" className="flex justify-center px-4 py-3 bg-slate-900 text-white rounded-xl font-bold">Daftar</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}