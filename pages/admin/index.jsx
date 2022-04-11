import React, { Fragment } from 'react'
import cookie from 'cookie'
import supabase from '../../utils/supabase'
import Head from 'next/head'
import Link from 'next/link'

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Admin | Capegadgets</title>
      </Head>
      <div className="mx-auto mt-4 max-w-7xl px-6 md:px-4 lg:px-0">
        <div className="grid grid-cols-2 gap-3 text-white md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-800 p-4 shadow-md">
            <h2 className="text-center text-2xl">Orders</h2>
            <p className="text-base font-medium">Last Week: (10)</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-800 p-4 shadow-md">
            <h2 className="text-center text-2xl">Orders Value</h2>
            <p className="text-base font-medium">Last Week: (R3000)</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-800 p-4 shadow-md">
            <h2 className="text-center text-2xl">Orders Cost</h2>
            <p className="text-base font-medium">Last Week: (R2000)</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-md bg-slate-800 p-4 shadow-md">
            <h2 className="text-center text-2xl">Users</h2>
            <p className="text-base font-medium"> 20</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 font-bold text-white md:grid-cols-3">
          <Link href="/admin/products" passHref>
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-slate-600 p-4 shadow-md">
              <h2 className="text-center text-2xl">Manage Products</h2>
            </div>
          </Link>
          <Link href="/admin/orders" passHref>
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-slate-600 p-4 shadow-md">
              <h2 className="text-center text-2xl">Manage Orders</h2>
            </div>
          </Link>
          <Link href="/admin/categories" passHref>
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-md bg-slate-600 p-4 shadow-md">
              <h2 className="text-center text-2xl">Manage Categories</h2>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

export default index

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
  }

  return {
    props: {
      user,
    },
  }
}
