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
        <h1 className={`${styles.factsHeading} display-6`}>about</h1>
        <p>Im a product designer based in sunny Sydney, Australia.
          Since 2005, Ive enjoyed turning complex problems into simple, beautiful and intuitive designs. When Im not pushing pixels, youll find me cooking, gardening or working out in the park</p>
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
