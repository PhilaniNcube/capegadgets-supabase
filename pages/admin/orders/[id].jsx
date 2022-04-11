import React from 'react'
import cookie from 'cookie'
import Image from 'next/image'
import supabase, { service } from '../../../utils/supabase'
import formatter from '../../../lib/format'

const Order = ({ order }) => {
  console.log(order)

  return (
    <div className="py-14 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex w-full flex-col items-center justify-center space-y-8 md:space-y-10 xl:flex-row xl:space-x-8 xl:space-y-0">
        <div className="flex w-full flex-col items-center justify-start space-y-4 md:space-y-8 xl:w-8/12">
          {order.orderItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex w-full flex-col items-start justify-start rounded border border-gray-300 shadow-md md:flex-row md:items-center"
              >
                <div className="w-full md:w-52">
                  <div className="hidden md:block">
                    <Image
                      width={200}
                      height={200}
                      className="hidden md:block"
                      src={item.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                  <div className="w-full  md:hidden">
                    <Image
                      width={200}
                      height={200}
                      className="w-full md:hidden"
                      src={item.image}
                      alt="girl-in-red-dress"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start p-4 md:px-8">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
                    {item.name}
                  </h3>
                  <div className="mt-4 flex flex-col items-start justify-start space-y-2 md:flex-row md:space-y-0 md:space-x-6 ">
                    <p className="text-sm leading-none text-gray-600">
                      Cost:{' '}
                      <span className="text-gray-800">
                        {' '}
                        {formatter.format(item.costPrice / 100)}
                      </span>
                    </p>
                  </div>
                  <div className="mt-8 flex w-full items-center justify-between">
                    <button className="bg-gray-50 py-4 px-6 text-sm leading-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                      Quantity:{' '}
                      <span className="font-semibold text-gray-800">
                        {item.qty}
                      </span>
                    </button>
                    <p className="text-xl font-semibold leading-5 text-gray-800 lg:text-2xl lg:leading-6">
                      {formatter.format(item.price / 100)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex w-full flex-col items-start justify-start xl:w-4/12 ">
          <h3 className="w-full text-center text-3xl font-semibold leading-7 text-gray-800 md:text-left xl:text-4xl xl:leading-9">
            Order Summary
          </h3>
          <div className="mt-8 flex w-full flex-col items-start justify-start space-y-8 md:flex-row md:space-y-0 md:space-x-24 xl:mt-10 xl:flex-col xl:space-y-10 xl:space-x-0 ">
            <div className="flex w-full flex-col items-start justify-start space-y-8 md:w-auto lg:w-full">
              <div className="jusitfy-start flex flex-col items-start space-y-2">
                <p className="text-base font-semibold leading-4  text-gray-800">
                  Billing Address
                </p>
                <p className="text-sm leading-5 text-gray-600">
                  {order.streetAddress}, {order.city}, {order.province},{' '}
                  {order.postalCode}
                </p>
              </div>
              <div className="jusitfy-start flex flex-col items-start space-y-2">
                <p className="text-base font-semibold leading-4  text-gray-800">
                  Customer Details
                </p>
                <p className="flex flex-col text-sm leading-5 text-gray-600">
                  <span>{`${order.firstName} ${order.lastName}`}</span>
                  <span>{`${order.email}`}</span>
                  <span>{`${order.phoneNumber}`}</span>
                </p>
                <p className="flex flex-col text-sm leading-5 text-gray-600">
                  <span>{`Status: ${order.paid ? 'Paid' : 'Pending'} `}</span>
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-4">
              <div className="flex w-full flex-col items-center justify-center space-y-4 border-b border-gray-200 pb-4">
                <div className="flex w-full  justify-between">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">
                    {formatter.format(order.orderTotal / 100)}
                  </p>
                </div>

                <div className="flex w-full  justify-between">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">
                    {formatter.format(order.shipping / 100)}
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  {formatter.format((order.orderTotal + order.shipping) / 100)}
                </p>
              </div>
              <div className="flex w-full flex-col items-center justify-center space-y-6 pt-1 md:w-8/12  md:space-y-8 md:pt-4 lg:w-full xl:pt-8">
                <button className="w-full bg-gray-800 py-5 text-base font-medium  leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                  Complete Order
                </button>
                <p className="text-base leading-none text-gray-800">
                  Paid using {order.paymentMethod}{' '}
                  <span className="font-semibold">
                    Transaction ID:{' '}
                    {order.payment_id ? `${order.payment_id}` : 'Pending'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order

export async function getServerSideProps({ req, params: { id } }) {
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
      .eq('id', id)
      .single()

    return {
      props: {
        order: Orders,
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
