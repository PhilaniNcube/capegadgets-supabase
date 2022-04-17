import React, { useEffect } from 'react'
import cookie from 'cookie'
import axios from 'axios'
import supabase from '../../utils/supabase'
import formatter from '../../lib/format'

const Order = ({ order, error }) => {
  console.log('order', order)

  useEffect(async () => {
    console.log(localStorage.getItem('intelliToken'))
    console.log(localStorage.getItem('cardNumber'))

    if (order.paid === true && order.paymentMethod === 'Intellimali') {
      console.log('confirm Order')

      const res = await axios.post(`/api/confirm-intelli`, {
        cardNumber: localStorage.getItem('cardNumber'),
        token: localStorage.getItem('intelliToken'),
        amount: parseInt((order.orderTotal + order.shipping) / 100),
        reference: order.id,
      })

      console.log('intellidata', res)
    }
  }, [])

  return (
    <div className="px py-14 px-4 md:px-6  lg:px-20 2xl:container 2xl:mx-auto ">
      <div className="md:jusitfy-start flex w-full flex-col items-center justify-center space-y-4 md:items-start">
        <h1 className="text-center text-3xl font-semibold leading-7 text-gray-800 xl:text-4xl xl:leading-9">
          {order.paid ? 'Payment Successful' : 'Payment Pending'}
        </h1>
        <div>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">Name: </span> {order.firstName}{' '}
            {order.lastName}
          </p>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">Email: </span> {order.email}{' '}
          </p>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">Street Address: </span>{' '}
            {order.streetAddress}{' '}
          </p>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">City: </span> {order.city}{' '}
          </p>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">Province: </span> {order.province}{' '}
          </p>
          <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
            <span className="font-bold">Postal Code: </span> {order.postalCode}{' '}
          </p>
        </div>
        <p className="text-center text-xs text-gray-800 md:text-left md:text-sm">
          Thanks for making an order you can check your order summary below
        </p>
      </div>
      <div className="mt-9 border border-gray-200">
        <div className="flex flex-col items-center border-b border-gray-200 py-6 px-4 md:flex-row md:justify-between md:py-9 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-2 md:items-start md:justify-start md:space-y-4 ">
            <p className="text-base leading-4">
              Order:{' '}
              <span className="font-medium uppercase">
                #{order.id.slice(0, 8)}{' '}
              </span>
            </p>
            <p className="text-base leading-4">
              Order Palcement:{' '}
              <span className="font-medium">
                {new Date(order.created_at).toDateString('en-ZA')}
              </span>
            </p>
          </div>
          <button className="mt-4   bg-gray-800 px-8 py-4 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:mt-0">
            {order.shipped ? 'Track Your Order' : 'Order Awaiting Shipping'}
          </button>
        </div>

        {order.orderItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-start border-b border-gray-200 px-4 py-6 md:flex-row md:items-center md:justify-between md:space-x-6 md:p-6 xl:space-x-8 xl:py-9 xl:px-8"
            >
              <div className="w-full md:w-52">
                <img
                  className="aspect-square hidden w-full object-cover md:block"
                  src={item.image}
                  alt={item.name}
                />
                <img
                  className="aspect-square w-full object-cover md:hidden"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="justify-items-between mt-4 grid w-full grid-cols-1 items-center gap-y-6 gap-x-20 md:mt-0 md:grid-cols-2 md:gap-y-0 xl:gap-x-8">
                <div className="flex flex-col items-start justify-start">
                  <p className="text-xl font-semibold leading-7 text-gray-800 xl:text-2xl xl:leading-6">
                    {item.name}
                  </p>
                  <p className="mt-2 text-base leading-4 text-gray-600 xl:mt-4">
                    By: {item.brand.name}
                  </p>
                  <div className="mt-10 flex items-center justify-start space-x-4 xl:space-x-8">
                    <p className="flex  flex-shrink-0 text-base leading-4 text-gray-600">
                      SKU: {item.sku}
                    </p>
                    <p className="flex  flex-shrink-0 text-base leading-4 text-gray-600">
                      Qty: {item.qty}
                    </p>
                    <p className="flex flex-shrink-0 text-xl  font-semibold leading-5 text-gray-800">
                      Price {formatter.format(item.price / 100)}
                    </p>
                  </div>
                </div>
                <div className="flex  h-full flex-col items-start justify-between space-y-10 xl:flex-row xl:items-center xl:space-y-0 xl:space-x-10 2xl:justify-start 2xl:space-x-36">
                  <div className="flex flex-col items-start justify-start space-y-2 md:space-y-4">
                    <p className="text-base leading-4 text-gray-600">Status</p>
                    <p className="text-xl font-semibold leading-5 text-gray-600">
                      {order.shipped ? 'Shipped' : 'Pending'}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start space-y-2 md:space-y-4">
                    <p className="text-base leading-4 text-gray-600">
                      Category
                    </p>
                    <p className="text-xl font-semibold leading-5 text-gray-600">
                      {item.category.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <div className="flex flex-col-reverse items-center justify-start md:flex-row">
          <div className="flex w-full flex-col items-center justify-between px-6 py-8 md:flex-row xl:px-8 ">
            <p className="text-base leading-none">
              Payment Method:{' '}
              <span className="font-semibold"> {order.paymentMethod}</span>
            </p>
            <p className="mt-6 text-lg leading-none text-gray-800 md:mt-0">
              Total Price:{' '}
              <span className="font-semibold">
                {formatter.format((order.orderTotal + order.shipping) / 100)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order

export async function getServerSideProps({
  req,
  params: { id },
  query: { success },
}) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })
  console.log(success)

  if (success === 'true') {
    const { data, error } = await supabase
      .from('Orders')
      .update({ paid: true })
      .eq('id', id)
      .single()
  }

  let { data: Orders, error } = await supabase
    .from('Orders')
    .select('*')
    .eq('id', id)
    .single()

  return {
    props: {
      order: Orders,
      error,
    },
  }
}
