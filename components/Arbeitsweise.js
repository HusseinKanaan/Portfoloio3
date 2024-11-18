import styles from './Arbeitsweise.module.css';
import React from 'react';
import Image from 'next/image';


const steps = [
  {
    title: "Empathisch & Kommunikativ",
    description: "Zielführende Kommunikation ist das A & O eines jeden erfolgreichen Projekts. Aus diesem Grund arbeite ich stets transparent und offen.",
    icon: "/icons/communication.svg",
    /* icon: "/images/communication.png", */
  },
  {
    title: "Zukunftsorientiertes Design",
    description: "Jeder Trend hat den Gegentrend bereits in der Tasche, darum ist nachhaltige und visionäre Gestaltung unabdinglich.",
    icon: "/icons/fokus.svg",
    /* icon: "/images/focus.png", */
  },
  {
    title: "Keep it clean & simple",
    description: "Mit diesem Anspruch gehe ich an jede Arbeit heran. Unnötiger Schnickschnack hat in meinen Designs nichts verloren, darum verzichte ich darauf.",
    icon: "/icons/cleancode.svg",
    /* icon: "/images/clean-code.png", */
  },
  {
    title: `Marken & Menschen
verstehen`,
    description: "Nur wer eine Marke und die Menschen hinter der Marke versteht, kann auch das gemeinsame Ziel erreichen.",
    icon: "/icons/highfive.svg",
    /* icon: "/images/high-five.png", */
  },
  {
    title: `An Herausforderungen
wachsen`,
    description: "Jedes neue Projekt ist eine neue Herausforderung - keines ist wie das Letzte. Ich helfe Ihnen dabei das volle Potenzial ihrer Marke zu entfalten.​",
    icon: "/icons/growth.svg",
    /* icon: "/images/stage.png", */
  },
  {
    title: "Mein Stil: Professionell mit Persönlichkeit",
    description: "Mir ist es wichtig, dass sich meine Kunden mit meiner Arbeit identifizieren können und sich zugleich von ihrer Konkurrenz abheben.",
    icon: "/icons/handShake.svg",
    /* icon: "/images/handshake.png", */
  },
];

const Arbeitsweise = () => {
  return (
    <div className={`container ${styles.container}`}>
      {/* <Image src="/logo4.png" alt="Logo" width={100} height={100} className="img-fluid max-width-100" /> */}
      <h2 className={styles.title}>WIE ICH ARBEITE</h2>
      <p className={`${styles.subTitle}`}>Probleme von morgen schon heute angehen</p>
      <div className="row">
        {steps.map((step, index) => (
          <div className="col-md-4" key={index}>
            <div className={`card  ${styles.card}`}>
              <img
                src={step.icon}
                width={100}
                height={100}
                className={`card-img-top ${styles.icon}`}
                alt={step.title}
              />
              <div className="card-body pt-4">
                <p className={` text-center  pb-2 fw-bold  ${styles.cardTitle}`}>{step.title}</p>
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
