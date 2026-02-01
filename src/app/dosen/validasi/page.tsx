'use client';

import { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Eye, 
  Clock, 
  MapPin, 
  Filter, 
  Search, 
  Calendar,
  AlertTriangle,
  MessageSquare,
  Loader2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Tipe Data Logbook Mahasiswa
interface StudentLog {
  id: number;
  studentName: string;
  nim: string;
  group: string; // Kelompok
  date: string;
  title: string;
  description: string;
  location: string;
  status: 'pending' | 'verified' | 'rejected';
  imageUrl?: string;
}

export default function ValidasiPage() {
  const [selectedLog, setSelectedLog] = useState<StudentLog | null>(null);
  const [isRejectMode, setIsRejectMode] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Data Dummy Logbook Masuk
  const [logs, setLogs] = useState<StudentLog[]>([
    {
      id: 1,
      studentName: 'Rhafi Gunawan',
      nim: '197006001',
      group: 'Kelompok 14 - Desa Sukaratu',
      date: '2026-02-01',
      title: 'Sosialisasi Digital Marketing UMKM',
      description: 'Melakukan kunjungan ke 5 UMKM keripik pisang untuk mendata kebutuhan pemasaran digital mereka. Kami juga memberikan pelatihan singkat penggunaan Instagram Business.',
      location: 'Dusun Kaler',
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Siti Aminah',
      nim: '197006022',
      group: 'Kelompok 14 - Desa Sukaratu',
      date: '2026-02-01',
      title: 'Mengajar Mengaji di TPA',
      description: 'Membantu ustadz setempat mengajar Iqra jilid 1-3 untuk anak-anak usia TK-SD.',
      location: 'Masjid Al-Hidayah',
      status: 'pending'
    },
    {
      id: 3,
      studentName: 'Budi Santoso',
      nim: '197006045',
      group: 'Kelompok 21 - Desa Ciawi',
      date: '2026-01-31',
      title: 'Kerja Bakti Bersih Desa',
      description: 'Membersihkan selokan utama desa bersama warga.',
      location: 'Balai Desa Ciawi',
      status: 'pending'
    }
  ]);

  // Handle Approve
  const handleApprove = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // Hapus log dari list (Simulasi update status ke database)
      setLogs(logs.filter(l => l.id !== selectedLog?.id));
      setIsProcessing(false);
      setSelectedLog(null);
      // Anda bisa menambahkan toast notification disini
    }, 1000);
  };

  // Handle Reject
  const handleReject = () => {
    if (!rejectReason.trim()) return alert("Alasan penolakan wajib diisi!");
    
    setIsProcessing(true);
    setTimeout(() => {
      setLogs(logs.filter(l => l.id !== selectedLog?.id));
      setIsProcessing(false);
      setSelectedLog(null);
      setIsRejectMode(false);
      setRejectReason('');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Validasi Logbook</h1>
          <p className="text-slate-500 text-sm mt-1">
            <span className="font-bold text-blue-600">{logs.length} Logbook</span> menunggu pemeriksaan Anda hari ini.
          </p>
        </div>
        
        {/* Filter Tools */}
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input type="text" placeholder="Cari nama atau NIM..." className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-blue-600">
             <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* LIST OF PENDING LOGS */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {logs.length === 0 ? (
           <div className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Semua Beres!</h3>
              <p className="text-slate-500">Tidak ada logbook yang menunggu validasi saat ini.</p>
           </div>
        ) : (
           <div className="divide-y divide-slate-100">
              {logs.map((log) => (
                <div key={log.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col md:flex-row gap-4 md:items-center">
                   
                   {/* Date & Time Column */}
                   <div className="w-full md:w-32 shrink-0">
                      <div className="flex items-center gap-2 text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
                        <Calendar className="w-3 h-3" />
                        {log.date}
                      </div>
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">
                        Pending
                      </span>
                   </div>

                   {/* Content Column */}
                   <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                         <h4 className="text-sm font-bold text-slate-900 truncate">{log.studentName}</h4>
                         <span className="text-slate-400 text-xs">•</span>
                         <span className="text-xs text-slate-500">{log.nim}</span>
                      </div>
                      <p className="font-semibold text-blue-700 text-base mb-1">{log.title}</p>
                      <p className="text-slate-600 text-sm line-clamp-2">{log.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                         <MapPin className="w-3 h-3" />
                         {log.location}
                         <span className="mx-1">|</span>
                         {log.group}
                      </div>
                   </div>

                   {/* Action Column */}
                   <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0">
                      <button 
                        onClick={() => { setSelectedLog(log); setIsRejectMode(false); }}
                        className="flex-1 md:flex-none px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm"
                      >
                         <Eye className="w-4 h-4" />
                         Detail
                      </button>
                      <button 
                        onClick={() => { setSelectedLog(log); setIsRejectMode(false); }} // Shortcut for demo, usually direct approve
                        className="flex-1 md:flex-none px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
                      >
                         Validasi
                      </button>
                   </div>
                </div>
              ))}
           </div>
        )}
        
        {/* Pagination */}
        {logs.length > 0 && (
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex justify-between items-center">
                <span className="text-xs text-slate-500">Menampilkan 1-3 dari {logs.length} data</span>
                <div className="flex gap-1">
                    <button disabled className="p-1 rounded hover:bg-slate-200 text-slate-400 disabled:opacity-50"><ChevronLeft className="w-5 h-5" /></button>
                    <button disabled className="p-1 rounded hover:bg-slate-200 text-slate-400 disabled:opacity-50"><ChevronRight className="w-5 h-5" /></button>
                </div>
            </div>
        )}
      </div>

      {/* MODAL DETAIL & VALIDATION */}
      {selectedLog && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
           <div 
             className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
             onClick={() => setSelectedLog(null)}
           ></div>

           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative z-10 flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                 <div>
                    <h3 className="font-bold text-lg text-slate-900">Validasi Kegiatan</h3>
                    <p className="text-xs text-slate-500">{selectedLog.studentName} — {selectedLog.group}</p>
                 </div>
                 <button onClick={() => setSelectedLog(null)} className="p-2 hover:bg-slate-200 rounded-full text-slate-400">
                    <XCircle className="w-6 h-6" />
                 </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto bg-slate-50/50">
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    
                    <div className="flex justify-between items-start mb-4">
                       <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {selectedLog.date}
                       </span>
                       <span className="text-slate-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {selectedLog.location}
                       </span>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 mb-4">{selectedLog.title}</h2>
                    
                    <div className="prose prose-sm text-slate-600 max-w-none mb-6">
                       <p>{selectedLog.description}</p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full h-64 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                       {/* In real app: <img src={log.imageUrl} /> */}
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-2">
                          <Eye className="w-6 h-6" />
                       </div>
                       <span className="text-sm font-medium">Foto Dokumentasi Kegiatan</span>
                    </div>
                 </div>

                 {/* REJECT FORM (Condition) */}
                 {isRejectMode && (
                    <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4 animate-in slide-in-from-top-2">
                       <label className="text-sm font-bold text-red-800 flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4" />
                          Alasan Penolakan
                       </label>
                       <textarea 
                          value={rejectReason}
                          onChange={(e) => setRejectReason(e.target.value)}
                          placeholder="Jelaskan mengapa logbook ini ditolak (misal: Foto tidak sesuai, deskripsi kurang lengkap)..."
                          className="w-full p-3 text-sm border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none bg-white text-slate-700 h-24 resize-none"
                          autoFocus
                       ></textarea>
                    </div>
                 )}
              </div>

              {/* Modal Footer (Actions) */}
              <div className="px-6 py-4 border-t border-slate-200 bg-white flex justify-end gap-3">
                 {!isRejectMode ? (
                    <>
                       <button 
                          onClick={() => setIsRejectMode(true)}
                          disabled={isProcessing}
                          className="px-5 py-2.5 rounded-xl border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 text-sm font-bold transition-colors"
                       >
                          Tolak
                       </button>
                       <button 
                          onClick={handleApprove}
                          disabled={isProcessing}
                          className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center gap-2"
                       >
                          {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                          Setujui Kegiatan
                       </button>
                    </>
                 ) : (
                    <>
                       <button 
                          onClick={() => setIsRejectMode(false)}
                          className="px-5 py-2.5 rounded-xl text-slate-500 font-bold text-sm hover:bg-slate-100"
                       >
                          Batal
                       </button>
                       <button 
                          onClick={handleReject}
                          disabled={isProcessing}
                          className="px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                       >
                          {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageSquare className="w-4 h-4" />}
                          Kirim Revisi
                       </button>
                    </>
                 )}
              </div>

           </div>
        </div>
      )}

    </div>
  );
}