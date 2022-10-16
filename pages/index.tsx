import Bottom from '@/components/bottom';
import Layout from '@/components/layout';
import Top from '@/components/top';
import type { NextPage } from 'next';
import data from '@/data/top.json';
import info from '@/data/banner.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <Top {...data} />
      <Bottom info={info} />
    </Layout>
  );
};

export default Home;
