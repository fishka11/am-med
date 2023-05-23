import Head from 'next/head';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { useRef, useEffect } from 'react';

import { getAboutUsContent } from '@/lib/hygraphcms';
import LeadingPicture from '@/components/LeadingPicture';
import Layout from '@/components/Layout';

import styles from './onas.module.scss';

export default function AboutUs({ aboutUsContent }) {
  const pageHeaderRef = useRef(null);
  useEffect(() => {
    const pic = pageHeaderRef.current;
  }, [aboutUsContent]);

  return (
    <Layout
      email={aboutUsContent.firmDatas[0].email}
      phone={aboutUsContent.firmDatas[0].phone}
    >
      <Head>
        <meta
          name="description"
          content={aboutUsContent.aboutuses[0].seo.seoDescription}
        />
        <title>{aboutUsContent.aboutuses[0].seo.seoTitle}</title>
      </Head>
      <main className="content">
        <LeadingPicture
          ref={pageHeaderRef}
          src={aboutUsContent.aboutuses[0].headerPicture.picture.url}
          alt={aboutUsContent.aboutuses[0].title}
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1>{aboutUsContent.aboutuses[0].title}</h1>
              <ReactMarkdown>
                {aboutUsContent.aboutuses[0].text.markdown}
              </ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const aboutUsContent = (await getAboutUsContent(preview)) || [];
  return {
    props: {
      preview,
      aboutUsContent,
    },
  };
}
