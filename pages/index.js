import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'react-bootstrap';

import { getContent } from '@/lib/hygraphcms';
import { getHomeContent } from '@/lib/hygraphcms';
import Layout from '@/components/Layout';
import Cover from '@/components/Cover';

import styles from './index.module.scss';

export default function Home({ homeContent }) {
  return (
    <Layout
      email={homeContent.firmDatas[0].email}
      phone={homeContent.firmDatas[0].phone}
    >
      <Head>
        <meta
          name="description"
          content={homeContent.homes[0].seo.seoDescription}
        />
        <title>{homeContent.homes[0].seo.seoTitle}</title>
      </Head>
      <main className="content home">
        <Cover
          className="cover"
          bg={homeContent.homes[0].headerPicture}
          headerText={homeContent.homes[0].headerText.markdown}
          button={homeContent.homes[0].button}
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <ReactMarkdown>
                {homeContent.homes[0].text.markdown}
              </ReactMarkdown>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const homeContent = (await getHomeContent(preview)) || [];
  return {
    props: {
      preview,
      homeContent,
    },
  };
}
