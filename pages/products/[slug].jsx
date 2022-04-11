import React, { Fragment } from 'react'
import ProductDetail from '../../components/Products/ProductDetail'
import supabase from '../../utils/supabase'

const Product = ({ product }) => {
  console.log(product)

  return (
    <Fragment>
      <ProductDetail product={product} />
    </Fragment>
  )
}

export default Product

export async function getServerSideProps({ req, params: { slug } }) {
  console.log(slug)

  let { data: Product, error } = await supabase
    .from('Product')
    .select('*, category(id, name), supplier(id, name), brand(id, name)')
    .eq('slug', slug)
    .single()

  return {
    props: {
      product: Product,
    },
  }
}
