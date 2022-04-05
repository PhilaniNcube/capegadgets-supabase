import React, { useState } from 'react'
import Link from 'next/link'
import useCart from '../hooks/useCart'
import formatter from '../lib/format'
import { useUser } from '../Context/AuthContext'
import supabase from '../utils/supabase'
import { useRouter } from 'next/router'

export default function Checkout() {
  const router = useRouter()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [postalCode, setPostalCode] = useState(1000)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('Intellimali')

  const {
    cart,
    cartTotal,
    addToCart,
    removeItemFromCart,
    addCartQty,
    reduceCartQty,
  } = useCart()

  const shipping = 16000

  const { user } = useUser()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('Orders')
      .insert([
        {
          user_id: user.id,
          orderTotal: cartTotal,
          shipping: shipping,
          orderItems: cart,
          phoneNumber: phoneNumber,
          postalCode: postalCode,
          email: user.email,
          province: province,
          firstName: firstName,
          lastName: lastName,
          streetAddress: address,
          city: city,
          paymentMethod: paymentMethod,
        },
      ])
      .single()

    if (error) {
      alert('There was an error saving your order')
    } else if (data) {
      router.push(`/payment?id=${data.id}`)
    }
  }

  return (
    <div className="overflow-y-hidden">
      <div className="flex items-center justify-center py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 xl:px-44 2xl:container 2xl:mx-auto ">
        <div className="flex w-full flex-col items-center justify-center space-y-12 sm:w-9/12 lg:w-full lg:flex-row lg:space-x-10 lg:space-y-0 2xl:space-x-36">
          <form
            onSubmit={handleSubmit}
            className="flex w-full  flex-col items-start justify-start"
          >
            <div className="my-1">
              <p className="text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
                Check out
              </p>
            </div>
            <div className="mt-2">
              <Link href="/cart">
                <a className="cursor-pointer text-base leading-4 text-gray-600 hover:text-gray-800 hover:underline">
                  Back to cart
                </a>
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>
            </div>
            <div className="mt-8 flex w-full flex-col items-start justify-start space-y-8 ">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                type="text"
                placeholder="First Name"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                type="text"
                placeholder="Last Name"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                type="text"
                placeholder="Address"
              />

              <div className="flex w-full flex-col items-start justify-between space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    required
                    className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                    type="text"
                    placeholder="Province"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-between space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                    className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                    type="number"
                    placeholder="Postal Code"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none  focus:ring-gray-500"
                    type="text"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <h2 className="block text-base text-gray-600">
                Select Your Payment Method
              </h2>
              <div className="mx-auto flex w-full justify-between pb-12">
                {/* Code block starts */}
                <div className="flex items-center">
                  <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                    <input
                      defaultChecked
                      type="radio"
                      name="radio"
                      value="Intellimali"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="checkbox absolute h-full w-full cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-none focus:outline-none"
                    />
                    <div className="check-icon z-1 hidden h-full w-full rounded-full border-4 border-indigo-700" />
                  </div>
                  <p className="ml-2 text-sm font-normal leading-4 text-gray-800 ">
                    Intellimali
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="ml-6 flex items-center">
                  <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                    <input
                      type="radio"
                      name="radio"
                      value="Fundi"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="checkbox absolute h-full w-full cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-none focus:outline-none"
                    />
                    <div className="check-icon z-1 hidden h-full w-full rounded-full border-4 border-indigo-700" />
                  </div>
                  <p className="ml-2 text-sm font-normal leading-4 text-gray-800 ">
                    Fundi
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="ml-6 flex items-center">
                  <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full">
                    <input
                      type="radio"
                      name="radio"
                      value="Card/EFT"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="checkbox absolute h-full w-full cursor-pointer appearance-none rounded-full border border-gray-400 checked:border-none focus:outline-none"
                    />
                    <div className="check-icon z-1 hidden h-full w-full rounded-full border-4 border-indigo-700" />
                  </div>
                  <p className="ml-2 text-sm font-normal leading-4 text-gray-800 ">
                    Card/EFT
                  </p>
                </div>
                {/* Code block ends */}
                <style>
                  {`  .checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
                </style>
              </div>
            </div>
            <button
              type="submit"
              className="focus:ring-ocus:ring-gray-800 mt-8 w-full bg-gray-800 py-4 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none   focus:ring-gray-500 focus:ring-offset-2 md:w-4/12 lg:w-full"
            >
              Proceed to payment
            </button>
            <div className="mt-4 flex w-full items-center justify-start">
              <Link href="/cart">
                <a className="cursor-pointer text-base leading-4 text-gray-600 hover:text-gray-800 hover:underline">
                  Back to cart
                </a>
              </Link>
            </div>
          </form>
          <div className="flex w-full flex-col items-start justify-start bg-gray-50 p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="mt-7 flex w-full flex-col items-end space-y-6">
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {cart.length}
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {formatter.format(cartTotal / 100)}
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {formatter.format(shipping / 100)}
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  {formatter.format((cartTotal + shipping) / 100)}
                </p>
              </div>
            </div>
            <div className="mt-32 flex w-full items-center justify-between">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total{' '}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                {formatter.format((cartTotal + shipping) / 100)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
