import React from 'react';
import styles from './ExpertSteps.module.css';

const steps = [
  {
    step: "01",
    label: "UX / UI Design",
    title: "Wordpress",
    description: "Als Freelancer bleibe ich Ihr direkter Ansprechpartner – persönlich und flexibel. Für Projekte, die mehr als eine Person erfordern, arbeite ich mit vertrauten Experten wie Mahmoud Kanaan zusammen der ein erfahrener Fullstack WordPress-Entwickler, PHP-Experte und Spezialist für Facebook Advertising ist. Auch für Fotografie habe ich die richtigen Partner an meiner Seite. So stellen wir sicher, dass alle Anforderungen professionell und effizient umgesetzt werden."
  },
  {
    step: "02",
    label: "Lass Sie sich finden",
    title: "SEO",
    description: "Wie komme ich auf die erste Seite bei Google? Der Schlüssel liegt in einer durchdachten SEO-Strategie: Sauberer Code, Onpage-Optimierung und eine professionelle Präsentation Ihrer Website sind entscheidend. So machen wir Ihre Seite nicht nur für Suchmaschinen, sondern auch für Ihre Besucher attraktiv."
  },
  {
    step: "03",
    label: "Richtig in Szene gesetzt",
    title: "Fotografie",
    description: "Ein gutes Webdesign erzählt die Geschichte Ihres Unternehmens und verstärkt dessen Botschaft. Bilder spielen dabei eine entscheidende Rolle: Sie ziehen Aufmerksamkeit auf sich, wecken Emotionen und präsentieren Ihre Produkte im besten Licht. Bei der Umsetzung arbeite ich eng mit einem professionellen Fotografen zusammen, um Ihre Produkte und Leistungen visuell eindrucksvoll in Szene zu setzen und einen bleibenden Eindruck zu hinterlassen."
  },
  {
    step: "04",
    label: "Rundum Abgesichert",
    title: "Rechtliches",
    description: "Die Welt von Technik und Recht wird immer komplexer. Deshalb ist mein Rechtsanwalt seit 2012 auf IT- und Medienrecht spezialisiert und kümmert sich um Ihre rechtlichen Anliegen – schnell und unkompliziert."
  }
];

const ExpertSteps = () => {
  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <h3 className={styles.smallHeading}>Gemeinsam ans Ziel</h3>
        <h2 className={styles.largeHeading}>Ein Freelancer, viele Möglichkeiten</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className={styles.stepBlock}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{step.step}</span>
                  <span className={styles.stepText}> | {step.label}</span>
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

export default ExpertSteps;
