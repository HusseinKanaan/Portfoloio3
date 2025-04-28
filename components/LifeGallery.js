import React, { useEffect, useState } from "react";
import styles from "./LifeGallery.module.css";
import Image from "next/image";


const LifeGallery = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const imageUrls = [
    "/images/treddy.jpg",
    "/images/hh.jpg",
    "/me.png",
    "/images/setup.jpg",
    "/images/fitness.jpg",
    "/images/design.jpg",
  ];

  useEffect(() => {
    imageUrls.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 150);
    });
  }, [imageUrls]);

  return (
<div className="line-piechart">
  <div className="d-flex justify-content-center">
  <div className={`${styles.lineLifeGallery}`}></div>
  </div>
    <section className={`container ${styles.lifeGallery}`}>
{/*       <div>
        <h2 className={styles.heading}>Mein Profil</h2>
        <p className={styles.description}>
          Hier sind einige Eindrücke aus meinem Leben und Werdegang.
        </p>
      </div> */}
      <div className={styles.horizontalContainer}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`${styles.gridItem} ${
              visibleItems.includes(index) ? styles.visible : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              {/* <--------------------------------- */}
{/*               <Image
                src={url}
                alt={`Lebensbild ${index + 1}`}
                width={145}
                height={97}
                className={styles.image}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default LifeGallery;
