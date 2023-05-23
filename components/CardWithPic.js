import Image from 'next/image';
import { Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import styles from './CardWithPic.module.scss';

export default function CardWitIcon({ pic, title, text }) {
  return (
    <Col md={6} lg={4} className={styles.card}>
      <div className={styles.picContainer}>
        <Image
          className={styles.pic}
          src={pic.url}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.innerCard}>
        <h2>{title}</h2>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </Col>
  );
}
