import React from 'react';
import { CheckCircle, CreditCard, BrainCircuit } from 'lucide-react';
import Button from './Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl mb-4">
            Monétisez votre succès
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Un modèle simple et transparent. Investissez dans votre outil de travail une seule fois.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: The Process */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Comment activer votre licence POS.AI ?</h3>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold text-lg border border-brand-200 dark:border-brand-800">
                    1
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Téléchargez & Testez</h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Profitez de 30 jours gratuits sans restriction avec les modules IA activés.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold text-lg border border-brand-200 dark:border-brand-800">
                    2
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Obtenez votre ID Machine</h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Dans l'application POS.AI, allez dans <em>Paramètres &gt; Licence</em>. Copiez votre identifiant unique (Machine ID).
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 font-bold text-lg border border-brand-200 dark:border-brand-800">
                    3
                  </div>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Achetez la Clé d'Activation</h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Paiement unique. Vous recevez instantanément une clé de déverrouillage perpétuelle pour cette machine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Offer */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-2 border-brand-500 p-8 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Offre de Lancement V1
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">Licence Perpétuelle POS.AI</h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">149€</span>
                <span className="ml-2 text-xl font-medium text-slate-500 dark:text-slate-400">/ machine</span>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Paiement unique. Logiciel à vie.</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                <span className="ml-3 text-slate-700 dark:text-slate-300">Utilisation illimitée (Transactions & Produits)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                <span className="ml-3 text-slate-700 dark:text-slate-300">Fonctionnement 100% Hors Ligne</span>
              </li>
              <li className="flex items-start">
                <BrainCircuit className="flex-shrink-0 w-5 h-5 text-indigo-500 mt-0.5" />
                <span className="ml-3 text-slate-900 dark:text-white font-semibold">Modules IA Inclus (Prix, Stocks, Cross-sell)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                <span className="ml-3 text-slate-700 dark:text-slate-300">Export Comptable Automatisé</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                <span className="ml-3 text-slate-700 dark:text-slate-300">Support par Email Prioritaire (12 mois)</span>
              </li>
            </ul>

            <div className="space-y-4">
               <Button 
                variant="accent" 
                fullWidth 
                size="lg" 
                onClick={() => window.open('https://posaiform-ld6bhcl9n-elkebirs-projects.vercel.app', '_blank')}
               >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Acheter la Licence
               </Button>
               <p className="text-xs text-center text-slate-400">
                 Paiement sécurisé via Stripe. Facture avec TVA incluse.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;