import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import cookie from 'cookie'
import formatter from '../../lib/format'
import supabase, { service } from '../../utils/supabase'

const orders = ({ Orders, orders_count }) => {
  console.log({ Orders, orders_count })
  return (
    <Fragment>
      <Head>
        <title>Admin Orders | Capegadgets</title>
      </Head>
      <div className="mx-auto mt-8 w-full max-w-7xl overflow-x-auto">
        <table className="w-full whitespace-nowrap rounded-lg border border-gray-100">
          <thead className="border-b-2 border-b-white bg-gray-100">
            <tr className="">
              <th className="rounded-tl-lg py-5 pl-4 text-left">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Date
                </p>
              </th>
              <th className="py-5 text-left">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Customer name/number
                </p>
              </th>
              <th className="border-l border-gray-200 py-5 pl-5 text-left ">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Order #
                </p>
              </th>
              <th className="py-5 pr-16 text-left">
                <div className="flex items-center">
                  <p className="pr-0.5 text-sm font-medium leading-none text-gray-900">
                    Items
                  </p>
                </div>
              </th>
              <th className="py-5 pr-16 text-left">
                <div className="flex items-center">
                  <p className="pr-0.5 text-sm font-medium leading-none text-gray-900">
                    Cost per order
                  </p>
                </div>
              </th>
              <th className="py-5 text-left">
                <p className="text-sm font-medium leading-none text-gray-900">
                  Paid
                </p>
              </th>
              <th className="flex items-end justify-end rounded-tr-lg"></th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((order) => {
              return (
                <Link
                  href={`/admin/orders/${order.id}`}
                  passHref
                  key={order.id}
                >
                  <tr className="my-1 cursor-pointer border-b-2 border-b-white bg-gray-100 hover:bg-slate-200">
                    <td className="py-3 pr-20 pl-4">
                      <p className="text-sm leading-none text-gray-900">
                        {new Date(order.created_at).toLocaleDateString(
                          'en-ZA',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          }
                        )}
                      </p>
                    </td>
                    <td className="py-3 pr-4">
                      <p className="text-sm leading-none text-gray-900">
                        {`${order.firstName} ${order.lastName}`} &nbsp;{' '}
                        {order.phoneNumber}
                      </p>
                    </td>
                    <td className="border-l border-gray-200 py-3 pl-5 pr-20">
                      <p className="text-sm leading-none text-gray-900">
                        {order.id.split('-')[0]}
                      </p>
                    </td>
                    <td className="py-3 pr-16">
                      <p className="text-sm leading-none text-gray-900">
                        {order.orderItems.length}
                      </p>
                    </td>
                    <td className="py-3 pr-16">
                      <p className="text-sm leading-none text-gray-900">
                        {formatter.format(order.orderTotal / 100)}
                      </p>
                    </td>
                    <td className="flex justify-between py-3 pr-10">
                      <p className="text-xs leading-none text-gray-900">
                        {order.paid ? (
                          <span className="rounded-full bg-green-400 px-2 py-1 text-center">
                            Paid
                          </span>
                        ) : (
                          <span className="rounded-full bg-red-300 px-2 py-1 text-center">
                            Pending
                          </span>
                        )}
                      </p>
                      <p className="text-xs leading-none text-gray-900">
                        {order.paymentMethod}
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
    let { data: Orders, error } = await service
      .from('Orders')
      .select('*')
      .order('paid', { ascending: false })
      .order('created_at', { ascending: false })

    let orders_count = await supabase.rpc('get_paid_orders_count')

    return {
      props: {
        Orders,
        orders_count,
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
