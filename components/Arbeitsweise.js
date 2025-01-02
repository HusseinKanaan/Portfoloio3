import styles from './Arbeitsweise.module.css';
import React from 'react';
import Image from 'next/image';


const steps = [
  {
    title: "Empathisch & Kommunikativ",
    description: "Zielführende Kommunikation ist das A & O jedes Projekts. Deshalb arbeite ich transparent und immer offen, um gemeinsam die besten Lösungen zu finden.",
    icon: "/icons/communication.svg",
    /* icon: "/images/communication.png", */
  },
  {
    title: "Zukunftsorientiertes Design",
    description: "Trends kommen und gehen, aber nachhaltiges Design bleibt. Deshalb setze ich auf visionäre Konzepte, die auch morgen noch relevant sind",
    icon: "/icons/fokus.svg",
    /* icon: "/images/focus.png", */
  },
  {
    title: "Keep it clean & simple",
    description: "Einfachheit ist der Schlüssel. Ich setze auf klare Designs ohne unnötigen Schnickschnack.",
    icon: "/icons/cleancode.svg",
    /* icon: "/images/clean-code.png", */
  },
  {
    title: `Marken & Menschen
verstehen`,
    description: "Wer die Marke und ihre Menschen versteht, erreicht gemeinsam das Ziel.",
    icon: "/icons/highfive.png",
    /* icon: "/images/high-five.png", */
  },
  {
    title: `An Herausforderungen
wachsen`,
    description: "Jedes Projekt bringt neue Herausforderungen – ich helfe, das volle Potenzial Ihrer Marke zu entfalten.​",
    icon: "/icons/growth.svg",
    /* icon: "/images/stage.png", */
  },
  {
    title: "Mein Stil: Professionell mit Persönlichkeit",
    description: "Ich sorge dafür, dass meine Kunden sich mit meiner Arbeit identifizieren können und sich deutlich von der Konkurrenz abheben.",
    icon: "/icons/handShake.svg",
    /* icon: "/images/handshake.png", */
  },
];

const Arbeitsweise = () => {
  return (
    <div className={`container ${styles.container}`}>
      {/* <Image src="/logo4.png" alt="Logo" width={100} height={100} className="img-fluid max-width-100" /> */}
      <h2 className={styles.title}>WIE ICH ARBEITE</h2>
      <p className={`${styles.subTitle}`}>Zukunft heute gestalten</p>
      <div className="row">
        {steps.map((step, index) => (
          <div className="col-md-4" key={index}>
            <div className={`card  ${styles.card}`}>
              <Image
                src={step.icon}
                width={100}
                height={100}
                className={`card-img-top ${styles.icon}`}
                alt={step.title}
              />
              <div className="card-body pt-4">
                <p className={`text-center  pb-2 fw-bold  ${styles.cardTitle}`}>{step.title}</p>
                <p className={`text-center ${styles.cardText}`}>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arbeitsweise;
