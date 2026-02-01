'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Update Import
import { 
  LayoutDashboard, FileCheck, Users, ClipboardCheck, LogOut, Menu, X, Briefcase, Bell, Search
} from 'lucide-react';

export default function DosenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter(); // Init Router
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Monitoring', href: '/dosen', icon: LayoutDashboard },
    { name: 'Validasi Logbook', href: '/dosen/validasi', icon: FileCheck },
    { name: 'Data Kelompok', href: '/dosen/kelompok', icon: Users },
    { name: 'Penilaian Akhir', href: '/dosen/nilai', icon: ClipboardCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg"><Briefcase className="w-5 h-5 text-white" /></div>
            <span className="font-bold text-lg tracking-tight">Panel DPL</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="ml-auto lg:hidden text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">JS</div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Jajang Suherman</p>
              <p className="text-xs text-slate-400 truncate">NIDN: 04123456</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-2">Menu Dosen</p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsSidebarOpen(false)} className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-800">
             <button onClick={() => router.push('/login')} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
                <LogOut className="w-5 h-5" />
                Logout Dosen
             </button>
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500"><Menu className="w-6 h-6" /></button>
            <h2 className="font-semibold text-slate-700 hidden sm:block">Dashboard Monitoring KKN</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Cari mahasiswa..." className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 w-64" />
            </div>
            <button className="relative p-2 hover:bg-slate-100 rounded-full text-slate-500">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}