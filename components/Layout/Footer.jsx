import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="py-3 px-4 md:py-4 md:px-6 lg:px-20 lg:py-4 2xl:container 2xl:mx-auto">
      <div className="items-center justify-between border-b border-t border-gray-200 py-14 sm:space-y-10 lg:flex lg:space-y-0">
        <div className="items-start justify-between sm:flex lg:w-1/2">
          <div className="md:w-1/2">
            <h2 className="pb-7 text-xl font-extrabold leading-tight text-gray-800">
              Customer services
            </h2>
            <Link href="/contact">
              <a>
                <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                  Contact
                </p>
              </a>
            </Link>
            <Link href="/orders">
              <a>
                <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                  My orders
                </p>
              </a>
            </Link>
            <Link href="/returns">
              <a>
                <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                  Delivery &amp; returns
                </p>
              </a>
            </Link>
          </div>
          <div className="mt-9 items-center justify-center md:mt-0 md:flex md:w-1/2">
            <div className="items-left flex flex-col justify-start">
              <h2 className="pb-7 text-xl font-extrabold leading-tight text-gray-800">
                Online services
              </h2>

              <Link href="/account">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    My account
                  </p>
                </a>
              </Link>
              <Link href="/faq">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Frequently asked questions
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-9 items-center justify-center sm:pt-0 md:mt-0 md:flex md:w-1/2 lg:hidden">
            <div className="items-left flex flex-col justify-start">
              <h2 className="pb-7 text-xl font-extrabold leading-tight text-gray-800">
                Privacy &amp; legal
              </h2>

              <Link href="/privacy">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Privacy policy
                  </p>
                </a>
              </Link>
              <Link href="/terms">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Terms &amp; conditions
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="items-start justify-between sm:flex lg:w-1/2">
          <div className="hidden items-center pt-4 sm:pt-0 md:w-1/2 lg:flex lg:justify-center">
            <div className="items-left flex flex-col justify-start">
              <h2 className="pb-7 text-xl font-extrabold leading-tight text-gray-800">
                Privacy &amp; legal
              </h2>
              <Link href="/privacy">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Privacy policy
                  </p>
                </a>
              </Link>
              <Link href="/terms">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Terms &amp; conditions
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-10 items-center sm:flex sm:pt-0 md:mt-0 md:w-1/2 lg:justify-end lg:justify-center">
            <div className="items-left flex flex-col justify-start">
              <h2 className="pb-7 text-xl font-extrabold leading-tight text-gray-800">
                Cape Gadgets
              </h2>
              <Link href="/">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Home
                  </p>
                </a>
              </Link>
              <Link href="/blog">
                <a>
                  <p className="cursor-pointer pb-6 text-base leading-4 text-gray-800">
                    Blog
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <a href="/" className="cursor-pointer">
          <img
            src="/images/logo-wide.png"
            alt="logo"
            className="h-12 object-cover"
          />
        </a>
        <p className="pt-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cape Gadgets. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
