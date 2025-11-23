import React, { useState } from 'react';
import { Cookie } from 'lucide-react';
import { setConsentStatus, getConsentStatus } from '../utils/cookieConsent';

const CookieRichtlinie: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenSettings = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <Cookie size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie-Richtlinie</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Was sind Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie
              eine Website besuchen. Sie helfen uns, die Website funktional zu gestalten, die
              Leistung zu verbessern und relevante Informationen bereitzustellen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Welche Cookies verwenden wir?
            </h2>

            {/* Essenzielle Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ✅ Essenzielle Cookies (immer aktiv)
              </h3>
              <p className="text-gray-700 mb-4">
                Diese Cookies sind notwendig, damit die Website ordnungsgemäß funktioniert.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie-Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Zweck</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Laufzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
                      <td className="border border-gray-300 px-4 py-2">
                        Speichert Ihre Cookie-Präferenzen
                      </td>
                      <td className="border border-gray-300 px-4 py-2">12 Monate</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">session_id</td>
                      <td className="border border-gray-300 px-4 py-2">Session-Verwaltung</td>
                      <td className="border border-gray-300 px-4 py-2">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Analyse-Cookies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📊 Analyse-Cookies (mit Einwilligung)
              </h3>
              <p className="text-gray-700 mb-4">
                Diese Cookies helfen uns, die Nutzung der Website zu analysieren und zu verbessern.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">Cookie-Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Anbieter</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Zweck</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Laufzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_ga</td>
                      <td className="border border-gray-300 px-4 py-2">Google</td>
                      <td className="border border-gray-300 px-4 py-2">Besucheranalyse</td>
                      <td className="border border-gray-300 px-4 py-2">2 Jahre</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">_gid</td>
                      <td className="border border-gray-300 px-4 py-2">Google</td>
                      <td className="border border-gray-300 px-4 py-2">Besucheranalyse</td>
                      <td className="border border-gray-300 px-4 py-2">24 Stunden</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing-Cookies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎯 Marketing-Cookies (mit Einwilligung)
              </h3>
              <p className="text-gray-700">
                Derzeit setzen wir keine Marketing-Cookies ein.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Ihre Cookie-Einstellungen verwalten
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sie können Ihre Cookie-Einstellungen jederzeit ändern. Klicken Sie auf den Button,
              um Ihre Präferenzen anzupassen:
            </p>
            <button
              onClick={handleOpenSettings}
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Cookie size={24} />
              <span>Cookie-Einstellungen öffnen</span>
            </button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Cookies im Browser löschen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sie können Cookies auch direkt in Ihrem Browser verwalten und löschen:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">Chrome:</span>
                <span>Einstellungen → Datenschutz und Sicherheit → Browserdaten löschen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">Firefox:</span>
                <span>Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">Safari:</span>
                <span>Einstellungen → Datenschutz → Website-Daten verwalten</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold min-w-[100px]">Edge:</span>
                <span>Einstellungen → Datenschutz → Cookies und Websitedaten</span>
              </li>
            </ul>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-2">💡 Wichtiger Hinweis</h3>
            <p className="text-blue-800 leading-relaxed">
              Wenn Sie alle Cookies ablehnen, können einige Funktionen der Website möglicherweise
              nicht richtig funktionieren. Essenzielle Cookies sind für den Betrieb der Website
              erforderlich und können nicht deaktiviert werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Weitere Informationen</h2>
            <p className="text-gray-700 leading-relaxed">
              Weitere Informationen zum Datenschutz und zur Verarbeitung Ihrer Daten finden Sie in
              unserer{' '}
              <a href="/datenschutz" className="text-green-800 hover:underline font-semibold">
                Datenschutzerklärung
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookieRichtlinie;
