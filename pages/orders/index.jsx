import React from 'react'
import cookie from 'cookie'
import supabase from '../../utils/supabase'
import Link from 'next/link'

const index = ({ orders }) => {
  return (
    <div className="container mx-auto py-9 px-4 md:py-12 md:px-6 lg:py-14">
      <div className="items-strech flex flex-col justify-between rounded-lg bg-gradient-to-r from-gray-200 to-gray-500 py-8 px-4 md:flex-row md:px-10 lg:py-12 lg:px-16">
        <div className="flex items-center">
          <div className="w-full">
            <h1 className="mt-7 text-3xl font-semibold leading-9 text-gray-900 md:mt-5 lg:mt-4 lg:text-4xl">
              Introducing
            </h1>
            <p className="text-xl leading-5 text-gray-900 md:mt-2">
              We also have smartwatches for sale
            </p>
            <Link href="categories/smartwatches" passHref>
              <button className="mt-10 w-full bg-gray-800 py-3 px-5 text-base font-medium leading-4 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:w-auto">
                Shop smartwatches
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-6 md:mx-0 md:mt-0">
          <img
            src="https://i.ibb.co/GkNHgNC/11873-removebg-preview-2-1.png"
            alt="A smart watch"
          />
        </div>
      </div>

      <h2 className="mt-8 text-lg font-bold text-gray-800 md:text-2xl lg:text-4xl">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <h3 className="text-md w-full text-gray-500 md:text-xl">0 Orders</h3>
      ) : (
        <div className="mt-8 w-full">
          <ul>
            {orders.map((order) => (
              <Link key={order.id} href={`/orders/${order.id}`}>
                <li>Order ID: {order.id}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default index

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })

  let { data: Orders, error } = await supabase.from('Orders').select('*')

  return {
    props: {
      orders: Orders,
      error,
    },
  }
}
