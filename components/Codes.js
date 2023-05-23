import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import styles from './Codes.module.scss';

export default function Codes({ title, subtitle, text, bg }) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="h2">{title}</h2>
          <p>{subtitle}</p>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
}
