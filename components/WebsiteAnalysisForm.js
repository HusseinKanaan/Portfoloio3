import React, { useState } from 'react';
import Image from 'next/image';
import styles from './WebsiteAnalysisForm.module.css'; // Sicherstellen, dass diese Datei existiert
import ButtonLight from '../components/ButtonLight';

const WebsiteAnalysisForm = () => {
  const [formData, setFormData] = useState({
    website: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulardaten:', formData);
  };

  return (
    <section id="regional-services" className={`${styles.customBackgroundLightblue} py-5`}>
      <div className={`${styles.customHeightContainer} d-flex flex-column justify-content-center align-items-center text-center`}>
        <h2 className="display-5 fw-bold mb-4">Website kostenlos prüfen</h2>
        <p className={`${styles.customText} mb-4`}>
          Lass deine Website analysieren – Usability, Performance und SEO im Fokus. Du erhältst eine professionelle Auswertung in Kürze, kostenlos!
        </p>

        <form onSubmit={handleSubmit} className={`${styles.customForm} w-100 d-flex flex-column align-items-center`}>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Deine Webseite"
            required
            className={`${styles.customInput} mb-3`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail-Adresse"
            required
            className={`${styles.customInput} mb-3`}
          />
          <div className="w-100 text-center">
            <ButtonLight text="Webseite jetzt prüfen" />
          </div>
        </form>
      </div>

      <div className={styles.backgroundOverlay}>
        <Image
          src="/images/hintergrund.png"
          alt="Hintergrund"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </section>
  );
};

export default WebsiteAnalysisForm;
