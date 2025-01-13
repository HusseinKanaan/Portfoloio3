import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Status.module.css'; // Stelle sicher, dass du diese CSS-Datei erstellst.

const Status = () => {
  return (
    <Container fluid className={` ${styles.statusBox}`}>
      <Row className=" align-items-center text-center">
        <Col xs={12} md={8}>
          <div className='d-flex align-items-center'>
            <div className={`${styles.statusIndicator}`}></div>
            <p className={`${styles.statusMessage}`}>Verfügbarkeit: Frei</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Status;
