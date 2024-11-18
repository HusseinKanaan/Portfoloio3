import { useState, useEffect, useRef } from 'react';

export const useMultipleScrollTextAnimation = () => {
  const [visibleTexts, setVisibleTexts] = useState([]);
  const textRefs = useRef([]);

  useEffect(() => {
    setVisibleTexts(new Array(textRefs.current.length).fill(false));
  }, [textRefs.current.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = [...visibleTexts];
        entries.forEach((entry) => {
          const index = textRefs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting && !updatedVisibility[index]) {
            updatedVisibility[index] = true;
          }
        });
        setVisibleTexts(updatedVisibility);
      },
      { threshold: 0.5 } // Startet Animation mit 5% Sichtbarkeit für sanfteren Übergang
    );

    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [textRefs, visibleTexts]);

  return { visibleTexts, textRefs };
};
