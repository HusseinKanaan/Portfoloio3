import React from 'react';
import styles from './StepsSection.module.css';

const steps = [
  {
    step: "01",
    title: "Beratung",
    description: "Gemeinsam erörtern wir die Anforderungen an Ihr Projekt und dessen Umsetzung. Die Beratung bildet die Grundlage für ein erfolgreiches Konzept. Wir besprechen Ihre Ziele, Vorstellungen und Ideen für die Website. Anschließend erstelle ich Ihnen einen genauen Kostenvoranschlag."
  },
  {
    step: "02",
    title: "Angebotserstellung",
    description: "Sie erhalten von uns ein individuelles Angebot basierend auf den besprochenen Anforderungen. Wir erstellen eine transparente Kostenaufstellung und einen Zeitrahmen für die Umsetzung."
  },
  {
    step: "03",
    title: "Konzept",
    description: "Wir entwickeln ein maßgeschneidertes Konzept, das Ihre Vorstellungen widerspiegelt und Ihre Ziele optimal unterstützt. Dabei achten wir auf eine benutzerfreundliche Struktur und ansprechendes Design."
  },
  {
    step: "04",
    title: "Design",
    description: "Das Design wird nach Ihren Vorstellungen und unter Berücksichtigung der neuesten Trends erstellt. Hier gehen wir detailliert auf das visuelle Erscheinungsbild Ihrer Website ein."
  },
  {
    step: "05",
    title: "Umsetzung",
    description: "Ihre Website wird technisch umgesetzt. Dabei sorgen wir für eine saubere Programmierung und eine hohe Performance. Wir integrieren alle gewünschten Funktionen und gewährleisten eine benutzerfreundliche Bedienung."
  },
  {
    step: "06",
    title: "Launch",
    description: "Die Website geht live! Wir stellen sicher, dass alles einwandfrei funktioniert und stehen Ihnen auch nach dem Launch weiterhin für Fragen zur Verfügung."
  }
];

const StepsSection = () => {
  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <h3 className={styles.smallHeading}>In 6 Schritten zur neuen Website</h3>
        <h2 className={styles.largeHeading}>Mein Ablauf für Ihr neues Webdesign</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <span className={styles.stepText}> | Schritt</span>
                  <div className={styles.stepLine}></div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
