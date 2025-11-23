import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Datenschutzerklärung</h1>
          </div>
          <p className="text-xl opacity-90">Stand: Januar 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
          {/* Datenschutz auf einen Blick */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Allgemeine Hinweise</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Datenerfassung auf dieser Website</h3>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Wer ist verantwortlich für die Datenerfassung?
            </h4>
            <div className="bg-green-50 p-6 rounded-xl mb-6">
              <p className="font-semibold text-gray-900 mb-3">Verantwortlich:</p>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-green-800 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ästhetik Praxis Aljeroudy</p>
                    <p>[PLATZHALTER: Ihre vollständige Adresse]</p>
                    <p>45XXX Essen-Stoppenberg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-green-800" />
                  <p>+49 176 41454381</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-green-800" />
                  <p>[PLATZHALTER: kontakt@praxis-aljeroudy.de]</p>
                </div>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Wie erfassen wir Ihre Daten?
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Ihre Daten werden erfasst, wenn Sie uns diese mitteilen (z.B. Kontaktformular)</li>
              <li>Andere Daten werden automatisch beim Besuch der Website erfasst (technische Daten)</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Wofür nutzen wir Ihre Daten?
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
              <li>Zur Abwicklung von Terminanfragen und Patientenkommunikation</li>
              <li>Zur Verbesserung der Website-Funktionalität</li>
              <li>Zur Erfüllung rechtlicher Verpflichtungen</li>
            </ul>

            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht gegen die Verarbeitung</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde</li>
            </ul>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">2. Hosting</h2>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Externer Hosting-Provider</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an sicherer und effizienter Bereitstellung)
            </p>
          </section>

          {/* Allgemeine Hinweise */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">SSL/TLS-Verschlüsselung</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf
              "https://" wechselt.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Speicherdauer</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Soweit keine spezifischere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
              Bei gesetzlichen Aufbewahrungspflichten (z.B. für medizinische Unterlagen) werden
              die Daten für die Dauer der Aufbewahrungspflicht gespeichert.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Gesetzliche Aufbewahrungsfristen
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Für medizinische Behandlungsunterlagen gelten besondere Aufbewahrungsfristen von{' '}
              <strong>10 Jahren</strong> nach Abschluss der Behandlung gemäß § 630f BGB.
            </p>
          </section>

          {/* Datenerfassung */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Server-Log-Dateien</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in
              Server-Log-Dateien:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Speicherdauer:</strong> 7 Tage
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Kontaktformular</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden folgende Daten
              erhoben:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer (optional)</li>
              <li>Nachrichtentext</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage,
              danach Löschung oder Archivierung bei berechtigtem Interesse
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Terminbuchung</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Für Terminvereinbarungen erheben wir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Vor- und Nachname</li>
              <li>Telefonnummer</li>
              <li>E-Mail-Adresse</li>
              <li>Gewünschte Behandlung</li>
              <li>Wunschtermin</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp Business</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn Sie uns per WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten über WhatsApp (Meta Platforms Ireland Limited)
              verarbeitet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Hinweis:</strong> WhatsApp kann Daten in die USA übermitteln. Die Nutzung
              erfolgt nur mit Ihrer ausdrücklichen Einwilligung.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
            </p>
          </section>

          {/* Analyse-Tools */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              5. Analyse-Tools und Werbung
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Google Analytics</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
              die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google Analytics verwendet Cookies und ermöglicht eine Analyse der Benutzung der
              Website. Die IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse innerhalb von
              Mitgliedstaaten der EU gekürzt wird.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li><strong>Anbieter:</strong> Google Ireland Limited</li>
              <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)</li>
              <li><strong>Speicherdauer:</strong> 14 Monate</li>
              <li><strong>Widerspruch:</strong> Cookie-Einstellungen anpassen</li>
            </ul>
          </section>

          {/* Social Media */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">6. Social Media</h2>

            <h3 className="text-xl font-bold text-gray-900 mb-3">Social-Media-Profile</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir unterhalten öffentlich zugängliche Profile auf folgenden Plattformen:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Instagram: [Ihr Instagram-Profil]</li>
              <li>Facebook: [Ihr Facebook-Profil]</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Beim Besuch dieser Profile gelten die Datenschutzerklärungen der jeweiligen
              Plattformen. Wir haben keinen Einfluss auf die erhobenen Daten und deren Verarbeitung.
            </p>
          </section>

          {/* Ihre Rechte */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">7. Ihre Rechte</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Auskunftsrecht</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten
                  personenbezogenen Daten zu erhalten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recht auf Berichtigung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, die unverzügliche Berichtigung unrichtiger oder
                  Vervollständigung Ihrer bei uns gespeicherten Daten zu verlangen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Recht auf Löschung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten Daten zu verlangen,
                  sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Recht auf Einschränkung der Verarbeitung
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Recht auf Datenübertragbarkeit
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder zur
                  Vertragserfüllung verarbeiten, in einem strukturierten, gängigen Format zu erhalten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Widerspruchsrecht</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer personenbezogenen
                  Daten Widerspruch einzulegen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beschwerderecht</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren:
                </p>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="font-semibold text-gray-900 mb-2">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
                  </p>
                  <p className="text-gray-700">Postfach 20 04 44</p>
                  <p className="text-gray-700">40102 Düsseldorf</p>
                  <p className="text-gray-700 mt-2">Tel: 0211/38424-0</p>
                  <p className="text-gray-700">E-Mail: poststelle@ldi.nrw.de</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-3xl font-bold text-green-800 mb-6">8. Kontakt</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte:
            </p>
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 mb-3">Ästhetik Praxis Aljeroudy</p>
              <div className="space-y-2 text-gray-700">
                <p>[PLATZHALTER: Vollständige Adresse]</p>
                <p>Tel: +49 176 41454381</p>
                <p>E-Mail: [PLATZHALTER: kontakt@praxis-aljeroudy.de]</p>
              </div>
            </div>
          </section>

          {/* Stand */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>Stand dieser Datenschutzerklärung:</strong> Januar 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
