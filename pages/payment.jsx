import React, { useState } from 'react'
import supabase from '../utils/supabase'
import cookie from 'cookie'

const Payment = ({ order, error }) => {
  console.log({ order, error })

  const {
    orderItems,
    email,
    firstName,
    lastName,
    paymentMethod,
    shipping,
    orderTotal,
    user_id,
    id,
    streetAddress,
  } = order

  const [cardNumber, setCardNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  if (error) {
    return (
      <div className="mx-auto flex h-screen max-w-6xl items-center justify-center">
        <h1 className="text-center text-2xl font-bold text-gray-700 md:text-4xl">
          Error Retrieving Your Order Details
        </h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-9 lg:container lg:mx-auto lg:grid-cols-12">
      <div className="relative col-span-9 h-auto bg-white p-6 lg:col-span-8 lg:h-screen lg:px-10 lg:py-12 xl:col-span-9">
        <p>
          <svg
            className="inline"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L1 5L5 9"
              stroke="#4B5563"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-2.5 cursor-pointer text-base font-normal text-gray-500">
            Back
          </span>
        </p>
        <h3 className="mt-2 text-4xl font-semibold text-gray-800">Payment</h3>

        <div className="mt-7 lg:mt-20">
          <p className="mb-3 text-sm font-normal text-gray-600">Your details</p>
          <h3 className="text-2xl font-medium text-gray-800">Your details</h3>

          <form className="mt-8" autoComplete="off" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
              <input
                aria-label="emailAddress"
                className="border-b-2 border-gray-300 pb-3 text-base font-normal text-gray-600 placeholder-gray-600 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <input
                aria-label="yourName"
                className="border-b-2 border-gray-300 pb-3 text-base font-normal text-gray-600 placeholder-gray-600 focus:outline-none"
                type="text"
                name="yourName"
                id="YourName"
                placeholder="Your name"
              />
              <input
                aria-label="phoneNumber"
                className="border-b-2 border-gray-300 pb-3 text-base font-normal text-gray-600 placeholder-gray-600 focus:outline-none"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="submit"
              className="my-3 mt-10 w-full bg-gray-800 p-4 text-lg text-white hover:bg-gray-900 md:w-auto"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <div className="relative col-span-9 bg-gray-100 px-8 py-14 lg:col-span-4 lg:h-auto xl:col-span-3 xl:h-screen xl:px-12 xl:py-20">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold text-gray-800">Items</h3>
          <div className="flex-auto"></div>
          <h5 className="cursor-pointer text-base font-normal text-gray-600 underline hover:text-gray-800">
            Edit Cart
          </h5>
        </div>

        <div className="mt-7 flex flex-1 text-lg font-normal text-gray-800">
          <h3>North wolf bag</h3>
          <h3 className="flex-auto pr-4 text-right md:pr-5 lg:pr-4">1x</h3>
          <h3>$9,000</h3>
        </div>

        <div className="mt-5 flex flex-1 text-lg font-normal text-gray-800">
          <h3>LW Sneakers</h3>
          <h3 className="flex-auto pr-7 text-right md:pr-9 lg:pr-7">1x</h3>
          <h3>$740</h3>
        </div>

        <div className="mt-5 flex flex-1 text-lg font-normal text-gray-800">
          <h3>Luxe card holder</h3>
          <h3 className="flex-auto pr-7 text-right md:pr-9 lg:pr-7">1x</h3>
          <h3>$500</h3>
        </div>
        <div className="absolute -bottom-7 left-0 w-full bg-gray-100 px-8 pb-5 text-lg font-medium text-gray-800 md:-bottom-96 md:pt-80 md:pb-10 lg:bottom-0 lg:mt-0 lg:pb-10 lg:pt-0 xl:px-12">
          <span
            aria-label="Total"
            className="float-left text-2xl font-normal text-gray-800"
          >
            Total
          </span>
          <span
            aria-label="Total Price"
            className="float-right text-2xl font-semibold text-gray-800"
          >
            $9,000
          </span>
          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  )
}

export default Payment

export async function getServerSideProps({ req, query: { id } }) {
  const { user } = await supabase.auth.api.getUserByCookie(req)
  const token = cookie.parse(req.headers.cookie)['sb-access-token']

  supabase.auth.session = () => ({ access_token: token })

  let { data: Orders, error } = await supabase
    .from('Orders')
    .select('*')
    .eq('id', id)
    .single()

  console.log(Orders)

  return {
    props: {
      order: Orders,
      error,
    },
  }
}
