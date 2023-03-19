import Heading from '@/components/Heading';
import Socials from '@/components/Socials';
import Head from 'next/head';
import styles from "../styles/Home.module.scss"

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/socials/');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials: data,
    },
  };
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Welcome page</title>
      </Head>
      <Heading text="Next.js Application" />
      <Socials socials={socials}/>
    </div>
  );
};

export default Home;
