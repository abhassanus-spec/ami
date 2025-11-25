import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CookieRichtlinie: React.FC = () => {
  const handleOpenSettings = () => {
    const event = new Event('openCookieSettings');
    window.dispatchEvent(event);
  };

  return (
    <>
      <Helmet>
        <title>Cookie-Richtlinie | Aljeroudy Ästhetikpraxis Essen</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="legal-page">
      <div className="legal-container">
        <h1>Cookie-Richtlinie</h1>

        <section className="legal-section">
          <h2>Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät
            gespeichert werden, wenn Sie eine Website besuchen. Sie helfen der Website,
            sich an Informationen über Ihren Besuch zu erinnern, wie Ihre bevorzugte
            Sprache und andere Einstellungen.
          </p>
        </section>

        <section className="legal-section">
          <h2>Welche Arten von Cookies verwenden wir?</h2>

          <h3>1. Essenzielle Cookies (immer aktiv)</h3>
          <p>
            Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und
            können in unseren Systemen nicht deaktiviert werden. Sie werden in der Regel
            nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer
            Serviceanforderung entsprechen.
          </p>

          <div className="cookie-table">
            <table>
              <thead>
                <tr>
                  <th>Cookie-Name</th>
                  <th>Zweck</th>
                  <th>Laufzeit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cookie_consent</td>
                  <td>Speichert Ihre Cookie-Präferenzen</td>
                  <td>12 Monate</td>
                </tr>
                <tr>
                  <td>session_id</td>
                  <td>Aufrechterhaltung der Sitzung</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>2. Analyse-Cookies (optional - nur mit Einwilligung)</h3>
          <p>
            Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen,
            damit wir die Leistung unserer Website messen und verbessern können.
          </p>

          <div className="cookie-table">
            <table>
              <thead>
                <tr>
                  <th>Cookie-Name</th>
                  <th>Anbieter</th>
                  <th>Zweck</th>
                  <th>Laufzeit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics</td>
                  <td>Unterscheidung von Benutzern</td>
                  <td>2 Jahre</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics</td>
                  <td>Unterscheidung von Benutzern</td>
                  <td>24 Stunden</td>
                </tr>
                <tr>
                  <td>_gat</td>
                  <td>Google Analytics</td>
                  <td>Anfragerate drosseln</td>
                  <td>1 Minute</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>3. Marketing-Cookies (optional - nur mit Einwilligung)</h3>
          <p>
            Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt
            werden. Derzeit setzen wir keine Marketing-Cookies ein.
          </p>
        </section>

        <section className="legal-section">
          <h2>Ihre Cookie-Einstellungen verwalten</h2>
          <p>
            Sie können Ihre Cookie-Einstellungen jederzeit ändern. Klicken Sie dafür auf
            den folgenden Button:
          </p>
          <div className="cookie-settings-btn-container">
            <button className="btn-primary" onClick={handleOpenSettings}>
              🍪 Cookie-Einstellungen öffnen
            </button>
          </div>
          <p>
            Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die
            Funktionalität der Website beeinträchtigen kann.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cookies in Ihrem Browser löschen</h2>
          <p>
            Sie können Cookies auch direkt in Ihrem Browser löschen oder blockieren:
          </p>
          <ul>
            <li>
              <strong>Google Chrome:</strong> Einstellungen → Datenschutz und Sicherheit
              → Cookies und andere Website-Daten → Alle Cookies und Website-Daten anzeigen
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Einstellungen → Datenschutz & Sicherheit
              → Cookies und Website-Daten → Daten verwalten
            </li>
            <li>
              <strong>Safari:</strong> Einstellungen → Datenschutz → Website-Daten verwalten
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Einstellungen → Cookies und
              Websiteberechtigungen → Cookies und gespeicherte Daten verwalten und löschen
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Weitere Informationen</h2>
          <p>
            Weitere Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden
            Sie in unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.
          </p>
          <p>
            Bei Fragen zu unseren Cookies können Sie uns jederzeit unter den im
            <Link to="/impressum"> Impressum</Link> angegebenen Kontaktdaten erreichen.
          </p>
        </section>

        <p className="legal-update">Stand: November 2024</p>

        <div className="legal-buttons">
          <Link to="/" className="btn-back">← Zurück zur Startseite</Link>
          <button className="btn-primary" onClick={handleOpenSettings}>
            Cookie-Einstellungen
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CookieRichtlinie;
