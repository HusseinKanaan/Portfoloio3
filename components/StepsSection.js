// components/StepsSection.js
import React from 'react';
import styles from './StepsSection.module.css'; // Stelle sicher, dass du diese CSS-Datei erstellst.

const steps = [
  {
    step: 1,
    title: "Erstgespräch",
    description: "Wir besprechen Ihre Anforderungen und Wünsche."
  },
  {
    step: 2,
    title: "Angebotserstellung",
    description: "Sie erhalten ein individuelles Angebot."
  },
  {
    step: 3,
    title: "Konzept",
    description: "Wir entwickeln ein maßgeschneidertes Konzept."
  },
  {
    step: 4,
    title: "Design",
    description: "Das Design wird nach Ihren Vorstellungen erstellt."
  },
  {
    step: 5,
    title: "Umsetzung",
    description: "Ihre Website wird technisch umgesetzt."
  },
  {
    step: 6,
    title: "Launch",
    description: "Die Website geht live."
  }
];

const StepsSection = () => {
  return (
    <section className={`${styles.stepsSection} py-5`}>
      <div className="container">
        <h2 className="text-center mb-4">In 6 Schritten zur neuen Website</h2>
        <p className="text-center mb-5">Mein Ablauf für Ihr neues Webdesign</p>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h3 className={styles.stepNumber}>{step.step}</h3>
                  <h5 className={styles.cardTitle}>{step.title}</h5>
                  <p className={styles.cardText}>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
