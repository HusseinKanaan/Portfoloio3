// pages/datenschutz.js
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

const Datenschutz = () => {
  return (
   // pages/datenschutz.js

    <>
      <Head>
        <title>Datenschutz | Portfolio</title>
      </Head>
      <main className="container mt-5">
        <div className="card shadow-sm p-4">
          <h1 className="mb-4 text-center text-primary">Datenschutzerklärung</h1>

          <p className="lead text-center">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Hier erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.
          </p>

          <section className="mb-5">
            <h2 className="text-secondary">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <address>
              <strong>Ihr Name</strong><br />
              Ihre Adresse<br />
              Ihre Telefonnummer<br />
              Ihre E-Mail-Adresse<br />
            </address>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>

            <h3 className="text-info">Beim Besuch der Website</h3>
            <p>
              Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert:
            </p>
            <ul className="list-group">
              <li className="list-group-item">IP-Adresse des anfragenden Rechners</li>
              <li className="list-group-item">Datum und Uhrzeit des Zugriffs</li>
              <li className="list-group-item">Name und URL der abgerufenen Datei</li>
              <li className="list-group-item">Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li className="list-group-item">Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary">3. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nur unter bestimmten Voraussetzungen:
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                Mit Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
              </li>
              <li className="list-group-item">
                Zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, sofern kein überwiegendes schutzwürdiges Interesse besteht (Art. 6 Abs. 1 S. 1 lit. f DSGVO).
              </li>
              <li className="list-group-item">
                Bei gesetzlicher Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO).
              </li>
              <li className="list-group-item">
                Zur Abwicklung von Vertragsverhältnissen (Art. 6 Abs. 1 S. 1 lit. b DSGVO).
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary">4. Cookies</h2>
            <p>
              Wir verwenden Cookies, um Ihre Nutzererfahrung zu verbessern. Sie können die Nutzung von Cookies über die Einstellungen Ihres Browsers kontrollieren.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary">5. Ihre Rechte</h2>
            <p>
              Sie haben unter anderem das Recht auf:
            </p>
            <ul className="list-group">
              <li className="list-group-item">Auskunft gemäß Art. 15 DSGVO</li>
              <li className="list-group-item">Berichtigung gemäß Art. 16 DSGVO</li>
              <li className="list-group-item">Löschung gemäß Art. 17 DSGVO</li>
              <li className="list-group-item">Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
              <li className="list-group-item">Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              <li className="list-group-item">Widerspruch gemäß Art. 21 DSGVO</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="text-secondary">6. Widerspruchsrecht</h2>
            <p>
              Sie können der Verarbeitung Ihrer personenbezogenen Daten jederzeit widersprechen, wenn dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben (Art. 21 DSGVO).
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default Datenschutz;