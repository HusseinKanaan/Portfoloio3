import { useState, useRef } from "react";
import { Accordion, Card, Row, Col, Button } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import styles from "./FAQAccordion.module.css"; // Importiere die CSS-Datei

const faqData = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables server-side rendering and static site generation.",
  },
  {
    question: "How does Next.js handle routing?",
    answer: "Next.js provides a file-based routing system where each file in the pages directory automatically becomes a route.",
  },
  {
    question: "Is Bootstrap compatible with Next.js?",
    answer: "Yes! Bootstrap can be easily integrated with Next.js.",
  },
  {
    question: "What is server-side rendering (SSR)?",
    answer: "SSR is a method of rendering pages on the server.",
  },
  {
    question: "How do I deploy a Next.js app?",
    answer: "Next.js apps can be deployed on platforms like Vercel and Netlify.",
  },
  {
    question: "What is static site generation (SSG)?",
    answer: "SSG allows Next.js to pre-render pages at build time.",
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
                    className="d-flex justify-content-between align-items-center w-100 px-3 py-3"
                    style={{ cursor: "pointer" }}
                  >
                    <Button
                      variant="link"
                      className={`d-flex w-100 justify-content-between text-dark text-decoration-none ${styles.faqButton}`}
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
