import Head from './Head';
import Header from './Header';
import Footer from './Footer';

import { SocialMediaSiteTitle } from '@/lib/SiteVariables';

export default function Layout({ email, phone, children }) {
  return (
    <>
      <Head SocialMediaSiteTitle={SocialMediaSiteTitle} />
      <Header email={email} phone={phone} />
      {children}
      <Footer />
    </>
  );
}
