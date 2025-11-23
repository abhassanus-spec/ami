export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie_consent';
const CONSENT_EXPIRY_DAYS = 365;

export const getConsentStatus = (): CookiePreferences | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return null;

    const consent: CookiePreferences = JSON.parse(stored);
    const expiryTime = consent.timestamp + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (Date.now() > expiryTime) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return consent;
  } catch {
    return null;
  }
};

export const setConsentStatus = (preferences: Omit<CookiePreferences, 'timestamp'>): void => {
  const consent: CookiePreferences = {
    ...preferences,
    timestamp: Date.now(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

  window.dispatchEvent(new CustomEvent('cookieConsentChange', { detail: consent }));

  if (preferences.analytics) {
    loadGoogleAnalytics();
  }
};

export const acceptAllCookies = (): void => {
  setConsentStatus({
    essential: true,
    analytics: true,
    marketing: true,
  });
};

export const acceptEssentialOnly = (): void => {
  setConsentStatus({
    essential: true,
    analytics: false,
    marketing: false,
  });
};

export const loadGoogleAnalytics = (): void => {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

  if (typeof window === 'undefined' || (window as any).gtag) return;

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=None;Secure'
    });
  `;
  document.head.appendChild(script2);
};

export const shouldShowBanner = (): boolean => {
  return getConsentStatus() === null;
};
