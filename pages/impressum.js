// pages/impressum.js
import Head from 'next/head';


const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum | Portfolio</title>
      </Head>
      <main className="container mt-5">
        <h1 className="mb-4">Impressum</h1>
        <p>Angaben gemäß § 5 TMG:</p>

        <p><strong>Ihr Name</strong><br />
        Ihre Adresse<br />
        Ihre Telefonnummer<br />
        Ihre E-Mail-Adresse</p>

        <h2>Vertreten durch:</h2>
        <p>Ihr Name</p>

        <h2>Kontakt:</h2>
        <p>
          Telefon: Ihre Telefonnummer<br />
          E-Mail: Ihre E-Mail-Adresse
        </p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p><strong>Ihr Name</strong><br />
        Ihre Adresse</p>

        <h2>Haftungsausschluss:</h2>
        <h3>Haftung für Inhalte</h3>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

        <h3>Haftung für Links</h3>
        <p>Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
      </main>
    </>
  );
}

export default Impressum;