import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'https://esm.sh/html5-qrcode';
import { X } from 'lucide-react';

interface QRScannerProps {
  onScan: (decodedText: string) => void;
  onClose: () => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onScan, onClose }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(onScan, (error) => {
      // Ignorer les erreurs de scan silencieusement
    });

    return () => {
      scanner.clear().catch(error => console.error("Failed to clear scanner", error));
    };
  }, [onScan]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold dark:text-white">Scanner ID Machine</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <X className="h-5 w-5 dark:text-slate-400" />
          </button>
        </div>
        <div id="reader" className="w-full"></div>
        <div className="p-4 text-center text-xs text-slate-500">
          Placez le QR Code de votre terminal face à la caméra
        </div>
      </div>
    </div>
  );
};