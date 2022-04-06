import React, { Fragment, useMemo, useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import Link from 'next/link'
import supabase from '../utils/supabase'
import cookie from 'cookie'
import getOrders from '../lib/getOrders'
import formatter from '../lib/format'

const Account = () => {
  const [filter, setFilter] = useState('')

  const { data: orders } = useQuery('orders', getOrders, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const filteredOrders = useMemo(
    () =>
      orders.filter((order) =>
        order.paid.toString().toLowerCase().includes(filter.toLowerCase())
      ),
    [filter, orders]
  )

  return (
    <Fragment>
      <div className="mx-auto my-4 max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-800 md:text-4xl">
          My Account
        </h1>

        <div className="w-full bg-white px-6 py-5 shadow sm:px-12 sm:py-10">
          <div className="mb-5 rounded-tl-lg rounded-tr-lg sm:mb-10">
            <div className="items-center justify-between sm:flex">
              <p className="text-base font-bold leading-normal text-gray-800 sm:text-lg md:text-xl lg:text-2xl">
                Orders
              </p>
              <div className="mt-4 flex items-center sm:mt-0">
                <div className="flex items-center rounded-md border border-gray-200 bg-white pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                      stroke="#9CA3AF"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 17.5L12.5 12.5"
                      stroke="#9CA3AF"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-40 rounded-md py-2.5 pl-1 text-sm text-gray-600 placeholder-gray-400 focus:outline-none sm:w-64"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead>
                  <tr className="h-20 w-full text-sm leading-none text-gray-600">
                    <th className="pl-4 text-left font-normal">Date</th>
                    <th className="pl-10 text-left font-normal">Order ID #</th>
                    <th className="pl-10 text-left font-normal">Customer</th>
                    <th className="pl-10 text-left font-normal">Amount</th>
                    <th className="pl-10 text-left font-normal">Paid</th>
                    <th className="pl-10 text-left font-normal">Shipped</th>
                    <th className="w-32 pl-10 text-left font-normal">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {filteredOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="h-20 border-b border-t border-gray-200 bg-white text-sm leading-none text-gray-700 hover:bg-gray-50"
                    >
                      <td className="pl-4">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="pl-10">{order.id.split('-')[0]}</td>
                      <td className="pl-10">
                        <div className="flex items-center">
                          {order.firstName} {order.lastName}
                        </div>
                      </td>
                      <td className="pl-10">
                        {formatter.format(
                          (order.orderTotal + order.shipping) / 100
                        )}
                      </td>
                      <td className="pl-10">
                        <div className="flex h-6 w-20 items-center justify-center rounded-full bg-blue-50">
                          <p
                            className={
                              order.paid
                                ? `text-xs leading-3 text-green-500`
                                : `text-xs leading-3 text-red-500`
                            }
                          >
                            {order.paid ? 'Paid' : 'Not Paid'}
                          </p>
                        </div>
                      </td>
                      <td className="pl-10">
                        {' '}
                        {order.shipped ? 'Shipped' : 'Processing'}
                      </td>
                      <td className="pl-10">
                        <div className="flex items-center">
                          <Link href={`/orders/${order.id}`}>
                            <button className="mr-5 rounded bg-green-100 py-2.5 px-5 text-sm leading-3 text-gray-700 hover:bg-green-200 focus:outline-none">
                              View
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Account

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })

  const queryClient = await new QueryClient()

  await queryClient.prefetchQuery('orders', getOrders)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
