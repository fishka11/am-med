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
  console.log(homeContent);
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
      <main className="content">
        <Cover
          className="cover"
          bg={homeContent.homes[0].backgroundPic}
          text={homeContent.homes[0].text.markdown}
          buttonText={homeContent.homes[0].buttonText}
          buttonUrl={homeContent.homes[0].buttonUrl}
          verticalShift={homeContent.homes[0].verticalShift}
        />
        {/* <section className={`section}`} id={content.aboutuses[0].anchor}>
          <AboutUs
            text={content.aboutuses[0].text.markdown}
            title={content.aboutuses[0].title}
          />
        </section>
        <hr className="hr" />
        <section
          className={`section ${styles.offer}`}
          id={content.offers[0].anchor}
        >
          <Offer
            text1={content.offers[0].text1.markdown}
            text2={content.offers[0].text2.markdown}
            title={content.offers[0].title}
          />
        </section>
        <hr className="hr" />
        <section
          className={`section ${styles.codes}`}
          id={content.codes[0].anchor}
        >
          <Codes
            text={content.codes[0].text.markdown}
            subtitle={content.codes[0].subtitle}
            title={content.codes[0].title}
            bg={content.codes[0].headerBackgroundPic}
          />
        </section> */}
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
