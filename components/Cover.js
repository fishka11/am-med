import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import styles from './Cover.module.scss';

export default function Cover({ bg, headerText, button }) {
  const coverBackgroundRef = useRef(null);
  useEffect(() => {
    const coverBackgroundPic = coverBackgroundRef.current;
    coverBackgroundPic.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 173, 9, 0.2)), url(${bg.picture.url})`;
    coverBackgroundPic.style.backgroundPositionY = `${bg.verticalShift}%`;
  }, [bg]);

  return (
    <Container
      ref={coverBackgroundRef}
      fluid
      className={`${styles.background}`}
    >
      <Container fluid>
        <div className={`${styles.textBackground} pt-4 pb-4 mb-5`}>
          <Row className="justify-content-center">
            <Col
              lg="4"
              md="6"
              sm="8"
              xs="12"
              className={`${styles.logoContainer} col-auto`}
            >
              <Image
                className={`${styles.logo} mt-4 mb-4`}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
                src="/images/logoAmMed.svg"
                alt="Logo AM-MED Transport odpadów medycznych"
              ></Image>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className={`${styles.headerText}`}>
              <ReactMarkdown>{headerText}</ReactMarkdown>
            </Col>
          </Row>
        </div>

        <Row className="justify-content-center">
          <Col className="col-auto">
            <Link
              className={`${styles.button} btn btn-primary`}
              href={`${button.buttonUrl}`}
              role="button"
            >
              {button.buttonText}
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
