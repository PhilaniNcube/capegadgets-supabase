import React, { useState } from 'react'
import Link from 'next/link'

export default function index() {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  const [changeText1, setChangeText1] = useState('City')

  const HandleText1 = (e) => {
    setChangeText1(e)
    setDropdown1(false)
  }

  return (
    <div className="overflow-y-hidden">
      <div className="flex items-center justify-center py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 xl:px-44 2xl:container 2xl:mx-auto ">
        <div className="flex w-full flex-col items-center justify-center space-y-12 sm:w-9/12 lg:w-full lg:flex-row lg:space-x-10 lg:space-y-0 2xl:space-x-36">
          <div className="flex w-full  flex-col items-start justify-start">
            <div className>
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
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Address"
              />
              <input
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="text"
                placeholder="Address (line 02)"
              />
              <div className="flex w-full flex-col items-start justify-between space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button1"
                    className=" w-full border-b border-gray-200 px-2 py-4 text-left text-base leading-4 text-gray-600"
                  >
                    {changeText1}
                  </p>
                  <button
                    onClick={() => setDropdown1(!dropdown1)}
                    className="absolute bottom-4 right-0 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <svg
                      id="close"
                      className={` transform ${
                        dropdown1 ? 'rotate-180' : ''
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-10 z-10 mt-3 w-full  bg-white shadow ${
                      dropdown1 ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex w-full  flex-col">
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1('London')}
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1('New York')}
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => HandleText1('Dubai')}
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full">
                  <p
                    id="button2"
                    className=" w-full border-b border-gray-200 px-2 py-4 text-left text-base leading-4 text-gray-600"
                  >
                    Region
                    <span className="text-gray-400"> (optional)</span>
                  </p>
                  <button
                    onClick={() => setDropdown2(!dropdown2)}
                    className="absolute  bottom-4 right-0 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <svg
                      id="close2"
                      className={` transform ${
                        dropdown2 ? 'rotate-180' : ''
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-10 z-10 mt-3 w-full  bg-white shadow ${
                      dropdown2 ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex w-full  flex-col">
                      <p
                        tabIndex={0}
                        onclick="changeButton2('London')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        onclick="changeButton2('New York')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        onclick="changeButton2('Dubai')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-between space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button3"
                    className=" w-full border-b border-gray-200 px-2 py-4 text-left text-base leading-4 text-gray-600"
                  >
                    Country
                  </p>
                  <button
                    onClick={() => setDropdown3(!dropdown3)}
                    className="absolute bottom-4 right-0 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <svg
                      id="close3"
                      className={` transform ${
                        dropdown3 ? 'rotate-180' : ''
                      }  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="menu3"
                    className={`absolute top-10 z-10 mt-3 w-full  bg-white shadow ${
                      dropdown3 ? '' : 'hidden'
                    }`}
                  >
                    <div className="flex w-full  flex-col">
                      <p
                        tabIndex={0}
                        onclick="changeButton3('USA')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        USA
                      </p>
                      <p
                        tabIndex={0}
                        onclick="changeButton3('UK')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        UK
                      </p>
                      <p
                        tabIndex={0}
                        onclick="changeButton3('Russia')"
                        className="w-full cursor-pointer px-3 py-2 text-left text-base text-gray-600 hover:bg-gray-800  hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
                      >
                        Russia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    className="w-full border-b border-gray-200 px-2 pt-4 pb-3 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2   focus:ring-gray-500"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <input
                className="w-full border-b border-gray-200 px-2 py-4 text-base leading-4 placeholder-gray-600 focus:outline-none focus:ring-2   focus:ring-gray-500"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button className="focus:ring-ocus:ring-gray-800 mt-8 w-full bg-gray-800 py-4 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 md:w-4/12 lg:w-full">
              Proceed to payment
            </button>
            <div className="mt-4 flex w-full items-center justify-start">
              <Link href="/cart">
                <a className="cursor-pointer text-base leading-4 text-gray-600 hover:text-gray-800 hover:underline">
                  Back to cart
                </a>
              </Link>
            </div>
          </div>
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
                  20
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $2790
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="mt-32 flex w-full items-center justify-between">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{' '}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
