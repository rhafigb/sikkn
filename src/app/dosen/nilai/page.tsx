'use client';

import { useState, useEffect } from 'react';
import { 
  Calculator, 
  Save, 
  Search, 
  Filter, 
  FileSpreadsheet, 
  CheckCircle2, 
  CircleDashed,
  AlertCircle,
  X,
  Loader2,
  Trophy
} from 'lucide-react';

// Tipe Data Nilai Mahasiswa
interface ScoreComponents {
  etika: number;    // Bobot 20%
  proker: number;   // Bobot 40%
  laporan: number;  // Bobot 40%
}

interface StudentGrade {
  id: number;
  name: string;
  nim: string;
  group: string;
  scores: ScoreComponents | null; // Null jika belum dinilai
  finalScore: number;
  gradeLetter: string;
  status: 'published' | 'draft' | 'empty';
}

export default function PenilaianPage() {
  const [selectedStudent, setSelectedStudent] = useState<StudentGrade | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  
  // State untuk Form Input Nilai
  const [inputScores, setInputScores] = useState<ScoreComponents>({ etika: 0, proker: 0, laporan: 0 });

  // Dummy Data Mahasiswa
  const [students, setStudents] = useState<StudentGrade[]>([
    {
      id: 1,
      name: 'Rhafi Gunawan',
      nim: '197006001',
      group: 'Kelompok 14',
      scores: { etika: 90, proker: 88, laporan: 85 },
      finalScore: 87.2,
      gradeLetter: 'A',
      status: 'published'
    },
    {
      id: 2,
      name: 'Siti Aminah',
      nim: '197006022',
      group: 'Kelompok 14',
      scores: null,
      finalScore: 0,
      gradeLetter: '-',
      status: 'empty'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      nim: '197006045',
      group: 'Kelompok 21',
      scores: { etika: 80, proker: 75, laporan: 70 },
      finalScore: 74,
      gradeLetter: 'B',
      status: 'draft' // Sudah dinilai tapi belum final
    }
  ]);

  // Hitung Nilai Real-time saat input berubah
  const calculatedFinal = (
    (inputScores.etika * 0.20) + 
    (inputScores.proker * 0.40) + 
    (inputScores.laporan * 0.40)
  ).toFixed(1);

  const getGradeLetter = (score: number) => {
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'C+';
    if (score >= 60) return 'C';
    if (score >= 50) return 'D';
    return 'E';
  };

  // Membuka Modal Penilaian
  const openGradingModal = (student: StudentGrade) => {
    setSelectedStudent(student);
    if (student.scores) {
      setInputScores(student.scores);
    } else {
      setInputScores({ etika: 0, proker: 0, laporan: 0 });
    }
  };

  // Simpan Nilai
  const handleSaveGrade = () => {
    setIsSaving(true);
    setTimeout(() => {
      // Update data lokal
      const updatedStudents = students.map(s => {
        if (s.id === selectedStudent?.id) {
          const final = parseFloat(calculatedFinal);
          return {
            ...s,
            scores: inputScores,
            finalScore: final,
            gradeLetter: getGradeLetter(final),
            status: 'published' as const
          };
        }
        return s;
      });
      
      setStudents(updatedStudents);
      setIsSaving(false);
      setSelectedStudent(null);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Penilaian Akhir</h1>
          <p className="text-slate-500 text-sm mt-1">
            Input nilai Etika, Program Kerja, dan Laporan untuk kalkulasi otomatis.
          </p>
        </div>
        
        <div className="flex gap-2">
           <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors shadow-sm">
              <FileSpreadsheet className="w-4 h-4" />
              Export Excel
           </button>
        </div>
      </div>

      {/* FILTER & SEARCH */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
         <div className="flex gap-2 w-full sm:w-auto">
             <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Cari Mahasiswa..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
             </div>
             <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
                <Filter className="w-5 h-5" />
             </button>
         </div>
         
         <div className="flex items-center gap-4 text-sm">
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="text-slate-600">Sudah Dinilai ({students.filter(s => s.status === 'published').length})</span>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                 <span className="text-slate-600">Belum ({students.filter(s => s.status === 'empty').length})</span>
             </div>
         </div>
      </div>

      {/* TABLE DATA */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
         <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
               <tr>
                  <th className="px-6 py-4 font-semibold text-slate-700">Mahasiswa</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">Etika (20%)</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">Proker (40%)</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">Laporan (40%)</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">Nilai Akhir</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-center">Mutu</th>
                  <th className="px-6 py-4 font-semibold text-slate-700 text-right">Aksi</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {students.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{s.name}</div>
                        <div className="text-xs text-slate-500">{s.nim} • {s.group}</div>
                     </td>
                     <td className="px-6 py-4 text-center font-mono text-slate-600">{s.scores?.etika || '-'}</td>
                     <td className="px-6 py-4 text-center font-mono text-slate-600">{s.scores?.proker || '-'}</td>
                     <td className="px-6 py-4 text-center font-mono text-slate-600">{s.scores?.laporan || '-'}</td>
                     <td className="px-6 py-4 text-center">
                        <span className="font-bold text-slate-900">{s.finalScore || '-'}</span>
                     </td>
                     <td className="px-6 py-4 text-center">
                        {s.status === 'published' ? (
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-xs ${
                                s.gradeLetter.startsWith('A') ? 'bg-green-100 text-green-700' :
                                s.gradeLetter.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                                s.gradeLetter.startsWith('C') ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                            }`}>
                                {s.gradeLetter}
                            </span>
                        ) : (
                            <span className="text-slate-300">-</span>
                        )}
                     </td>
                     <td className="px-6 py-4 text-right">
                        <button 
                           onClick={() => openGradingModal(s)}
                           className="text-blue-600 hover:text-blue-800 font-medium text-xs border border-blue-200 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors"
                        >
                           {s.status === 'empty' ? 'Input Nilai' : 'Edit Nilai'}
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* MODAL INPUT NILAI */}
      {selectedStudent && (
         <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedStudent(null)}></div>
            
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in zoom-in duration-200">
               {/* Modal Header */}
               <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                  <div>
                     <h3 className="font-bold text-lg text-slate-900">Input Nilai</h3>
                     <p className="text-xs text-slate-500">{selectedStudent.name} ({selectedStudent.nim})</p>
                  </div>
                  <button onClick={() => setSelectedStudent(null)} className="text-slate-400 hover:bg-slate-200 p-2 rounded-full">
                     <X className="w-5 h-5" />
                  </button>
               </div>

               {/* Modal Body */}
               <div className="p-6 space-y-6">
                  
                  {/* Form Inputs */}
                  <div className="space-y-4">
                     <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-semibold text-slate-700">Etika & Kedisiplinan</label>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Bobot 20%</span>
                        </div>
                        <input 
                            type="number" 
                            min="0" max="100"
                            value={inputScores.etika}
                            onChange={(e) => setInputScores({...inputScores, etika: Number(e.target.value)})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-semibold text-slate-700">Pelaksanaan Proker</label>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Bobot 40%</span>
                        </div>
                        <input 
                            type="number" 
                            min="0" max="100"
                            value={inputScores.proker}
                            onChange={(e) => setInputScores({...inputScores, proker: Number(e.target.value)})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                     </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <label className="text-sm font-semibold text-slate-700">Kualitas Laporan Akhir</label>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Bobot 40%</span>
                        </div>
                        <input 
                            type="number" 
                            min="0" max="100"
                            value={inputScores.laporan}
                            onChange={(e) => setInputScores({...inputScores, laporan: Number(e.target.value)})}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-lg font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                     </div>
                  </div>

                  {/* Live Calculation Preview */}
                  <div className="bg-slate-900 text-white p-5 rounded-xl flex items-center justify-between shadow-lg">
                     <div>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">Prediksi Nilai Akhir</p>
                        <div className="text-3xl font-bold flex items-center gap-2">
                           {calculatedFinal}
                           <span className="text-base font-normal text-slate-500">/ 100</span>
                        </div>
                     </div>
                     <div className="text-center bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 min-w-15">
                        <p className="text-[10px] text-slate-300 mb-1">Mutu</p>
                        <p className={`text-2xl font-black ${
                            getGradeLetter(parseFloat(calculatedFinal)).startsWith('A') ? 'text-green-400' : 
                            getGradeLetter(parseFloat(calculatedFinal)).startsWith('E') ? 'text-red-400' : 'text-yellow-400'
                        }`}>
                            {getGradeLetter(parseFloat(calculatedFinal))}
                        </p>
                     </div>
                  </div>

               </div>

               {/* Footer */}
               <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3">
                  <button onClick={() => setSelectedStudent(null)} className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-200 rounded-lg">Batal</button>
                  <button 
                     onClick={handleSaveGrade}
                     disabled={isSaving}
                     className="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 flex items-center gap-2"
                  >
                     {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                     Simpan Permanen
                  </button>
               </div>
            </div>
         </div>
      )}

    </div>
  );
}