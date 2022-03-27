import React, { Fragment, useMemo, useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import ProductsGrid from '../../components/Products/ProductsGrid'
import getProducts from '../../lib/getProducts'
import getCategories from '../../lib/getCategories'
import supabase from '../../utils/supabase'

const index = () => {
  const [filter, setFilter] = useState('')

  const { data: products } = useQuery('products', getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, products]
  )

  return (
    <Fragment>
      <ProductsGrid
        products={filteredProducts}
        filter={filter}
        setFilter={setFilter}
      />
    </Fragment>
  )
}

export default index

export const getServerSideProps = async () => {
  const queryClient = await new QueryClient()

  await queryClient.prefetchQuery('products', getProducts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
