import Bottom from "@/components/bottom"
import Layout from "@/components/layout"
import Top from "@/components/top"
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <Top />
        <Bottom />
      </section>

    </Layout>
  )
}

export default Home
