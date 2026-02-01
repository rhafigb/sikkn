import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50/80 backdrop-blur-sm fixed inset-0 z-9999">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-unsil-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-unsil-500 rounded-full"></div>
            </div>
        </div>
        <p className="text-sm font-bold text-slate-600 animate-pulse">Memuat Data...</p>
      </div>
    </div>
  );
}