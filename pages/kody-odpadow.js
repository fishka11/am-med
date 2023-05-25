import Head from 'next/head';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { useRef, useEffect } from 'react';

import { getCodeContent } from '@/lib/hygraphcms';
import LeadingPicture from '@/components/LeadingPicture';
import Layout from '@/components/Layout';

import styles from './kody.module.scss';

export default function Codes({ codeContent }) {
  const pageHeaderRef = useRef(null);
  useEffect(() => {
    const pic = pageHeaderRef.current;
  }, [codeContent]);

  return (
    <Layout
      email={codeContent.firmDatas[0].email}
      phone={codeContent.firmDatas[0].phone}
    >
      <Head>
        <meta
          name="description"
          content={codeContent.codes[0].seo.seoDescription}
        />
        <title>{codeContent.codes[0].seo.seoTitle}</title>
      </Head>
      <main className="content codes">
        <LeadingPicture
          ref={pageHeaderRef}
          src={codeContent.codes[0].headerPicture.picture.url}
          alt={codeContent.codes[0].title}
        />
        <Container className={styles.textContent}>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1>{codeContent.codes[0].title}</h1>
              <p className="lead">{codeContent.codes[0].subtitle}</p>
              <ReactMarkdown>
                {codeContent.codes[0].text.markdown}
              </ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const codeContent = (await getCodeContent(preview)) || [];
  return {
    props: {
      preview,
      codeContent,
    },
  };
}
