// pages/impressum.js
import Head from 'next/head';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import styles from '../styles/impressum.module.css'

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum | Portfolio</title>
      </Head>
      <StickyHeader />
      <main className={`container py-4 ${styles.impressumContainer}`}>
        <h1 className="mb-4 text-center">Impressum</h1>

        <section className="mb-4">
          <p>
            Hussein Kanaan<br>
            </br>
            Angelnstr.9 <br />
            22049 Hamburg <br />
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5">Kontakt:</h2>
          <p>
            Telefon: 015734366370<br />
            E-Mail: husseinkanaan255@gmail.com <br />
            Web: www.husseinkanaan.de
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
          <p>
            <strong>Hussein Kanaan</strong><br />
            Angelnstr.9 <br />
            22049 Hamburg <br />

            Telefon: +49 (0) 1573436630 <br />
            EMail: husseinkanaan255@gmail.com
          </p>
        </section>

        <section className="mb-4">
          <h2 className="h5">Haftungsausschluss:</h2>
          <div className="mb-3">
            <h3 className="h6">Inhalt des Onlineangebotes</h3>
            <p>
            Die bereitgestellten Informationen auf dieser Website wurden mit größter Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Aktualität, Richtigkeit, Vollständigkeit oder Qualität der bereitgestellten Inhalte. Haftungsansprüche gegen den Autor, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen oder durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Wir behalten uns ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
          </div>
          <div>
            <h3 className="h6">Verweise und Links</h3>
            <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte auf den verlinkten Seiten erkennbar. Eine ständige inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung jedoch nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </div>
          <div>
            <h3 className="h6">Urheber- und Kennzeichenrecht</h3>
            <p>
            Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Wir sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte oder lizenzfreie Werke zurückzugreifen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Impressum;
