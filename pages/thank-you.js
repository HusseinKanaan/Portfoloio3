// pages/thank-you.js
import React from 'react';
import { useRouter } from 'next/router';

const ThankYou = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Danke für deine Nachricht!</h1>
      <p>Wir haben deine Anfrage erhalten und werden uns so schnell wie möglich bei dir melden.</p>
      <button onClick={() => router.push('/')}>Zurück zur Startseite</button>
    </div>
  );
};

export default ThankYou;
