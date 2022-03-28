import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useCart from '../../hooks/useCart'
import { useUser } from '../../Context/AuthContext'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [showMenuSm, setShowMenuSm] = useState(false)
  const [search, setSearch] = useState(false)

  const { cart } = useCart()

  const { user } = useUser()

  return (
    <div className="dark:bg-gray-900">
      <div className="container relative mx-auto">
        <div className="mx-4 py-4 md:mx-6 md:py-5 lg:py-9">
          <div className="flex items-center justify-between">
            <div
              className="cursor-pointer lg:w-3/12"
              role="img"
              aria-label="Logo"
            >
              <img
                src="/images/logo-wide.png"
                alt="Cape gadgets"
                className="h-12 object-cover"
              />
            </div>
            <div className="hidden w-6/12 justify-center lg:flex">
              <ul className="flex items-center space-x-14">
                <Link href="/" passHref>
                  <li className="flex cursor-pointer items-center space-x-2">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300">
                      Home
                    </a>
                  </li>
                </Link>
                <Link href="/categories">
                  <li className="flex cursor-pointer items-center space-x-2">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300">
                      Categories
                    </a>
                  </li>
                </Link>
                <Link href="/blog" passhref>
                  <li className="flex cursor-pointer items-center space-x-2">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300">
                      Blog
                    </a>
                  </li>
                </Link>
                <Link href="/contact" passhref>
                  <li className="flex cursor-pointer items-center space-x-2">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:text-gray-300">
                      Contact us
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center space-x-6 lg:w-3/12 lg:justify-end lg:space-x-4 xl:space-x-6">
              <Link href="/cart">
                <a
                  aria-label="Go to Cart"
                  className="relative hidden cursor-pointer rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white md:block"
                >
                  {cart.length > 0 && (
                    <div className="absolute -top-2 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-600  text-white">
                      <p className="text-xs">{cart.length}</p>
                    </div>
                  )}

                  <svg
                    className="fill-stroke"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 8.25V6.75C7.5 5.55653 7.97411 4.41193 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25V2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C16.0259 4.41193 16.5 5.55653 16.5 6.75V8.25M3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9V19.125C3 20.5425 4.2075 21.75 5.625 21.75H18.375C19.7925 21.75 21 20.6011 21 19.1836V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 10.5V11.25C7.5 12.4435 7.97411 13.5881 8.81802 14.432C9.66193 15.2759 10.8065 15.75 12 15.75C13.1935 15.75 14.3381 15.2759 15.182 14.432C16.0259 13.5881 16.5 12.4435 16.5 11.25V10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>

              <button
                aria-label="open Menu"
                onClick={() => setShowMenu(true)}
                className="hidden rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white md:block lg:hidden"
              >
                <svg
                  className="fill-stroke"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                aria-label="open Menu"
                onClick={() => setShowMenuSm(true)}
                className="rounded text-gray-800 dark:text-white md:hidden"
              >
                <svg
                  className="fill-stroke"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          id="md-menu"
          className={`${
            showMenu ? ' md:block' : 'hidden'
          } absolute inset-0 z-10 h-screen w-full bg-white bg-opacity-70 dark:bg-gray-800 dark:bg-opacity-70 lg:hidden`}
        >
          <div className="relative h-screen w-full">
            <div className="absolute right-0 top-0 h-full w-1/2 justify-center bg-white p-6 dark:bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                <div className="mx-2 flex items-center space-x-3"></div>
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 4L12 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-8">
                <ul className="flex flex-col space-y-8">
                  <Link href="/" passHref>
                    <li className="flex items-center justify-between">
                      <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link href="/categories">
                    <li className="flex items-center justify-between">
                      <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                        Categories
                      </a>
                    </li>
                  </Link>
                  <Link href="/blog">
                    <li className="flex items-center justify-between">
                      <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                        Blog
                      </a>
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="flex items-center justify-between">
                      <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                        Contact us
                      </a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenuSm ? 'flex' : 'hidden'
          } absolute inset-0 z-10 h-screen w-full flex-col bg-white pt-6 dark:bg-gray-900 md:hidden`}
        >
          <div className="justify-center bg-white p-6 dark:bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div>
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9984 19.0004L14.6484 14.6504"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button
                onClick={() => setShowMenuSm(false)}
                aria-label="close menu"
                className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white"
              >
                <svg
                  className="fill-stroke"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <ul className="flex flex-col space-y-8">
                <li className="flex items-center justify-between">
                  <Link href="/">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                      Home
                    </a>
                  </Link>
                  <button
                    aria-label="add"
                    className="text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.33301V12.6663"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <Link href="/products">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                      Products
                    </a>
                  </Link>
                  <button
                    aria-label="add"
                    className="text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.33301V12.6663"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <Link href="/blog">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                      Blog
                    </a>
                  </Link>
                  <button
                    aria-label="add"
                    className="text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.33301V12.6663"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <Link href="/contact">
                    <a className="text-base text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white">
                      Contact us
                    </a>
                  </Link>
                  <button
                    aria-label="add"
                    className="text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.33301V12.6663"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
