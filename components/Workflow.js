import React, { useState } from 'react';
import { Container, Row, Col, Collapse } from 'react-bootstrap';
import styles from './Workflow.module.css'; // Stelle sicher, dass du diese CSS-Datei erstellst.

const Workflow = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const workflowSteps = [
    { title: 'Phase 1: Planung', description: 'Unsere Planung sichert Ihnen effiziente und maßgeschneiderte Lösungen.' },
    { title: 'Phase 2: Design', description: 'Unsere Planung sichert Ihnen effiziente und maßgeschneiderte Lösungen.' },
    { title: 'Phase 3: Entwicklung', description: 'In der Entwicklung realisieren wir Ihre Projekte mit den neuesten Technologien.' },
    { title: 'Phase 4: Testen & Optimieren', description: 'Qualitätssicherung ist ein zentraler Bestandteil unseres Workflows.' },
    { title: 'Phase 5: Launch & Support', description: 'Wir begleiten Sie beim Launch und bieten dauerhaften Support.' },
  ];

  return (

    <Container className="my-5">
      <div className='container-fluid'>
        <div className='container'>

        <p className={`text-left mb-5 container-fluid display-6 ${styles.heading}`}>Workflow</p>
        </div>
      </div>
      <Row className="justify-content-center">
        {workflowSteps.map((step, index) => (
          <Col key={index} xs={12} md={10} className="mb-4">
            <div className={`${styles.workflowItem}`} onClick={() => toggleCollapse(index)}>
              <div className={styles.workflowHeader}>
                <p className={styles.workflowTitle}>{step.title}</p>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>&#x25BC;</span>
              </div>
              <Collapse in={openIndex === index}>
                <div className={styles.workflowContent}>
                  <p className='custom-text-overlap'>{step.description}</p>
                </div>
              </Collapse>
            </div>
          </Col>
        ))}
      </Row>
    </Container>

  );
};

export default Workflow;

