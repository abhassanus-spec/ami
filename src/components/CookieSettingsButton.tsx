import React, { useState } from 'react';
import { Cookie } from 'lucide-react';
import {
  setConsentStatus,
  getConsentStatus,
  acceptAllCookies,
  acceptEssentialOnly,
  CookiePreferences,
} from '../utils/cookieConsent';

const CookieSettingsButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<Omit<CookiePreferences, 'timestamp'>>(() => {
    const current = getConsentStatus();
    return {
      essential: current?.essential ?? true,
      analytics: current?.analytics ?? false,
      marketing: current?.marketing ?? false,
    };
  });

  const handleOpenSettings = () => {
    const current = getConsentStatus();
    if (current) {
      setPreferences({
        essential: current.essential,
        analytics: current.analytics,
        marketing: current.marketing,
      });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    setConsentStatus(preferences);
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleOpenSettings}
        className="fixed bottom-6 left-6 z-40 bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Cookie-Einstellungen"
      >
        <Cookie size={24} />
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Cookie-Einstellungen
        </span>
      </button>

      {/* Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <h2 className="text-2xl font-bold text-green-800">
                Cookie-Einstellungen
              </h2>
            </div>

            <div className="p-6 space-y-6">
              {/* Essential */}
              <div className="bg-gray-50 p-5 rounded-xl border-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      ✅ Essenzielle Cookies
                    </h3>
                    <p className="text-sm text-gray-700">
                      Notwendig für die Grundfunktionen der Website.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    Immer aktiv
                  </span>
                </div>
              </div>

              {/* Analytics */}
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      📊 Analyse-Cookies
                    </h3>
                    <p className="text-sm text-gray-700">
                      Helfen uns, die Website zu verbessern.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-800"></div>
                  </label>
                </div>
              </div>

              {/* Marketing */}
              <div className="bg-white p-5 rounded-xl border-2 border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      🎯 Marketing-Cookies
                    </h3>
                    <p className="text-sm text-gray-700">
                      Für personalisierte Werbung.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-800"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 rounded-b-2xl">
              <button
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                Speichern
              </button>
              <button
                onClick={() => {
                  acceptAllCookies();
                  setShowModal(false);
                }}
                className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={() => {
                  acceptEssentialOnly();
                  setShowModal(false);
                }}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieSettingsButton;
