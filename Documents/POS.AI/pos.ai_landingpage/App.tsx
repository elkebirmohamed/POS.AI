import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AIFeature from './components/AIFeature';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Pricing from './components/Pricing';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MachineIdModal from './components/MachineIdModal';
import SettingsModal from './components/SettingsModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Theme management
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
       const savedTheme = localStorage.getItem('theme');
       if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
       if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden transition-colors duration-300">
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />
      <main className="flex-grow">
        <Hero />
        <AIFeature />
        <Features />
        <Roadmap />
        <Pricing />
        <Download />
        <FAQ />
      </main>
      <Footer />
      <MachineIdModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
};

export default App;