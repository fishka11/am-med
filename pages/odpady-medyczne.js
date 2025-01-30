import Head from "next/head";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import CardWithPic from "@/components/CardWithPic";
import Layout from "@/components/Layout";
import LeadingPicture from "@/components/LeadingPicture";
import { getOfferContent } from "@/lib/hygraphcms";

import styles from "./oferta.module.scss";

export default function Offer({ offerContent }) {
  const pageHeaderRef = useRef(null);
  useEffect(() => {
    const pic = pageHeaderRef.current;
  }, [offerContent]);

  return (
    <Layout
      email={offerContent.firmDatas[0].email}
      phone={offerContent.firmDatas[0].phone}
      phones={offerContent.firmDatas[0].phones}
    >
      <Head>
        <meta
          name="description"
          content={offerContent.offers[0].seo.seoDescription}
        />
        <title>{offerContent.offers[0].seo.seoTitle}</title>
      </Head>
      <main className="content">
        <LeadingPicture
          ref={pageHeaderRef}
          src={offerContent.offers[0].headerPicture.picture.url}
          alt={offerContent.offers[0].title}
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className={styles.contentText}>
              <h1>{offerContent.offers[0].title}</h1>
              <ReactMarkdown>
                {offerContent.offers[0].text1.markdown}
              </ReactMarkdown>
            </Col>
          </Row>
          <Row className={`${styles.cards} justify-content-center`}>
            {offerContent.offerCards.map((card) => {
              return (
                <CardWithPic
                  key={card.id}
                  text={card.text.markdown}
                  title={card.title}
                  pic={card.picture}
                />
              );
            })}
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <section>
                <ReactMarkdown>
                  {offerContent.offers[0].text2.markdown}
                </ReactMarkdown>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const offerContent = (await getOfferContent(preview)) || [];
  return {
    props: {
      preview,
      offerContent,
    },
  };
}
