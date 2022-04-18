import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import cookie from 'cookie'
import formatter from '../../lib/format'
import supabase, { service } from '../../utils/supabase'

const orders = ({ products }) => {
  return (
    <Fragment>
      <Head>
        <title>Products | Capegadgets</title>
      </Head>
      <div className="mx-auto mt-16 w-full max-w-7xl overflow-x-auto">
        <div className="my-4 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-700 lg:text-4xl">
            Products
          </h1>
          <Link href="/admin/products/create">
            <a className="cursor-pointer bg-slate-900 px-12 py-2 text-lg text-white hover:bg-slate-700">
              Create New Product
            </a>
          </Link>
        </div>
        <table className="w-full whitespace-nowrap rounded-lg border border-gray-100">
          <thead className="border-b-2 border-b-white bg-gray-100">
            <tr className="">
              <th className="py-5 pl-4 text-left">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Name
                </p>
              </th>
              <th className="border-l border-gray-200 py-5 pl-5 text-left ">
                <p className="text-sm font-medium leading-none text-gray-900">
                  SKU{' '}
                </p>
              </th>
              <th className="py-5 pr-16 text-left">
                <div className="flex items-center">
                  <p className="pr-0.5 text-sm font-medium leading-none text-gray-900">
                    Supplier{' '}
                  </p>
                </div>
              </th>
              <th className="py-5 pr-16 text-left">
                <div className="flex items-center">
                  <p className="pr-0.5 text-sm font-medium leading-none text-gray-900">
                    Price
                  </p>
                </div>
              </th>
              <th className="py-5 text-left">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Cost Price
                </p>
              </th>
              <th className="flex items-end justify-end rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <Link
                  href={`/admin/products/${product.slug}`}
                  passHref
                  key={product.id}
                >
                  <tr className="my-1 cursor-pointer border-b-2 border-b-white bg-gray-100 hover:bg-slate-200">
                    <td className="py-3 pl-4">
                      <p className="text-sm leading-none text-gray-900">
                        {product.name}
                      </p>
                    </td>
                    <td className="border-l border-gray-200 py-3 pl-5 pr-20">
                      <p className="text-sm leading-none text-gray-900">
                        {product.sku}
                      </p>
                    </td>
                    <td className="py-3 pr-16">
                      <p className="text-sm leading-none text-gray-900">
                        {product.supplier.name}
                      </p>
                    </td>
                    <td className="py-3 pr-16">
                      <p className="text-sm font-medium leading-none text-green-800">
                        {formatter.format(product.price / 100)}
                      </p>
                    </td>
                    <td className="flex justify-between py-3 pr-6">
                      <p className="text-xs font-medium leading-none text-red-700">
                        {formatter.format(product.costPrice / 100)}
                      </p>
                    </td>
                    <td className="py-3" />
                  </tr>
                </Link>
              )
            })}

            <tr>
              <td className="py-2 pr-20 pl-4" />
              <td className="py-2 pr-12" />
              <td className="border-l border-gray-200 py-2 pl-5 pr-20" />
              <td className="py-2 pr-16" />
              <td className="py-2 pr-16" />
              <td className="py-2 pr-10" />
              <td className="py-2" />
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default orders

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
    let { data: Product, error } = await supabase
      .from('Product')
      .select('*, category(id, name), brand(id, name), supplier(id, name)')
      .order('name', { ascending: true })

    return {
      props: {
        products: Product,
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
