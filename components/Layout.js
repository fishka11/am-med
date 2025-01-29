import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";

import { SocialMediaSiteTitle } from "@/lib/SiteVariables";

export default function Layout({ email, phone, phones, children }) {
  console.log(phones);

  return (
    <>
      <Head SocialMediaSiteTitle={SocialMediaSiteTitle} />
      <Header email={email} phone={phone} phones={phones} />
      {children}
      <Footer />
    </>
  );
}
