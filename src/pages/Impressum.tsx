import React from 'react';
import { FileText, MapPin, Phone, Mail } from 'lucide-react';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <FileText size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Impressum</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={24} className="text-green-800 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    Ästhetik Praxis Aljeroudy
                  </p>
                  <p className="text-gray-700">[PLATZHALTER: Inhaber Dr. Louay Aljeroudy]</p>
                  <p className="text-gray-700">[PLATZHALTER: Straße und Hausnummer]</p>
                  <p className="text-gray-700">45XXX Essen-Stoppenberg</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={24} className="text-green-800" />
                <p className="text-gray-700">+49 176 41454381</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={24} className="text-green-800" />
                <p className="text-gray-700">[PLATZHALTER: kontakt@praxis-aljeroudy.de]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Berufsbezeichnung:</strong> [z.B. Facharzt für...]</p>
              <p><strong>Zuständige Kammer:</strong> Ärztekammer Nordrhein</p>
              <p><strong>Verliehen in:</strong> Deutschland</p>
              <p className="pt-2">Es gelten folgende berufsrechtliche Regelungen:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Berufsordnung für Ärzte</li>
                <li>Heilberufsgesetz NRW</li>
              </ul>
              <p>
                Regelungen einsehbar unter:{' '}
                <a
                  href="https://www.aekno.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 hover:underline"
                >
                  www.aekno.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Aufsichtsbehörde</h2>
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 mb-2">Ärztekammer Nordrhein</p>
              <p className="text-gray-700">Tersteegenstraße 9</p>
              <p className="text-gray-700">40474 Düsseldorf</p>
              <p className="text-gray-700 mt-2">Tel: 0211/4302-0</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Angaben zur Berufshaftpflichtversicherung
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Versicherer:</strong> [PLATZHALTER: Name der Versicherung]</p>
              <p><strong>Geltungsbereich:</strong> Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Streitschlichtung</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Haftungsausschluss</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Haftung für Links</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber verantwortlich.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">Urheberrecht</h3>
            <p className="text-gray-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
