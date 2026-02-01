'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Users, Map, Settings, LogOut, Menu, X, 
  ShieldCheck, Database, Layers, Bell, Search, GraduationCap
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Data Mahasiswa', href: '/admin/mahasiswa', icon: Users },
    { name: 'Data Dosen', href: '/admin/dosen', icon: GraduationCap },
    { name: 'Master Wilayah', href: '/admin/wilayah', icon: Map },
    { name: 'Plotting Kelompok', href: '/admin/plotting', icon: Layers },
    { name: 'Konfigurasi', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR (Theme: Deep Indigo/Dark) */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#1e1b4b] text-white transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header Sidebar */}
        <div className="h-16 flex items-center px-6 border-b border-indigo-900/50">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 p-1.5 rounded-lg text-white">
                <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-indigo-50">Admin LPPM</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="ml-auto lg:hidden text-indigo-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-indigo-900/50 bg-[#17153b]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm border-2 border-indigo-400">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">Super Admin</p>
              <p className="text-xs text-indigo-300 truncate">Kepala Pusat KKN</p>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <nav className="p-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2 mt-2">Main Menu</p>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50 border border-indigo-500' 
                    : 'text-indigo-300 hover:bg-indigo-900/50 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}

          <div className="pt-4 mt-4 border-t border-indigo-900/50">
             <button 
                onClick={() => router.push('/login')} 
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
             >
                <LogOut className="w-5 h-5" />
                Keluar Sistem
             </button>
          </div>
        </nav>
      </aside>

      {/* CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-500">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="font-bold text-slate-800 hidden sm:block">Sistem Informasi Manajemen KKN</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Cari data global..." className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 w-64 transition-all" />
            </div>
            <button className="relative p-2 hover:bg-slate-100 rounded-full text-slate-500">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto bg-slate-50">{children}</main>
      </div>
    </div>
  );
}