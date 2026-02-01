import Link from 'next/link';
import { GraduationCap, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                      <div className="bg-unsil-500 p-1.5 rounded text-white">
                          <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-lg text-slate-900">SIM-KKN UNSIL</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                      Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) Universitas Siliwangi.
                      <br/>Jl. Siliwangi No.24, Kahuripan, Kec. Tawang, Kab. Tasikmalaya.
                  </p>
              </div>
              <div>
                  <h4 className="font-bold text-slate-900 mb-4">Navigasi</h4>
                  <ul className="space-y-3 text-sm text-slate-600">
                      <li><Link href="/fitur" className="hover:text-unsil-600 transition-colors">Fitur Sistem</Link></li>
                      <li><Link href="/alur" className="hover:text-unsil-600 transition-colors">Alur Pendaftaran</Link></li>
                      <li><Link href="/bantuan" className="hover:text-unsil-600 transition-colors">Pusat Bantuan</Link></li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-bold text-slate-900 mb-4">Sosial Media</h4>
                  <div className="flex gap-4">
                      <Link href="#" className="text-slate-400 hover:text-unsil-500 transition-colors"><Instagram className="w-5 h-5" /></Link>
                      <Link href="#" className="text-slate-400 hover:text-unsil-500 transition-colors"><Youtube className="w-5 h-5" /></Link>
                      <Link href="#" className="text-slate-400 hover:text-unsil-500 transition-colors"><Facebook className="w-5 h-5" /></Link>
                  </div>
              </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-xs text-center md:text-left">
                  &copy; 2026 LPPM Universitas Siliwangi. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-slate-500 font-medium">
                 <Link href="#" className="hover:text-slate-900">Privacy Policy</Link>
                 <Link href="#" className="hover:text-slate-900">Terms of Service</Link>
              </div>
          </div>
      </div>
    </footer>
  );
}