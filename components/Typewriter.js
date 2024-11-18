import React, { useEffect, useRef, useState } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = () => {
  const textContainerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const firstSentence = "Brauchen Sie Hilfe?.";
  const secondSentence = "Die Nr.1 aus Hamburg";

  const smoothTypewriter = (text, delay, callback) => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    textContainer.innerHTML = ''; // Clear existing content

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.innerHTML = char === " " ? "&nbsp;" : char;
      span.classList.add(styles.smooth);
      span.style.animationDelay = `${index * delay}s`;
      textContainer.appendChild(span);
    });

    setTimeout(callback, text.length * delay * 1000 + 2000);
  };

  const smoothTextRemoval = (delay, callback) => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    const spans = textContainer.querySelectorAll("span");
    spans.forEach((span, index) => {
      span.style.animation = `${styles.smoothDisappear} ${delay}s forwards`;
      span.style.animationDelay = `${index * 0.03}s`;
    });

    setTimeout(callback, spans.length * 0.03 * 1000 + delay * 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (textContainerRef.current) {
      observer.observe(textContainerRef.current);
    }

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  useEffect(() => {
    if (isInView) {
      smoothTypewriter(firstSentence, 0.05, () => {
        smoothTextRemoval(1, () => {
          smoothTypewriter(secondSentence, 0.05, () => {});
        });
      });
    }
  }, [isInView]);

  return (
    <div className={`container d-flex justify-content-center align-items-center`}>
      <div className={`${styles.textContainer} ${styles.letterSpacing}`} ref={textContainerRef}></div>
    </div>
  );
};

export default Typewriter;
