import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { appWithTranslation, UserConfig } from 'next-i18next';
import i18nConfig from '../next-i18next.config';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to core!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(CustomApp, i18nConfig as UserConfig);