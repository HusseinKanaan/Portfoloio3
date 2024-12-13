// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Lokaler Import
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/globals.css'; // Globale Styles

import { useEffect } from 'react';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Bootstrap JS nur im Client laden
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  return (
    <>
      <Head>
        <title>Globale Seite</title>
        <meta name="trustpilot-one-time-domain-verification-id" content="60d1c9df-b59f-4018-a0d5-d0a274cc0f16" />
        
        {/* Bootstrap Icons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
