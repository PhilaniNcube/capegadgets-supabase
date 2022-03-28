import { Fragment, useState, useMemo } from 'react'
import Head from 'next/head'
import HomepageHero from '../components/HompageHero'
import CTA from '../components/CTA'
import Featured from '../components/Featured'
import getProducts from '../lib/getProducts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Cape Gadgets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHero />
      <CTA />
      <Featured />
    </Fragment>
  )
}

export default Home
