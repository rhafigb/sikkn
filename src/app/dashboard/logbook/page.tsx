'use client';

import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  MapPin, 
  MoreVertical, 
  CheckCircle2, 
  AlertCircle, 
  X,
  Image as ImageIcon,
  Loader2
} from 'lucide-react';

// Tipe data untuk Logbook (Simulasi)
type LogbookStatus = 'verified' | 'pending' | 'rejected';

interface LogbookEntry {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  status: LogbookStatus;
  image?: string;
}

export default function LogbookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Data Dummy
  const [logs, setLogs] = useState<LogbookEntry[]>([
    {
      id: 1,
      date: '2026-02-01',
      time: '08:00 - 12:00',
      title: 'Sosialisasi Digital Marketing UMKM',
      description: 'Melakukan penyuluhan kepada pelaku UMKM desa mengenai pentingnya branding di media sosial.',
      location: 'Balai Desa Sukaratu',
      status: 'verified',
    },
    {
      id: 2,
      date: '2026-01-31',
      time: '13:00 - 15:30',
      title: 'Pembuatan Peta Potensi Desa',
      description: 'Survey lokasi dan pengambilan titik koordinat untuk pemetaan potensi wisata curug.',
      location: 'Dusun Kaler',
      status: 'pending',
    },
    {
      id: 3,
      date: '2026-01-30',
      time: '09:00 - 11:00',
      title: 'Mengajar di SDN 1 Sukaratu',
      description: 'Membantu kegiatan belajar mengajar mata pelajaran Matematika kelas 4.',
      location: 'SDN 1 Sukaratu',
      status: 'rejected',
    },
  ]);

  // Handle Submit Form (Simulasi)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi delay server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      alert("Logbook berhasil disimpan!");
    }, 1500);
  };

  // Komponen Badge Status
  const StatusBadge = ({ status }: { status: LogbookStatus }) => {
    const styles = {
      verified: 'bg-green-50 text-green-700 border-green-200',
      pending: 'bg-orange-50 text-orange-700 border-orange-200',
      rejected: 'bg-red-50 text-red-700 border-red-200',
    };

    const labels = {
      verified: 'Divalidasi',
      pending: 'Menunggu',
      rejected: 'Ditolak',
    };

    const icons = {
      verified: <CheckCircle2 className="w-3 h-3" />,
      pending: <Clock className="w-3 h-3" />,
      rejected: <AlertCircle className="w-3 h-3" />,
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {icons[status]}
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER & ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Logbook Harian</h1>
          <p className="text-slate-500 text-sm mt-1">Dokumentasikan kegiatan pengabdian Anda setiap hari.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-unsil-500 hover:bg-unsil-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-unsil-500/20 transition-all hover:-translate-y-0.5"
        >
          <Plus className="w-4 h-4" />
          Tambah Kegiatan
        </button>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Cari judul kegiatan..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-100 flex items-center gap-2 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Tanggal</span>
          </button>
          <button className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-100 flex items-center gap-2 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Status</span>
          </button>
        </div>
      </div>

      {/* LIST / TABLE VIEW */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-700">Tanggal & Waktu</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Detail Kegiatan</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Lokasi</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 align-top whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900">{log.date}</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3" /> {log.time}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 align-top max-w-md">
                    <p className="font-bold text-slate-900 mb-1">{log.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{log.description}</p>
                    {log.status === 'rejected' && (
                       <p className="text-red-600 text-xs mt-2 bg-red-50 p-2 rounded border border-red-100">
                         <strong>Catatan DPL:</strong> Dokumentasi kurang jelas, mohon perbaiki foto kegiatan.
                       </p>
                    )}
                  </td>
                  <td className="px-6 py-4 align-top whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs bg-slate-100 px-2 py-1 rounded w-fit">
                      <MapPin className="w-3 h-3" />
                      {log.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 align-top whitespace-nowrap">
                    <StatusBadge status={log.status} />
                  </td>
                  <td className="px-6 py-4 align-top text-right">
                    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">Menampilkan 3 dari 12 kegiatan</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50" disabled>Sebelumnya</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 hover:bg-slate-50">Selanjutnya</button>
          </div>
        </div>
      </div>

      {/* MODAL / DIALOG FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-lg text-slate-900">Tambah Kegiatan Baru</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-200 rounded-full text-slate-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto">
              <form id="logbookForm" onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Tanggal Kegiatan</label>
                    <div className="relative">
                      <input type="date" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" required />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Durasi (Jam)</label>
                    <div className="relative">
                       <input type="text" placeholder="Contoh: 08:00 - 12:00" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" required />
                       <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Nama Kegiatan</label>
                  <input type="text" placeholder="Masukkan judul kegiatan..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Deskripsi Hasil</label>
                  <textarea rows={4} placeholder="Jelaskan output dan proses kegiatan secara rinci..." className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-unsil-500/20 focus:border-unsil-500 outline-none resize-none" required></textarea>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-700">Dokumentasi (Foto)</label>
                   <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-unsil-300 transition-colors cursor-pointer group">
                      <div className="bg-slate-100 p-3 rounded-full mb-3 group-hover:bg-unsil-50 group-hover:text-unsil-600 transition-colors">
                        <ImageIcon className="w-6 h-6 text-slate-400 group-hover:text-unsil-500" />
                      </div>
                      <p className="text-sm font-medium text-slate-600">Klik untuk upload atau drag & drop</p>
                      <p className="text-xs text-slate-400 mt-1">Maksimal 2MB (JPG/PNG)</p>
                   </div>
                </div>

              </form>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-200 transition-colors"
              >
                Batal
              </button>
              <button 
                type="submit" 
                form="logbookForm"
                disabled={isSubmitting}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-lg hover:bg-slate-800 disabled:opacity-70 flex items-center gap-2 transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  'Simpan Kegiatan'
                )}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}