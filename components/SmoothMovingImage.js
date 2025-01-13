import React, { useEffect, useRef } from 'react';
import styles from './SmoothMovingImage.module.css';
import Image from 'next/image';

const SmoothMovingImage = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const handleScroll = () => {
    if (imageRef.current && textRef.current) {
      const { top } = imageRef.current.getBoundingClientRect();
      if (top < window.innerHeight) {
        imageRef.current.style.transform = 'translateX(0)'; // Bild bewegen
        textRef.current.style.opacity = '1'; // Text sichtbar machen
        textRef.current.style.transform = 'translateX(0)'; // Text bewegen
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.linePiechart} `}>

    <div className={` ${styles.imageContainer}`}>
      <Image
        ref={imageRef}
        src="/images/yoda.png" // Achte darauf, dass das Bild korrekt ist
        alt="yoda"
        width={625}
        height={512.5}
        className={styles.movingImage}
        />
      <div ref={textRef} className={styles.text}>
        <p className={`display-6 ${styles.factsHeading}`}>Random Fakten</p>
        <p>Ich trinke viel Tee. Fokus braucht Treibstoff</p>
        <p>Tastaturen? Mein Universum</p>
        <p>Möbelbau? Erinnerungen aus Holz. Design hört nie auf..</p>
        <p>Kochen und essen? Beides Kunst</p>
        <p>Ich mag es sauber. Chaos stört die Pixel</p>
        <p>Ich möchte auf Pandora leben</p>
        <p>Facebook? Sucht,  mich</p>
        <p>Yoda ist mein Mentor</p>
      </div>
    </div>
        </div>
  );
};

export default SmoothMovingImage;
