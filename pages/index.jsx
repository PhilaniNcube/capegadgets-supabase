import { Fragment, useState, useMemo } from 'react'
import Head from 'next/head'
import supabase from '../utils/supabase'
import HomepageHero from '../components/HompageHero'
import CTA from '../components/CTA'
import Featured from '../components/Featured'
import FeaturedProducts from '../components/FeaturedProducts'
import getProducts from '../lib/getProducts'
import { dehydrate, QueryClient, useQuery } from 'react-query'

const Home = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <title>Cape Gadgets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageHero />
      <FeaturedProducts products={products} />
      <CTA />
      <Featured />
    </Fragment>
  )
}

export default Home

export async function getServerSideProps() {
  let { data: Product, error } = await supabase
    .from('Product')
    .select('*')
    .eq('featured', true)

  return {
    props: {
      products: Product,
    },
  }
}
