import React, { useEffect, useRef } from 'react';
import styles from './SmoothMovingImageOnLoad.module.css';
import Image from 'next/image';

const SmoothMovingImageOnLoad = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && textRef.current) {
      // Animation direkt bei Laden der Seite starten
      imageRef.current.style.transform = 'translateX(0)'; // Bild bewegt sich ins Sichtfeld
      textRef.current.style.opacity = '1'; // Text sichtbar machen
      textRef.current.style.transform = 'translateX(0)'; // Text bewegt sich ins Sichtfeld
    }
  }, []); // Leeres Dependency-Array -> Effekt nur beim Laden der Komponente

  return (
    <div className={styles.imageContainer}>
      <div ref={textRef} className={styles.text}>
        <h1 className={`${styles.factsHeading} `}>about.</h1>
        <p className={styles.heroTitle}>Ich bin Frontend-Entwickler aus Norderstedt. </p>
        <p className={styles.heroDescription}>Seit Jahren bringe ich Pixel zum Leben und verwandle digitale Ideen in funktionale Websites. Wenn ich nicht im Code versinke, schlemme ich Kaffee oder entdecke neue Technologien.</p>
      </div>
      <Image
        ref={imageRef}
        src="/me.png" // Bild-URL anpassen
        alt="yoda"
        width={600}
        height={500}
        className={styles.movingImage}
      />
    </div>
  );
};

export default SmoothMovingImageOnLoad;
