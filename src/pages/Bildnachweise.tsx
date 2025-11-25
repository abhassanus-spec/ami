import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Bildnachweise: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Bildnachweise & Credits | Aljeroudy Ästhetikpraxis Essen</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="legal-page">
      <div className="legal-container">
        <h1>Bildnachweise & Credits</h1>

        <section className="legal-section">
          <p>
            Wir legen großen Wert auf Transparenz und möchten allen Urhebern für ihre
            großartige Arbeit danken. Auf dieser Seite finden Sie alle Credits für
            verwendete Bilder, Icons, Schriftarten und Dienste.
          </p>
        </section>

        <section className="legal-section">
          <h2>📸 Bildmaterial</h2>

          <h3>Unsplash</h3>
          <p>
            Wir verwenden hochwertige, lizenzfreie Bilder von{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
            . Alle Bilder werden unter der{' '}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
              Unsplash Lizenz
            </a>{' '}
            verwendet, die eine kostenlose Nutzung für kommerzielle und nicht-kommerzielle
            Zwecke erlaubt.
          </p>

          <div className="credits-grid">
            <div className="credit-item">
              <strong>Hero Section - Klinikbild:</strong>
              <br />
              Foto von{' '}
              <a href="https://unsplash.com/@nci" target="_blank" rel="noopener noreferrer">
                National Cancer Institute
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>Botox Behandlung:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@testalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Testalize.me
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>Lip Filler:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@jackie_tsang"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jackie Tsang
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>Facial Filler:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@crystalsjo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crystal Jo
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>CO2 Laser:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@itfeelslikefilm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jannis Brandt
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>PRP Haarbehandlung:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@element5digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                Element5 Digital
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>Exosomen Behandlung:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@adrienolichon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adrien Olichon
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>RF-Microneedling:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@testalize"
                target="_blank"
                rel="noopener noreferrer"
              >
                Testalize.me
              </a>{' '}
              auf Unsplash
            </div>

            <div className="credit-item">
              <strong>Laser Haarentfernung:</strong>
              <br />
              Foto von{' '}
              <a
                href="https://unsplash.com/@brookecagle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brooke Cagle
              </a>{' '}
              auf Unsplash
            </div>
          </div>

          <p style={{ marginTop: '30px', fontStyle: 'italic', fontSize: '0.95rem' }}>
            Vielen Dank an alle Fotografen auf Unsplash für ihre wunderbare Arbeit!
          </p>
        </section>

        <section className="legal-section">
          <h2>🎨 Icons & Design-Elemente</h2>

          <div className="credit-item">
            <strong>Lucide Icons</strong>
            <br />
            Icons von{' '}
            <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
              Lucide
            </a>{' '}
            unter ISC Lizenz
          </div>
        </section>

        <section className="legal-section">
          <h2>🔤 Schriftarten</h2>

          <div className="credit-item">
            <strong>Google Fonts</strong>
            <br />
            Schriftarten von{' '}
            <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">
              Google Fonts
            </a>
            :
            <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
              <li>Cormorant Garamond (Überschriften)</li>
              <li>Inter (Fließtext)</li>
            </ul>
            Alle unter Open Font License
          </div>
        </section>

        <section className="legal-section">
          <h2>🌐 Externe Dienste & APIs</h2>

          <div className="credit-item">
            <strong>Google Maps</strong>
            <br />
            Kartenintegration von{' '}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>
            <br />
            Weitere Informationen:{' '}
            <a
              href="https://www.google.com/intl/de/help/terms_maps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps Nutzungsbedingungen
            </a>
          </div>

          <div className="credit-item">
            <strong>Google Fonts</strong>
            <br />
            Schriftarten-Dienst von{' '}
            <a href="https://fonts.google.com" target="_blank" rel="noopener noreferrer">
              Google
            </a>
            <br />
            Datenschutz:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </div>
        </section>

        <section className="legal-section">
          <h2>📱 Social Media</h2>

          <div className="credit-item">
            <strong>Instagram</strong>
            <br />
            Social Media Integration von{' '}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{' '}
            (Meta Platforms)
            <br />
            Datenschutz:{' '}
            <a
              href="https://help.instagram.com/519522125107875"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram Datenschutzrichtlinie
            </a>
          </div>

          <div className="credit-item">
            <strong>Facebook</strong>
            <br />
            Social Media Verlinkung zu{' '}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{' '}
            (Meta Platforms)
            <br />
            Datenschutz:{' '}
            <a
              href="https://www.facebook.com/privacy/explanation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Datenrichtlinie
            </a>
          </div>

          <div className="credit-item">
            <strong>WhatsApp Business</strong>
            <br />
            Kommunikation via{' '}
            <a
              href="https://www.whatsapp.com/business"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Business
            </a>{' '}
            (Meta Platforms)
            <br />
            Datenschutz:{' '}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Datenschutzrichtlinie
            </a>
          </div>
        </section>

        <section className="legal-section">
          <h2>🛠️ Entwicklung & Hosting</h2>

          <div className="credit-item">
            <strong>React</strong>
            <br />
            Framework von{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              React
            </a>{' '}
            (Meta Platforms) unter MIT Lizenz
          </div>

          <div className="credit-item">
            <strong>Tailwind CSS</strong>
            <br />
            CSS Framework von{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
              Tailwind Labs
            </a>{' '}
            unter MIT Lizenz
          </div>

          <div className="credit-item">
            <strong>Supabase</strong>
            <br />
            Backend-as-a-Service von{' '}
            <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
              Supabase
            </a>
          </div>

          <div className="credit-item">
            <strong>Bolt.new</strong>
            <br />
            Website entwickelt mit Unterstützung von{' '}
            <a href="https://bolt.new" target="_blank" rel="noopener noreferrer">
              Bolt.new
            </a>
          </div>
        </section>

        <section className="legal-section">
          <h2>🤖 KI-Assistenz</h2>

          <div className="credit-item">
            <strong>Claude (Anthropic)</strong>
            <br />
            Content-Erstellung und technische Beratung mit Unterstützung von{' '}
            <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer">
              Claude AI (Anthropic)
            </a>
          </div>
        </section>

        <section className="legal-section">
          <h2>©️ Eigentum der Praxis</h2>
          <p>Alle nicht oben aufgeführten Inhalte, einschließlich:</p>
          <ul>
            <li>Logo und Markenzeichen der Aljeroudy Ästhetikpraxis</li>
            <li>Original-Texte und Inhalte</li>
            <li>Eigene Fotografien der Praxisräume</li>
            <li>Behandlungsbeschreibungen</li>
          </ul>
          <p>
            sind Eigentum von Dr. med. Louay Aljairoudy / Aljeroudy Ästhetikpraxis und
            unterliegen dem deutschen Urheberrecht. Jegliche Verwendung ohne ausdrückliche
            Genehmigung ist untersagt.
          </p>
        </section>

        <section className="legal-section">
          <h2>📜 Lizenzen & Rechtliche Hinweise</h2>
          <p>
            Wir achten streng auf die Einhaltung aller Lizenzbedingungen und Urheberrechte.
            Alle verwendeten Materialien werden gemäß ihrer jeweiligen Lizenzen genutzt:
          </p>
          <ul>
            <li>
              <strong>Unsplash Lizenz:</strong> Freie Nutzung für kommerzielle und
              nicht-kommerzielle Zwecke
            </li>
            <li>
              <strong>MIT Lizenz:</strong> Offene Nutzung mit Namensnennung
            </li>
            <li>
              <strong>ISC Lizenz:</strong> Offene Nutzung mit Namensnennung
            </li>
            <li>
              <strong>Open Font License:</strong> Freie Nutzung von Schriftarten
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>📧 Kontakt</h2>
          <p>
            Falls Sie Fragen zu den verwendeten Materialien oder Credits haben, kontaktieren
            Sie uns gerne:
          </p>
          <p>
            <strong>E-Mail:</strong>{' '}
            <a href="mailto:info@praxis-aljeroudy.de">info@praxis-aljeroudy.de</a>
            <br />
            <strong>Telefon:</strong> <a href="tel:+4917641454381">+49 176 41454381</a>
          </p>
        </section>

        <p className="legal-update">Stand: November 2024</p>

        <div className="legal-buttons">
          <Link to="/" className="btn-back">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bildnachweise;
