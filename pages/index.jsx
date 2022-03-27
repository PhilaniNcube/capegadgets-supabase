import { Fragment, useState, useMemo } from 'react'
import Head from 'next/head'
import HomepageHero from '../components/HompageHero'
import CTA from '../components/CTA'
import Featured from '../components/Featured'
import getProducts from '../lib/getProducts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const Home = ({ initialData }) => {
  console.log(initialData)

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

export const getServerSideProps = async () => {
  const { products } = await getProducts()

  return {
    props: {
      initialData: products,
    },
  }
}
