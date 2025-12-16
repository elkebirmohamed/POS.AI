import React from 'react';
import { AppWindow, Apple, Download as DownloadIcon, Info } from 'lucide-react';
import Button from './Button';

const Download: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-6">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Dernière version : v1.0.4
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-4">
            Commencez votre essai gratuit
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Téléchargez POS.AI et testez toutes les fonctionnalités IA pendant 30 jours. <br />
            <span className="text-brand-600 dark:text-brand-400 font-medium">Aucune carte bancaire requise pour le téléchargement.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows Card */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="bg-blue-600 p-4 rounded-xl mb-6 shadow-lg shadow-blue-600/20">
              <AppWindow className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Windows</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Windows 10 et 11 (64-bit)</p>
            <Button variant="primary" fullWidth size="lg">
              Télécharger pour Windows
            </Button>
            <p className="mt-4 text-xs text-slate-400">.exe installer • 145 MB</p>
          </div>

          {/* MacOS Card */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-500 hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="bg-slate-900 dark:bg-black p-4 rounded-xl mb-6 shadow-lg shadow-slate-900/20 border border-slate-800">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">macOS</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Puces Intel & Apple Silicon (M1/M2/M3)</p>
            <Button variant="secondary" fullWidth size="lg">
              Télécharger pour Mac
            </Button>
            <p className="mt-4 text-xs text-slate-400">.dmg installer • 120 MB</p>
          </div>
        </div>

        {/* Important Info Box */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl p-6 flex items-start">
            <Info className="w-6 h-6 text-amber-600 dark:text-amber-500 flex-shrink-0 mr-4 mt-1" />
            <div>
              <h4 className="font-bold text-amber-900 dark:text-amber-400 text-lg mb-2">Procédure d'activation</h4>
              <p className="text-amber-800 dark:text-amber-300/80 leading-relaxed">
                Une fois POS.AI installé, lancez l'application. Rendez-vous dans <strong>Paramètres &gt; Licence</strong> pour trouver votre <strong>Machine ID</strong> unique. Vous aurez besoin de cet identifiant pour acheter votre licence perpétuelle à la fin de la période d'essai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;