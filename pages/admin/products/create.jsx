import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import slugify from 'slugify'
import supabase from '../../../utils/supabase'
import cookie from 'cookie'

const Product = ({ brands, suppliers, categories }) => {
  const [productName, setProductName] = useState('')
  const [productSlug, setProductSlug] = useState('')
  const [productSku, setProductSku] = useState('')
  const [productSize, setProductSize] = useState('')
  const [productColour, setProductColour] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productCostPrice, setProductCostPrice] = useState('')
  const [productBrand, setProductBrand] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productStockOnHand, setProductStockOnHand] = useState(0)
  const [productImage, setProductImage] = useState('')
  const [productRam, setProductRam] = useState('')
  const [productSupplier, setProductSupplier] = useState('')
  const [productFeatured, setProductFeatured] = useState('')
  const [productBluetooth, setProductBluetooth] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productSpace, setProductSpace] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)

    e.preventDefault()

    alert('Make sure that prices are in cents')

    const { data, error } = await supabase
      .from('Product')
      .insert([
        {
          bluetooth: productBluetooth,
          name: productName,
          slug: slugify(productSlug, '_'),
          description: productDescription,
          sku: productSku,
          size: productSize,
          colour: productColour,
          price: productPrice,
          costPrice: productCostPrice,
          featured: productFeatured,
          category: productCategory,
          brand: productBrand,
          category: productCategory,
          stockOnHand: productStockOnHand,
          image: productImage,
          ram: productRam,
          space: productSpace,
          bluetooth: productBluetooth,
          supplier: productSupplier,
        },
      ])
      .single()

    console.log(data)

    setLoading(false)
  }

  return (
    <Fragment>
      <Head>
        <title> Create New Product | Cape Gadgets Admin</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-4 lg:px-0">
        <Link href="/admin/products" passHref>
          <button className="rounded bg-blue-800 px-6 py-2 text-base text-white">
            Back To Products
          </button>
        </Link>

        <form id="login" onSubmit={handleSubmit}>
          <div className="bg-white">
            <div className="container mx-auto rounded bg-white">
              <div className="border-b border-gray-300 bg-white py-5">
                <div className="mx-auto flex w-11/12 items-center xl:mx-0 xl:w-full">
                  <p className="text-lg font-bold text-gray-700 md:text-3xl ">
                    Create Product
                  </p>
                </div>
              </div>
              <div className="mx-auto">
                <div className="mx-auto w-11/12 xl:mx-0 xl:w-9/12">
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
                        disabled={true}
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
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row lg:space-x-12">
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
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>{' '}
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productBrand"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Brand
                      </label>
                      <select
                        type="text"
                        id="productBrand"
                        name="productBrand"
                        required
                        value={productBrand}
                        onChange={(e) => setProductBrand(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      >
                        <option value="">Select Category</option>
                        {brands.map((brand) => (
                          <option key={brand.id} value={brand.id}>
                            {brand.name}
                          </option>
                        ))}
                      </select>
                    </div>{' '}
                    <div className="mb-6 flex flex-col md:w-1/2 lg:w-1/2 xl:w-1/4">
                      <label
                        htmlFor="productSupplier"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        Product Supplier
                      </label>
                      <select
                        type="text"
                        id="productSupplier"
                        name="productSupplier"
                        required
                        value={productSupplier}
                        onChange={(e) => setProductSupplier(e.target.value)}
                        className="rounded border border-gray-400 bg-transparent py-3 px-3 text-sm text-gray-500  shadow-sm"
                      >
                        <option value="">Select Supplier</option>
                        {suppliers.map((supplier) => (
                          <option key={supplier.id} value={supplier.id}>
                            {supplier.name}
                          </option>
                        ))}
                      </select>
                    </div>
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

export async function getServerSideProps({ req }) {
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
    let { data: Supplier } = await supabase.from('Supplier').select('id, name')

    let { data: Brands, error } = await supabase
      .from('Brands')
      .select('id, name')

    let { data: Category } = await supabase.from('Category').select('id, name')

    return {
      props: {
        suppliers: Supplier,
        brands: Brands,
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
