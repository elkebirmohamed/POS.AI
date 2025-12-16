import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "L'application fonctionne-t-elle vraiment sans internet ?",
    answer: "Oui, c'est notre promesse principale. POS.AI est conçu pour fonctionner 100% hors ligne. Même les modules d'Intelligence Artificielle (prévisions, prix) sont embarqués et fonctionnent localement sur votre machine sans envoyer de données à l'extérieur."
  },
  {
    question: "Qu'est-ce qu'une licence perpétuelle par machine ?",
    answer: "Contrairement aux logiciels SaaS (abonnement mensuel), POS.AI fonctionne sur un modèle d'achat unique. Vous achetez le logiciel une fois pour un ordinateur précis (identifié par son Machine ID). Il vous appartient à vie sur cet appareil. Pas de frais cachés."
  },
  {
    question: "Sur quels appareils puis-je installer POS.AI ?",
    answer: "POS.AI est compatible avec les environnements de bureau : Windows (10 et 11) et macOS (Intel et Apple Silicon). L'interface est optimisée pour le tactile, mais fonctionne parfaitement avec clavier/souris. Nous supportons les périphériques standards (imprimantes tickets, douchettes USB)."
  },
  {
    question: "Comment se passe l'activation de la clé ?",
    answer: "C'est simple : 1. Installez la version d'essai gratuite. 2. Dans le logiciel, allez dans 'Licence' pour voir votre 'ID Machine'. 3. Lors de l'achat sur ce site, entrez cet ID. 4. Vous recevez votre Clé d'Activation unique par email immédiatement."
  },
  {
    question: "Proposez-vous un support technique ?",
    answer: "Oui. L'achat de la licence inclut 12 mois de support technique par email. Nous vous aidons pour l'installation, la configuration des périphériques et l'utilisation des modules IA."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 dark:bg-brand-900/30 rounded-lg mb-4">
            <HelpCircle className="w-6 h-6 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Tout ce que vous devez savoir avant de lancer votre commerce avec POS.AI.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-200 ${
                openIndex === index 
                  ? 'border-brand-200 dark:border-brand-800 bg-brand-50/30 dark:bg-brand-900/10 shadow-sm' 
                  : 'border-slate-200 dark:border-slate-800 hover:border-brand-200 dark:hover:border-slate-700'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-700 dark:text-brand-400' : 'text-slate-900 dark:text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            Vous ne trouvez pas votre réponse ? <a href="mailto:support@pos.ai" className="text-brand-600 dark:text-brand-400 font-semibold hover:underline">Contactez notre équipe support</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;