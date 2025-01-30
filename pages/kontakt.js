import Head from "next/head";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import CardWithIcon from "@/components/CardWithIcon";
import Layout from "@/components/Layout";
import LeadingPicture from "@/components/LeadingPicture";
import { getContactContent } from "@/lib/hygraphcms";

import styles from "./kontakt.module.scss";

export default function Contact({ contactContent }) {
  const pageHeaderRef = useRef(null);
  useEffect(() => {
    const pic = pageHeaderRef.current;
  }, [contactContent]);

  console.log(contactContent);
  return (
    <Layout
      email={contactContent.firmDatas[0].email}
      phone={contactContent.firmDatas[0].phone}
      phones={contactContent.firmDatas[0].phones}
    >
      <Head>
        <meta
          name="description"
          content={contactContent.contacts[0].seo.seoDescription}
        />
        <title>{contactContent.contacts[0].seo.seoTitle}</title>
      </Head>
      <main className="content contact">
        <LeadingPicture
          ref={pageHeaderRef}
          src={contactContent.contacts[0].headerPicture.picture.url}
          alt={contactContent.contacts[0].title}
        />
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className={styles.contentText}>
              <h1>{contactContent.contacts[0].title}</h1>
              <p className="lead">{contactContent.contacts[0].subtitle}</p>
            </Col>
          </Row>
          <Row className={`${styles.cards} justify-content-center`}>
            {contactContent.contactCards.map((card) => {
              return (
                <CardWithIcon
                  key={card.id}
                  text={card.text.markdown}
                  title={card.title}
                  icon={card.fontAwesomeIcon}
                />
              );
            })}
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <section>
                <p>{`NIP: ${contactContent.contacts[0].nip}`}</p>
                <p>{`REGON: ${contactContent.contacts[0].regon}`}</p>
                <p>{`Nr BDO: ${contactContent.contacts[0].bdo}`}</p>
              </section>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const contactContent = (await getContactContent(preview)) || [];
  return {
    props: {
      preview,
      contactContent,
    },
  };
}
