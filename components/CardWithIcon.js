import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import styles from './CardWithIcon.module.scss';

export default function CardWithIcon({ icon, title, text }) {
  return (
    <Col md={6} lg={4} className={styles.card}>
      <div className={styles.innerCard}>
        <div className={styles.iconContainer}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
        <h2>{title}</h2>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </Col>
  );
}
