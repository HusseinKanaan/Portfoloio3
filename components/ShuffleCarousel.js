
import { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export default function ShuffleCarousel() {
  // Verwende useMemo, um das slides-Array zu speichern
  const slides = useMemo(() => [
    { id: 1, image: '/images/image1.jpg', alt: 'Slide 1' },
    { id: 2, image: '/images/image2.jpg', alt: 'Slide 2' },
    { id: 3, image: '/images/image3.jpg', alt: 'Slide 3' },
  ], []);

  const [shuffledSlides, setShuffledSlides] = useState([]);

  const shuffleArray = (array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    // Alle Slides außer `image2` mischen
    const otherSlides = slides.filter(slide => slide.id !== 2);
    const shuffled = shuffleArray(otherSlides);

    // `image2` als erstes Element hinzufügen
    setShuffledSlides([{ id: 2, image: '/images/image2.jpg', alt: 'Slide 2' }, ...shuffled]);
  }, [slides]); // Jetzt bleibt slides stabil


  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000" /* Schnellere Intervalle */
    >
      <div className="carousel-indicators">
        {shuffledSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner custom-height-portfolio">
        {shuffledSlides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <Image
              src={slide.image}
              className="d-block mx-auto"
              alt={slide.alt}
              width={700}
              height={700}
              priority={index === 0}
              style={{ width: '100%', height: 'auto', maxWidth: '700px' }}
              loading={index === 0 ? 'eager' : 'lazy'}

            />
          </div>
        ))}
      </div>
      <div>
      </div>
        <div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>

        <div>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

  );
}
