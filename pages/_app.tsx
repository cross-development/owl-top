// Core
import Head from 'next/head';
// Interfaces and types
import type { AppProps } from 'next/app';
// Styles
import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>OWL Top - наш лучший топ</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
  </>
);

export default MyApp;
