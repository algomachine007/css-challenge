import Layout from "@/components/layout"
import Top from "@/components/top"
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <Top />
      </section>

    </Layout>
  )
}

export default Home
