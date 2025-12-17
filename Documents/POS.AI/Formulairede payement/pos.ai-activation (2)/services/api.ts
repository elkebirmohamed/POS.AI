import { ActivationFormData, ServiceResponse } from '../types';

const getEnv = (key: string): string | undefined => {
  try {
    return (import.meta as any).env[key];
  } catch {
    return undefined;
  }
};

const API_BASE_URL = getEnv('VITE_API_URL') || 'https://api.pos-ai.com/v1';

export const registerPurchaseIntent = async (data: ActivationFormData): Promise<ServiceResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, source: 'activation-portal-v1' })
    });
    
    if (!response.ok) throw new Error('API Error');
    return await response.json();
  } catch (error) {
    console.warn("Note: Mode direct sans suivi d'intention.");
    return { success: true, message: "OK" };
  }
};

export const checkLicenseStatus = async (machineId: string): Promise<{status: string}> => {
  try {
    const response = await fetch(`${API_BASE_URL}/license-status/${machineId}`);
    return await response.json();
  } catch (error) {
    return { status: 'UNKNOWN' };
  }
};