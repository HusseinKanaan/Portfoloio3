import { useState, useRef } from "react";
import { Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./FAQAccordion.module.css"; // Importiere die CSS-Datei

const faqData = [
  {
    question: "Wie hoch ist dein Stundensatz?",
    answer: `Abrechnung in 15-Minuten-Schritten:
15 Minuten = 12,50 €,
30 Minuten = 25 €,
45 Minuten = 37,50 €,
60 Minuten = 50 €,
Alternativ:
Tagessatz: 400 € für 8 Arbeitsstunden.`,
  },
  {
    question: "Wie lange dauert es, bis meine Website fertig ist?",
    answer: `Die Entwicklungsdauer hängt vom Projektumfang ab. In der Regel dauert die Erstellung einer Website mit Next.js und dem MERN-Stack etwa 4-6 Wochen. Dies umfasst Design, Entwicklung, Tests und das finalisierte Deployment.
   Faktoren, die die Dauer beeinflussen:
   Komplexität der Website (z.B. einfache Seiten oder komplexe Webanwendungen)
  Benutzeranforderungen (z.B. individuelle Features oder API-Integrationen)
   Die Zeit kann je nach Anforderungen variieren.`,
  },
  {
    question: "Bietest du Wartung und Support an         ?",
    answer: "Ja, ich biete Wartungs- und Supportleistungen für Fullstack-Projekte mit React und Next.js an. Dazu gehört die Fehlerbehebung, das Aktualisieren von Abhängigkeiten, das Optimieren der Performance und das Implementieren neuer Features.",
  },
  {
    question: "Welche Art von Websites erstellst du?",
    answer: "Ich bin spezialisiert auf die Erstellung von modernen, maßgeschneiderten Websites mit React, Next.js und MERN-Stack. Dazu gehören Unternehmensseiten, Portfolios, Landingpages, Webanwendungen und dynamische Online-Shops. Meine Expertise liegt in der Entwicklung responsiver, performanter und benutzerfreundlicher Frontend-Lösungen.",
  },
  {
    question: "Womit wurde diese Seite erstellt?",
    answer: "Meine Portfolio-Seite wurde mit dem Next.js-Framework erstellt, das auf React basiert, und verwendet Bootstrap für das Layout sowie CSS für das Styling. Alles wurde hart gecodet – jede Animation, jedes Detail und jeder einzelne Code wurden von mir manuell erstellt, ohne Abkürzungen oder Bibliotheken wie zum Beispiel jQuery oder fertige UI-Bibliotheken. Diese Entscheidung ermöglicht mir eine präzise Kontrolle über das Design und die Funktionalität der Seite.",
  },
  {
    question: "Wo befinden Sie sich? Arbeiten Sie remote?",
    answer: "Ich lebe in Norderstedt, in der Nähe von Hamburg, und arbeite remote von überall aus. Ein Hybridmodell (z. B. mehrere Tage im Büro) ist ebenfalls möglich, besonders in der Umgebung von Norderstedt und Hamburg. Ich bin flexibel und es spielt keine Rolle, ob Sie vor Ort oder remote arbeiten möchten.",
  },
];

const FAQAccordion = () => {
  const [activeKey, setActiveKey] = useState(null);
  const ref = useRef(); // Referenz für den InView-Observer
  const isInView = useInView(ref, { once: true }); // Einmalige Animation

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Row ref={ref} className={styles.faqRow}>
      {faqData.map((item, index) => (
        <Col md={4} key={index} className="mb-3"> {/* Verwende nur 4 Spalten für 3 in einer Reihe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }} // verzögert die Animation basierend auf dem Index
            className={styles.faqItem} // Hinzufügen der CSS-Klasse für das FAQ-Element
          >
            <Accordion activeKey={activeKey}>
              <Card className={`border-0 shadow-sm rounded ${styles.faqCard}`}>
                <Card.Header className={styles.faqHeader}>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className={`d-flex justify-content-between align-items-center w-100 px-3 py-3 ${styles.sibi}`}
                    style={{ cursor: "pointer" }}
                  >
                    <Button
                      variant="link"
                      className={`d-flex w-100 justify-content-between  text-decoration-none ${styles.faqButton}`}
                    >
                      {item.question}
                      <motion.i
                        animate={{
                          rotate: activeKey === index ? 180 : 0,
                          transition: { duration: 0.3 },
                        }}
                        className="fas fa-chevron-down"
                        style={{ color: "#16A085" }}
                      ></motion.i>
                    </Button>
                  </div>
                </Card.Header>
                <AnimatePresence>
                  {activeKey === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={styles.faqBody} // CSS-Klasse für den Body
                    >
                      <Card.Body className="px-3 py-3">{item.answer}</Card.Body>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </Accordion>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default FAQAccordion;
