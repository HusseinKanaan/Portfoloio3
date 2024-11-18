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
    <div className={styles.imageContainer}>
      <Image
        ref={imageRef}
        src="/images/yoda.png" // Achte darauf, dass das Bild korrekt ist
        alt="yoda"
        width={600}
        height={500}
        className={styles.movingImage}
      />
      <div ref={textRef} className={styles.text}>
        <p className={`display-6 ${styles.factsHeading}`}>Random Facts</p> 
        <p>Ich trinke sehr viel Tee</p>
        <p>Ich interessiere mich für Tastaturen</p>
        <p>Beim Möbelbau werden Erinnerungen aus Holz.</p>
        <p>Ich liebe es zu kochen (und zu essen)</p>
        <p>Ich bin ein bisschen ein Sauberkeitsfanatiker</p>
        <p>Ich möchte auf Pandora leben</p>
        <p>Ich bin leicht süchtig nach Twitter</p>
        <p>Yoda ist mein Mentor</p>
      </div>
    </div>
  );
};

export default SmoothMovingImage;
