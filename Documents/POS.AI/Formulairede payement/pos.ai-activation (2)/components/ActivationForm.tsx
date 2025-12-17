
import React, { useState, useEffect, useRef } from 'react';
import { Mail, Monitor, Loader2, ShieldCheck, XCircle, AlertCircle, PlayCircle, CreditCard, QrCode } from 'lucide-react';
import { ActivationFormData, ActivationStatus, Language } from '../types';
import { InputField } from './ui/InputField';
import { translations } from '../services/translations';
import { QRScanner } from './QRScanner';

const getEnv = (key: string): string | undefined => {
  try { return (import.meta as any).env[key]; } catch { return undefined; }
};

const PAYPAL_CLIENT_ID = getEnv('VITE_PAYPAL_CLIENT_ID') || 'EMHam-E8K2jdgdIGXjsyox5E6es7Gpu-_GNibJ-3pfEHCzM72UbdHmMLvQ6-9UPH2WNzKl1ewJIumyeW'; 

interface ActivationFormProps {
  onSuccess: () => void;
  lang: Language;
}

export const ActivationForm: React.FC<ActivationFormProps> = ({ onSuccess, lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState<ActivationFormData>({ machineId: '', email: '' });
  const [status, setStatus] = useState<ActivationStatus>(ActivationStatus.IDLE);
  const [errors, setErrors] = useState<Partial<ActivationFormData>>({});
  const [showPaypalButtons, setShowPaypalButtons] = useState(false);
  const [paypalError, setPaypalError] = useState<string | null>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const isInitialRendering = useRef(false);

  useEffect(() => {
    // FIX: Cast window to any to access paypal property which is loaded via external script (Line 34)
    const timer = setTimeout(() => { if (!(window as any).paypal) setLoadTimeout(true); }, 6000); 
    const checkPaypal = () => {
      // FIX: Cast window to any to access paypal property (Line 36)
      if ((window as any).paypal) {
        setSdkLoaded(true);
        setLoadTimeout(false);
        return true;
      }
      return false;
    };
    if (checkPaypal()) return;
    const scriptId = 'paypal-sdk-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR&intent=capture&disable-funding=credit,card`;
      script.async = true;
      script.onload = () => checkPaypal();
      document.head.appendChild(script);
    }
    const interval = setInterval(() => { if (checkPaypal()) { clearInterval(interval); clearTimeout(timer); } }, 1000);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<ActivationFormData> = {};
    if (!formData.machineId.trim()) newErrors.machineId = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    localStorage.setItem('pos_ai_activation_data', JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
    if (!sdkLoaded) {
      setStatus(ActivationStatus.LOADING);
      setTimeout(() => onSuccess(), 1500);
      return;
    }
    setShowPaypalButtons(true);
  };

  const onScanSuccess = (id: string) => {
    setFormData(prev => ({ ...prev, machineId: id }));
    setShowScanner(false);
  };

  useEffect(() => {
    // FIX: Cast window to any to access paypal property and prevent TypeScript errors (Line 87)
    if (showPaypalButtons && sdkLoaded && (window as any).paypal && paypalContainerRef.current && !isInitialRendering.current) {
      isInitialRendering.current = true;
      paypalContainerRef.current.innerHTML = '';
      try {
        // FIX: Access paypal.Buttons via casted window object (Line 91)
        (window as any).paypal.Buttons({
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay', height: 50 },
          createOrder: (data: any, actions: any) => actions.order.create({
            purchase_units: [{ description: `POS.AI Activation`, custom_id: formData.machineId, amount: { currency_code: 'EUR', value: '59.90' } }]
          }),
          onApprove: async (data: any, actions: any) => { await actions.order.capture(); onSuccess(); },
          onCancel: () => { setShowPaypalButtons(false); isInitialRendering.current = false; },
          onError: (err: any) => { setPaypalError("Payment error"); setShowPaypalButtons(false); isInitialRendering.current = false; }
        }).render(paypalContainerRef.current);
      } catch (err) { setShowPaypalButtons(false); isInitialRendering.current = false; }
    }
  }, [showPaypalButtons, sdkLoaded, onSuccess]);

  return (
    <div className="space-y-6">
      {showScanner && <QRScanner onScan={onScanSuccess} onClose={() => setShowScanner(false)} />}
      
      {paypalError && (
        <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-4 text-sm text-red-800 dark:text-red-400 flex gap-3 animate-in fade-in">
          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
          <p>{paypalError}</p>
        </div>
      )}

      {!showPaypalButtons && (
        <form onSubmit={handleAction} className="space-y-4">
          <div className="relative">
            <InputField
              id="machineId"
              label={t.machineIdLabel}
              placeholder={t.machinePlaceholder}
              value={formData.machineId}
              onChange={(e) => setFormData({...formData, machineId: e.target.value})}
              error={errors.machineId}
              icon={<Monitor className="h-4 w-4 text-slate-400" />}
              required
            />
            <button 
              type="button"
              onClick={() => setShowScanner(true)}
              className="absolute right-2 top-[32px] p-2 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors"
              title={t.scanTooltip}
            >
              <QrCode className="h-5 w-5" />
            </button>
          </div>

          <InputField
            id="email"
            label={t.emailLabel}
            type="email"
            placeholder={t.emailPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
            icon={<Mail className="h-4 w-4 text-slate-400" />}
            required
          />

          <button
            type="submit"
            disabled={status === ActivationStatus.LOADING}
            className={`w-full flex justify-center rounded-xl px-4 py-4 text-sm font-bold text-white shadow-xl transition-all items-center active:scale-95 ${
              status === ActivationStatus.LOADING ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {status === ActivationStatus.LOADING ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />{t.btnVerifying}</>
            ) : !sdkLoaded ? (
              <><PlayCircle className="mr-2 h-4 w-4" />{t.btnTesting}</>
            ) : (
              <><CreditCard className="mr-2 h-4 w-4" />{t.btnActivate}</>
            )}
          </button>
        </form>
      )}

      {showPaypalButtons && (
        <div className="space-y-4 paypal-fade-in text-center">
          <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full mb-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">{t.securePayment}</span>
          </div>
          <div ref={paypalContainerRef} className="min-h-[150px]">
            <div className="flex flex-col items-center justify-center py-8 text-slate-400 italic text-sm">
              <Loader2 className="h-8 w-8 animate-spin mb-2 text-indigo-500" />
            </div>
          </div>
          <button onClick={() => { isInitialRendering.current = false; setShowPaypalButtons(false); }} className="text-xs text-slate-400 hover:text-slate-600 font-medium py-2">
            {t.changeInfo}
          </button>
        </div>
      )}
    </div>
  );
};
