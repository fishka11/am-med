import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import Cover from "@/components/Cover";
import Layout from "@/components/Layout";
import { getHomeContent } from "@/lib/hygraphcms";

export default function Home({ homeContent }) {
  return (
    <Layout
      email={homeContent.firmDatas[0].email}
      phone={homeContent.firmDatas[0].phone}
      phones={homeContent.firmDatas[0].phones}
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
