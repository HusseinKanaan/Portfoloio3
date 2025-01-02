import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = ({ toggleSettings }) => {
  const [isVisible, setIsVisible] = useState(false); // Startet standardmäßig als unsichtbar
  const [settingsVisible, setSettingsVisible] = useState(false);

  // Beim ersten Render überprüfen, ob ein Consent gespeichert ist
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true); // Nur anzeigen, wenn kein Consent gespeichert ist
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const toggleSettingsHandler = () => {
    setSettingsVisible(!settingsVisible);
    if (toggleSettings) toggleSettings(); // Optional: Falls eine äußere Funktion übergeben wird
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`fixed-bottom bg-light py-3 px-4 shadow ${styles.cookieBanner}`}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">
          Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.{' '}
          <button className="btn btn-link p-0" onClick={toggleSettingsHandler}>
            Cookie-Einstellungen
          </button>
        </p>
        <div>
          <button className="btn btn-success btn-sm me-2" onClick={handleAccept}>
            Alle akzeptieren
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleDecline}>
            Ablehnen
          </button>
        </div>
      </div>
      {settingsVisible && (
        <div className="mt-3 border-top pt-3">
          <h6>Cookie-Einstellungen</h6>
          <p>Sie können auswählen, welche Arten von Cookies Sie zulassen möchten:</p>
          <ul>
            <li>
              <input type="checkbox" id="essential" checked disabled />
              <label htmlFor="essential"> Notwendige Cookies (immer aktiv)</label>
            </li>
            <li>
              <input type="checkbox" id="analytics" />
              <label htmlFor="analytics"> Analyse-Cookies</label>
            </li>
            <li>
              <input type="checkbox" id="marketing" />
              <label htmlFor="marketing"> Marketing-Cookies</label>
            </li>
          </ul>
          <button className="btn btn-primary btn-sm" onClick={handleAccept}>
            Auswahl speichern
          </button>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
