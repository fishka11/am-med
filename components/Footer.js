import { Container, Row, Col } from 'react-bootstrap';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`${styles.footer} mt-5`}>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <p>
              <small>© 2023 AM-MED. Wszelkie prawa zastrzeżone.</small>
            </p>
          </Col>
          <Col sm={12} md={6}>
            <p className={styles.developer}>
              <small>Projekt i kodowanie: Rafał Piaśnik</small>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
