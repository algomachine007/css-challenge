import Bottom from '@/components/bottom';
import Layout from '@/components/layout';
import Top from '@/components/top';
import type { NextPage } from 'next';
import data from './../data/top.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <Top {...data} />
        <Bottom />
      </section>
    </Layout>
  );
};

export default Home;
