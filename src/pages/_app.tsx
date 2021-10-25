import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyles from '@components/GlobalStyles';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
