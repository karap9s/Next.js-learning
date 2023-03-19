import Layout from '@/components/Layout';
import '@/styles/globals.scss';
import Head from 'next/head';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;