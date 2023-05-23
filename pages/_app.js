const { library, config } = require('@fortawesome/fontawesome-svg-core'); // Eliminates hydration error
// import { library, config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { Inter } from 'next/font/google';

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';

import { useEffect } from 'react';

config.autoAddCss = false;
library.add(fas);

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  preload: true,
  display: 'block',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <div className={`all ${inter.className}`} id="home">
      <Component {...pageProps} />
    </div>
  );
}
