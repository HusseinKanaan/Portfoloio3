// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Lokaler Import
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../styles/globals.css'; // Globale Styles
import Head from 'next/head';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Bootstrap JS nur im Client laden
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  return (
    <>
      <Head>
        <title>Globale Seite</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
