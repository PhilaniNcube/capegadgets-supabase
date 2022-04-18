import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import slugify from 'slugify'
import supabase from '../../../utils/supabase'
import cookie from 'cookie'

const Product = ({ product, categories }) => {
  console.log(product)

  const [productName, setProductName] = useState(product.name)
  const [productSlug, setProductSlug] = useState(product.slug)
  const [productSku, setProductSku] = useState(product.sku)
  const [productSize, setProductSize] = useState(product.size)
  const [productColour, setProductColour] = useState(product.colour)
  const [productPrice, setProductPrice] = useState(product.price)
  const [productCostPrice, setProductCostPrice] = useState(product.costPrice)
  const [productBrand, setProductBrand] = useState(product.brand.id)
  const [productCategory, setProductCategory] = useState(product.category.id)
  const [productStockOnHand, setProductStockOnHand] = useState(
    product.stockOnHand
  )
  const [productImage, setProductImage] = useState(product.image)
  const [productRam, setProductRam] = useState(product.ram)
  const [productSupplier, setProductSupplier] = useState(product.supplier)
  const [productFeatured, setProductFeatured] = useState(product.featured)
  const [productBluetooth, setProductBluetooth] = useState(product.bluetooth)
  const [productDescription, setProductDescription] = useState(
    product.description
  )

  const [loading, setLoading] = useState(false)

  console.log('productFeatured', productFeatured)

  const handleSubmit = async (e) => {
    setLoading(true)

    e.preventDefault()

    alert('Make sure that prices are in cents')

    const { data, error } = await supabase
      .from('Product')
      .update({
        name: productName,
        slug: slugify(productSlug, '_'),
        featured: productFeatured,
        bluetooth: productBluetooth,
        description: productDescription,
        category: productCategory,
        sku: productSku,
        price: productPrice,
        costPrice: productCostPrice,
        colour: productColour,
        size: productSize,
      })
      .eq('id', product.id)

    console.log(data)

    setLoading(false)
  }

  return (
    <Fragment>
      <Head>
        <title> {product.name} | Cape Gadgets Admin</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-4 lg:px-0">
        <Link href="/admin/products" passHref>
          <button className="rounded bg-blue-800 px-6 py-2 text-base text-white">
            Back To Products
          </button>
        </Link>
        <h1 className="mt-2 mb-4 text-2xl font-bold text-gray-700 md:text-3xl">
          {product.name}
        </h1>

        <form id="login" onSubmit={handleSubmit}>
          <div className="bg-white">
            <div className="container mx-auto rounded bg-white">
              <div className="border-b border-gray-300 bg-white py-5">
                <div className="mx-auto flex w-11/12 items-center xl:mx-0 xl:w-full">
                  <p className="text-lg font-bold text-gray-800 ">
                    Edit Product
                  </p>
                </div>
              </div>
              <div className="mx-auto">
                <div className="mx-auto w-11/12 xl:mx-0 xl:w-9/12">
                  <div className="relative mt-8 h-48 rounded">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute h-full w-48 rounded object-cover shadow"
                    />
                    <div className="absolute top-0 right-0 bottom-0 left-0 rounded bg-black opacity-50" />
                    <div className="absolute left-0 bottom-0 mr-4 mt-4 flex cursor-pointer items-center rounded px-3 py-2">
                      <p className="text-xs text-gray-100">
                        Change Product Image
                      </p>
                      <div className="ml-2 text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 flex w-full flex-col md:w-1/2 lg:w-1/2">
                    <label
                      htmlFor="productName"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      required
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500 placeholder-gray-500  shadow-sm focus:outline-none "
                    />
                  </div>
                  <div className="mt-8 flex w-full flex-col md:w-1/2 lg:w-1/2 xl:w-3/5">
                    <label
                      htmlFor="about"
                      className="pb-2 text-sm font-bold text-gray-800"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      required
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      className="resize-none rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-10 rounded bg-white px-4">
              <div className="border-b border-gray-300 py-5 lg:w-full">
                <div className="mx-auto flex w-11/12 items-center xl:mx-0 xl:w-full">
                  <p className="text-lg font-bold text-gray-800">
                    Product Data
                  </p>
                </div>
              </div>
              <div className="mx-auto pt-4">
                <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row lg:space-x-12">
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productSlug"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Product Slug
                      </label>
                      <input
                        type="text"
                        id="productSlug"
                        name="productSlug"
                        value={productSlug}
                        onChange={(e) => setProductSlug(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 pl-3 text-sm text-gray-500 shadow-sm "
                      />
                    </div>
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productSku"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        SKU
                      </label>
                      <input
                        type="text"
                        id="productSku"
                        name="productSku"
                        required
                        value={productSku}
                        onChange={(e) => setProductSku(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm "
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:space-x-12">
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productSize"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Product Size
                      </label>
                      <input
                        type="text"
                        id="productSize"
                        name="productSize"
                        required
                        value={productSize}
                        onChange={(e) => setProductSize(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500 shadow-sm "
                      />
                    </div>

                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productColour"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Product Colour
                      </label>
                      <input
                        type="text"
                        id="productColour"
                        name="productColour"
                        required
                        value={productColour}
                        onChange={(e) => setProductColour(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:space-x-12">
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productPrice"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Selling Price in cents
                      </label>
                      <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        required
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      />
                    </div>{' '}
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productCostPrice"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Cost Price in cents
                      </label>
                      <input
                        type="number"
                        id="productCostPrice"
                        name="productCostPrice"
                        value={productCostPrice}
                        onChange={(e) => setProductCostPrice(e.target.value)}
                        required
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                    <label
                      htmlFor="productCategory"
                      className="pb-2 text-sm font-bold text-gray-800 "
                    >
                      Product Category
                    </label>
                    <select
                      type="text"
                      id="productCategory"
                      name="productCategory"
                      required
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                    >
                      <option value={productCategory}>
                        {product.category.name}
                      </option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-10 w-11/12 rounded bg-gray-100 shadow-lg lg:w-full">
              <div className="container mx-auto pb-4">
                <div className="px-8 py-4">
                  <div className="my-2 flex items-center justify-between">
                    <div className="w-9/12">
                      <p className="pb-1 text-sm text-gray-800 ">
                        Featured Product
                      </p>
                    </div>
                    <div className="relative my-5 cursor-pointer rounded shadow-sm">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="productFeatured"
                        onChange={(e) => setProductFeatured(e.target.checked)}
                        checked={productFeatured}
                        className="checkbox absolute m-1 h-6 w-6 cursor-pointer appearance-none rounded bg-white shadow-sm focus:outline-none"
                      />
                      <label
                        htmlFor="productFeatured"
                        className="toggle-label block h-8 w-16 cursor-pointer overflow-hidden rounded bg-gray-300 "
                      />
                    </div>
                  </div>
                  <div className="my-2 flex items-center justify-between">
                    <div className="w-9/12">
                      <p className="pb-1 text-sm text-gray-800 ">Bluetooth</p>
                    </div>
                    <div className="relative my-2 cursor-pointer rounded shadow-sm">
                      <input
                        type="checkbox"
                        name="toggle"
                        id="productBluetooth"
                        onChange={(e) => setProductBluetooth(e.target.checked)}
                        checked={productBluetooth}
                        className="checkbox absolute m-1 h-6 w-6 cursor-pointer appearance-none rounded bg-white shadow-sm focus:outline-none"
                      />
                      <label
                        htmlFor="productBluetooth"
                        className="toggle-label block h-8 w-16 cursor-pointer overflow-hidden rounded bg-gray-300 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto w-11/12 xl:w-full">
              <div className="flex w-full justify-end bg-white py-4  sm:px-4">
                <button
                  disabled={loading}
                  className="rounded bg-gray-700 px-24 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:outline-none"
                  type="submit"
                >
                  {loading ? 'Loading...' : 'Save'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>{' '}
      <style>
        {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
      </style>
    </Fragment>
  )
}

export default Product

export async function getServerSideProps({ req, params: { slug } }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb:token']

  supabase.auth.session = () => ({ access_token: token })

  if (user?.role !== 'supabase_admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else if (user.role === 'supabase_admin') {
    let { data: Product, error } = await supabase
      .from('Product')
      .select('*, category(id, name), brand(id, name), supplier(id, name)')
      .eq('slug', slug)
      .single()

    let { data: Category } = await supabase.from('Category').select('id, name')

    return {
      props: {
        product: Product,
        categories: Category,
      },
    }
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
