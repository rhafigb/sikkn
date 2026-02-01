'use client';

import { useState } from 'react';
import { 
  FileText, 
  UploadCloud, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  History, 
  File, 
  Video, 
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
  XCircle,
  Eye
} from 'lucide-react';

// Tipe Data Dokumen
type DocStatus = 'not_submitted' | 'in_review' | 'revision' | 'approved';

interface DocumentItem {
  id: string;
  title: string;
  type: 'pdf' | 'docx' | 'link';
  deadline: string;
  status: DocStatus;
  version: number;
  feedback?: string;
  file_size?: string;
  last_updated?: string;
}

export default function LaporanPage() {
  const [expandedId, setExpandedId] = useState<string | null>('doc-1');

  // Data Dummy Persyaratan Laporan
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 'doc-1',
      title: 'Laporan Akhir (Bab 1 - 5)',
      type: 'pdf',
      deadline: '10 Feb 2026',
      status: 'revision',
      version: 2,
      feedback: 'Bab 4 analisis data kurang mendalam. Tambahkan grafik perbandingan pra dan pasca kegiatan.',
      file_size: '2.4 MB',
      last_updated: '2 Jam yang lalu'
    },
    {
      id: 'doc-2',
      title: 'Artikel Ilmiah (Jurnal)',
      type: 'docx',
      deadline: '15 Feb 2026',
      status: 'in_review',
      version: 1,
      file_size: '850 KB',
      last_updated: 'Kemarin'
    },
    {
      id: 'doc-3',
      title: 'Link Video Dokumenter (YouTube)',
      type: 'link',
      deadline: '20 Feb 2026',
      status: 'not_submitted',
      version: 0
    },
    {
      id: 'doc-4',
      title: 'Surat Bebas Tanggungan Desa',
      type: 'pdf',
      deadline: '28 Feb 2026',
      status: 'approved',
      version: 1,
      file_size: '1.2 MB',
      last_updated: '3 Hari yang lalu'
    }
  ]);

  // Helper untuk warna status
  const getStatusColor = (status: DocStatus) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-700 border-green-200';
      case 'revision': return 'bg-red-50 text-red-700 border-red-200';
      case 'in_review': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  const getStatusLabel = (status: DocStatus) => {
    switch (status) {
      case 'approved': return 'Disetujui';
      case 'revision': return 'Perlu Revisi';
      case 'in_review': return 'Sedang Direview';
      default: return 'Belum Diunggah';
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Repository Laporan</h1>
          <p className="text-slate-500 text-sm mt-1">Unggah dan pantau status revisi dokumen akhir Anda.</p>
        </div>
        <div className="flex gap-3">
            <div className="text-right hidden sm:block">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Progress Kelulusan</p>
                <p className="text-xl font-bold text-slate-900">25%</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-unsil-500 flex items-center justify-center bg-white shadow-sm">
                <FileText className="w-5 h-5 text-unsil-600" />
            </div>
        </div>
      </div>

      {/* ALERT BOX (JIKA ADA REVISI) */}
      <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex gap-3 items-start animate-pulse-slow">
         <div className="bg-red-100 p-2 rounded-full shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-600" />
         </div>
         <div>
            <h4 className="font-bold text-red-800 text-sm">Perhatian: Revisi Diperlukan</h4>
            <p className="text-red-700 text-xs mt-1">Dokumen "Laporan Akhir (Bab 1 - 5)" dikembalikan oleh dosen pembimbing. Harap perbaiki sebelum tanggal 12 Feb 2026.</p>
         </div>
      </div>

      {/* DOCUMENT LIST */}
      <div className="space-y-4">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                expandedId === doc.id ? 'border-unsil-400 shadow-md ring-1 ring-unsil-500/20' : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            {/* Document Header Row */}
            <div 
                onClick={() => toggleExpand(doc.id)}
                className="p-5 flex items-center justify-between cursor-pointer select-none"
            >
                <div className="flex items-center gap-4">
                    {/* Icon Type */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        doc.type === 'pdf' ? 'bg-red-100 text-red-600' : 
                        doc.type === 'docx' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                        {doc.type === 'pdf' ? <FileText className="w-5 h-5" /> : 
                         doc.type === 'docx' ? <File className="w-5 h-5" /> : <Video className="w-5 h-5" />}
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base">{doc.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Deadline: {doc.deadline}</span>
                            {doc.file_size && <span className="hidden sm:inline">• {doc.file_size}</span>}
                            {doc.version > 0 && <span className="hidden sm:inline bg-slate-100 px-1.5 rounded text-slate-600 font-medium">v{doc.version}.0</span>}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border flex items-center gap-1.5 ${getStatusColor(doc.status)}`}>
                        {doc.status === 'approved' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {doc.status === 'revision' && <XCircle className="w-3.5 h-3.5" />}
                        {getStatusLabel(doc.status)}
                    </span>
                    {expandedId === doc.id ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
            </div>

            {/* Expanded Detail Section */}
            {expandedId === doc.id && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-5 sm:p-6 animation-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        
                        {/* Left: Feedback & History */}
                        <div className="lg:col-span-2 space-y-4">
                            {doc.feedback && doc.status === 'revision' && (
                                <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                                    <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-red-500" />
                                        Catatan Revisi Dosen
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed bg-red-50 p-3 rounded-lg border border-red-100 italic">
                                        "{doc.feedback}"
                                    </p>
                                </div>
                            )}

                            <div>
                                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <History className="w-4 h-4 text-slate-400" />
                                    Riwayat Versi
                                </h4>
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <div className="p-3 border-b border-slate-100 flex justify-between items-center hover:bg-slate-50 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-slate-100 p-1.5 rounded text-slate-500 font-bold text-xs">v2</div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">Revisi Bab 4.pdf</p>
                                                <p className="text-xs text-slate-400">Diunggah 2 jam yang lalu oleh Anda</p>
                                            </div>
                                        </div>
                                        <button className="text-slate-400 hover:text-unsil-600"><Download className="w-4 h-4" /></button>
                                    </div>
                                    <div className="p-3 flex justify-between items-center hover:bg-slate-50 transition-colors opacity-60">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-slate-100 p-1.5 rounded text-slate-500 font-bold text-xs">v1</div>
                                            <div>
                                                <p className="text-sm font-medium text-slate-900">Draft Awal.pdf</p>
                                                <p className="text-xs text-slate-400">Diunggah 3 hari yang lalu</p>
                                            </div>
                                        </div>
                                        <button className="text-slate-400 hover:text-unsil-600"><Download className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Upload Action */}
                        <div>
                            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">
                                {doc.status === 'not_submitted' ? 'Unggah Berkas' : 'Unggah Revisi'}
                            </h4>
                            
                            {doc.status === 'approved' ? (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h5 className="font-bold text-green-800 text-sm">Dokumen Final</h5>
                                    <p className="text-green-700 text-xs mt-1">Tidak ada tindakan diperlukan.</p>
                                </div>
                            ) : (
                                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-slate-50 hover:border-unsil-400 transition-all cursor-pointer group h-full max-h-62.5">
                                    <div className="bg-slate-50 p-3 rounded-full mb-4 group-hover:bg-unsil-50 group-hover:text-unsil-600 transition-colors">
                                        {doc.type === 'link' ? <LinkIcon className="w-6 h-6 text-slate-400 group-hover:text-unsil-500" /> : <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-unsil-500" />}
                                    </div>
                                    
                                    {doc.type === 'link' ? (
                                        <div className="w-full">
                                            <p className="text-sm font-bold text-slate-700 mb-2">Masukkan URL Video</p>
                                            <input type="text" placeholder="https://youtube.com/..." className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-unsil-500/20 outline-none" />
                                            <button className="mt-3 w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800">Simpan Link</button>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-sm font-bold text-slate-700">Drag & drop file di sini</p>
                                            <p className="text-xs text-slate-400 mt-1 mb-4">Format {doc.type.toUpperCase()}, Maks 10MB</p>
                                            <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-lg group-hover:border-unsil-500 group-hover:text-unsil-600 transition-colors shadow-sm">
                                                Pilih File
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pt-8 border-t border-slate-200">
         <p className="text-slate-400 text-xs">
            Butuh bantuan format laporan? <a href="#" className="text-unsil-600 hover:underline">Unduh Template Laporan KKN 2026</a>
         </p>
      </div>

    </div>
  );
}