import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useCart from '../hooks/useCart'
import formatter from '../lib/format'
import { useUser } from '../Context/AuthContext'

export default function Cart() {
  const [counter1, setCounter1] = useState(1)
  const [counter2, setCounter2] = useState(1)

  const { user } = useUser()

  const {
    cart,
    cartTotal,
    addToCart,
    removeItemFromCart,
    addCartQty,
    reduceCartQty,
  } = useCart()

  const shipping = 16000

  return (
    <div className="container mx-auto">
      <div className="w-full py-9 px-4 py-12 md:px-6">
        <div className>
          <div className="text-base leading-4 text-gray-600 lg:leading-none">
            <span>
              <Link href="/">
                <a className="cursor-pointer hover:underline">Home</a>
              </Link>
            </span>{' '}
            /{' '}
            <span>
              <Link href="/products">
                <a className="cursor-pointer hover:underline">Products</a>
              </Link>
            </span>{' '}
            / Cart
          </div>
          <h1 className="mt-2 text-3xl font-semibold leading-4 text-gray-800 lg:text-4xl lg:leading-9">
            My Cart
          </h1>
        </div>
        <div className="flex flex-col space-y-8 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-8">
          <div className="md:w-full">
            {cart.map((product) => (
              <div
                key={product.id}
                className="items-strech mt-10 flex w-full flex-col border-b border-gray-200 pb-12 md:mt-14 md:flex-row lg:mt-16"
              >
                <div className="flex justify-end md:hidden">
                  <button
                    onClick={() => removeItemFromCart(product.id)}
                    className="mt-2"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-center md:w-2/5">
                  <img
                    className="object-cover object-center"
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.name}
                  />
                </div>
                <div className="hidden w-full justify-between md:ml-6 md:flex">
                  <div className="w-full">
                    <div className="flex flex-row justify-between">
                      <div className="justify start flex">
                        <p className="text-2xl font-semibold leading-normal text-gray-800">
                          {product.name}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => removeItemFromCart(product.id)}
                          aria-label="Remove product"
                          className="mt-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                              fill="#1F2937"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-none text-gray-800">
                      {formatter.format(product.price / 100)}
                    </p>
                    <div className="mt-20 flex w-full items-center justify-between">
                      <div className="flex h-full w-full flex-col justify-between md:flex-row">
                        <div className="flex justify-start">
                          <div className="flex h-10 w-20 items-center justify-center space-x-3 border border-gray-300 p-3">
                            <button
                              onClick={() => reduceCartQty(product)}
                              aria-label="decrease quantity"
                              className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 4L6 8L10 12"
                                  stroke="#1F2937"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <p className="quantity1 text-base text-gray-800">
                              {product.qty}
                            </p>
                            <button
                              onClick={() => addCartQty(product)}
                              aria-label="increase quantity"
                              className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 4L10 8L6 12"
                                  stroke="#1F2937"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex hidden justify-end md:block">
                          <p className="text-right text-gray-800 md:mt-3">
                            <span className="text-xl leading-tight text-gray-800">
                              Item Total:{' '}
                            </span>
                            <span className="text-xl font-medium">
                              {formatter.format(
                                (product.price * product.qty) / 100
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
                <div className="flex flex-col md:hidden">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="mt-1 text-2xl font-semibold leading-6 text-gray-800">
                        {product.name}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-4 w-11/12 text-base leading-4 text-gray-600">
                    {formatter.format(product.price / 100)}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="mt:mt-3 text-right text-gray-800">
                        <span className="text-xl leading-5 text-gray-800">
                          Total:{' '}
                        </span>
                        <span className="text-xl font-medium leading-5">
                          {formatter.format(
                            (product.price * product.qty) / 100
                          )}
                        </span>
                      </p>
                    </div>
                    <div className="flex h-10 w-20 items-center justify-center space-x-3 border border-gray-300 p-3">
                      <button
                        onClick={() => reduceCartQty(product)}
                        className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 4L6 8L10 12"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <p className="quantity1 text-base text-gray-800">
                        {counter1}
                      </p>
                      <button
                        onClick={() => addCartQty(product)}
                        className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
                      >
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 4L10 8L6 12"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 flex w-full flex-col-reverse items-center justify-center md:mt-28 md:flex-row">
            <div className="w-full bg-gray-50 p-4 shadow md:w-9/12 md:p-10 lg:w-9/12">
              <p className="text-2xl font-semibold leading-normal text-gray-800">
                Order Summary
              </p>
              <div className="mt-14 flex items-center justify-between">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Subtotal
                </h3>
                <p className="text-base font-medium leading-none text-gray-800">
                  {formatter.format(cartTotal / 100)}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Shipping Charges
                </h3>
                <p className="text-base font-medium leading-none text-gray-800">
                  {formatter.format(shipping / 100)}
                </p>
              </div>
              <div className="mt-32 flex items-center justify-between">
                <h3 className="text-xl font-semibold leading-tight text-gray-800">
                  Total Price
                </h3>
                <p className="text-2xl font-semibold text-gray-800">
                  {formatter.format((cartTotal + shipping) / 100)}
                </p>
              </div>
              {user ? (
                <Link href="/checkout">
                  <button className="hover: mt-4 w-full bg-gray-800 py-5 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-800 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-2">
                    Proceed to checkout
                  </button>
                </Link>
              ) : (
                <Link href="/sign-in" passHref>
                  <button className="hover: mt-4 w-full bg-gray-800 py-5 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-800 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-2">
                    Please Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
