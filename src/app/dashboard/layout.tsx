'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Update Import
import { 
  LayoutDashboard, Users, BookOpen, FileText, Settings, LogOut, Menu, Bell, Search, X, GraduationCap, ChevronDown
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter(); // Init Router
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Kelompok Saya', href: '/dashboard/kelompok', icon: Users },
    { name: 'Logbook Harian', href: '/dashboard/logbook', icon: BookOpen },
    { name: 'Laporan Akhir', href: '/dashboard/laporan', icon: FileText },
    { name: 'Pengaturan', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden glass-effect" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2 text-unsil-600">
            <GraduationCap className="w-6 h-6" />
            <span className="font-bold text-lg text-slate-900 tracking-tight">SIM-KKN</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="ml-auto lg:hidden text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-4">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">RG</div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">Rhafi Gunawan</p>
              <p className="text-xs text-slate-500 truncate">Teknik Informatika</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-2">Menu Utama</p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} onClick={() => setIsSidebarOpen(false)} className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-unsil-50 text-unsil-600 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
                <item.icon className={`w-5 h-5 ${isActive ? 'text-unsil-500' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-100">
             <button 
                onClick={() => router.push('/login')} 
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
             >
                <LogOut className="w-5 h-5" />
                Keluar
             </button>
          </div>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500 hover:text-slate-700"><Menu className="w-6 h-6" /></button>
            <div className="hidden md:flex items-center relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input type="text" placeholder="Cari dokumen atau info..." className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 w-64 transition-all" />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <button className="flex items-center gap-2 hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
              <span className="text-sm font-medium text-slate-700 hidden sm:block">Semester Genap 2026</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}