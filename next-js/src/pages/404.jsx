import Heading from '@/components/Heading';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [])
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <h2>Something went wrong</h2>
    </>
  );
};

export default Error;
