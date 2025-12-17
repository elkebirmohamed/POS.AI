import React, { useEffect, useState } from 'react';
import { CheckCircle, Mail, ArrowRight, Monitor, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../services/translations';

interface SuccessViewProps {
  onReturn: () => void;
  lang: Language;
}

export const SuccessView: React.FC<SuccessViewProps> = ({ onReturn, lang }) => {
  const t = translations[lang];
  const [data, setData] = useState<{ machineId: string; email: string } | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('pos_ai_activation_data');
    if (savedData) setData(JSON.parse(savedData));
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center py-2">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 mb-6 border-4 border-white dark:border-slate-800 shadow-md">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.paymentConfirmed}</h2>
        <p className="text-gray-500 dark:text-slate-400 text-sm mb-8 px-4 leading-relaxed">
          {t.paymentDesc}
        </p>

        <div className="bg-gray-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 text-left mb-8 shadow-inner relative overflow-hidden">
          <h3 className="text-[10px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-4">{t.recapTitle}</h3>
          <div className="space-y-4 relative z-10">
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1.5 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-gray-100 dark:border-slate-700">
                <Monitor className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">ID Machine</p>
                <p className="text-sm font-mono font-bold text-gray-800 dark:text-slate-200">{data?.machineId || '---'}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 p-1.5 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-gray-100 dark:border-slate-700">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-medium leading-none mb-1">Email</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-slate-200">{data?.email || '---'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-2xl p-5 flex items-start gap-4 text-left mb-8 shadow-xl border border-indigo-500">
          <Clock className="h-5 w-5 text-white animate-pulse mt-1" />
          <div>
            <p className="text-sm text-white font-bold mb-1">{t.deliveryTitle}</p>
            <p className="text-xs text-indigo-100 opacity-90">{t.deliveryDesc}</p>
          </div>
        </div>

        <button onClick={onReturn} className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gray-900 dark:bg-indigo-600 hover:bg-gray-800 transition-all shadow-lg group">
          {t.btnReturn}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};