import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import {
  shouldShowBanner,
  acceptAllCookies,
  acceptEssentialOnly,
  setConsentStatus,
  getConsentStatus,
  CookiePreferences,
} from '../utils/cookieConsent';

const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<Omit<CookiePreferences, 'timestamp'>>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setShowBanner(shouldShowBanner());
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
  };

  const handleEssentialOnly = () => {
    acceptEssentialOnly();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    setConsentStatus(preferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  const handleOpenSettings = () => {
    const current = getConsentStatus();
    if (current) {
      setPreferences({
        essential: current.essential,
        analytics: current.analytics,
        marketing: current.marketing,
      });
    }
    setShowSettings(true);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
          <div className="bg-white border-t-4 border-green-800 shadow-2xl">
            <div className="container mx-auto px-4 py-6 md:py-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon & Text */}
                <div className="flex-1 flex items-start gap-4">
                  <Cookie className="w-8 h-8 text-green-800 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      🍪 Cookie-Einstellungen
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website
                      zu bieten. Einige Cookies sind für den Betrieb der Website notwendig,
                      während andere uns helfen, die Website zu verbessern und zu verstehen,
                      wie Sie diese nutzen.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={handleEssentialOnly}
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Nur essenzielle
                  </button>
                  <button
                    onClick={handleOpenSettings}
                    className="px-6 py-3 bg-white hover:bg-gray-50 text-green-800 font-semibold rounded-lg border-2 border-green-800 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <Settings size={18} />
                    <span>Einstellungen</span>
                  </button>
                </div>
              </div>

              {/* Privacy Link */}
              <div className="mt-4 text-sm text-gray-600">
                Weitere Informationen finden Sie in unserer{' '}
                <a
                  href="/datenschutz"
                  className="text-green-800 hover:underline font-medium"
                >
                  Datenschutzerklärung
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-green-800">
                Cookie-Einstellungen verwalten
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Schließen"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Essential Cookies */}
              <div className="bg-gray-50 p-5 rounded-xl border-2 border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      ✅ Essenzielle Cookies
                    </h3>
                    <p className="text-sm text-gray-700">
                      Diese Cookies sind für die Grundfunktionen der Website notwendig.
                    </p>
                  </div>
                  <div className="ml-4 mt-1">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                      Immer aktiv
                    </span>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Session-Management</li>
                  <li>• Sicherheit</li>
                  <li>• Cookie-Präferenzen</li>
                </ul>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-green-800 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      📊 Analyse-Cookies
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website
                      interagieren.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Google Analytics (anonymisiert)</li>
                      <li>• Besucherstatistiken</li>
                    </ul>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-800"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-green-800 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      🎯 Marketing-Cookies
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                      Diese Cookies werden verwendet, um relevante Werbung anzuzeigen.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Social Media Integration</li>
                      <li>• Remarketing</li>
                    </ul>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-800"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 rounded-b-2xl">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                Auswahl speichern
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={handleEssentialOnly}
                className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Alle ablehnen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
