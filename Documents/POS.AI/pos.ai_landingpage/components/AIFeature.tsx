import React from 'react';
import { Sparkles, TrendingUp, BrainCircuit, Tag, ArrowRight } from 'lucide-react';

const AIFeature: React.FC = () => {
  return (
    <section id="ai-features" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
         <div className="absolute top-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-sm font-bold mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
            INCLUS DANS LA V1
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            L'Intelligence Artificielle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Est Opérationnelle Aujourd'hui
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            POS.AI n'est pas juste une caisse, c'est votre analyste commercial personnel. Ces 3 modules IA fonctionnent en local pour booster vos revenus dès le premier jour.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/30 hover:border-indigo-400 transition-all hover:-translate-y-1 shadow-2xl shadow-indigo-900/20">
            <div className="bg-indigo-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
                <Tag className="text-indigo-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Prix Optimal</h3>
            <p className="text-slate-400 mb-4">
              Fini les hésitations. L'IA analyse l'historique de vente et la saisonnalité pour vous recommander le prix parfait et les promotions ciblées.
            </p>
            <ul className="text-sm text-indigo-300 space-y-2">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> Ajustement dynamique</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> Détection des produits dormants</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-1 shadow-2xl shadow-cyan-900/20">
            <div className="bg-cyan-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
                <TrendingUp className="text-cyan-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Prévisions de Stock</h3>
            <p className="text-slate-400 mb-4">
              Ne perdez plus de ventes. L'algorithme anticipe les ruptures de stock en calculant vos besoins exacts de réapprovisionnement.
            </p>
             <ul className="text-sm text-cyan-300 space-y-2">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> Alertes préventives</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> Calcul des quantités idéales</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition-all hover:-translate-y-1 shadow-2xl shadow-purple-900/20">
            <div className="bg-purple-900/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                <BrainCircuit className="text-purple-400 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Vente Croisée</h3>
            <p className="text-slate-400 mb-4">
              Augmentez le panier moyen sans effort. Le système suggère au vendeur les produits complémentaires les plus pertinents pendant l'encaissement.
            </p>
             <ul className="text-sm text-purple-300 space-y-2">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> Suggestions en temps réel</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-2"/> +15% de panier moyen constaté</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeature;