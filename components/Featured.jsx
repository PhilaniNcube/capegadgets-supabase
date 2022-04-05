import React from 'react'
import Link from 'next/link'

const Featured = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="px-4 py-8 md:px-6 md:py-12 lg:px-0">
        <div className="hidden items-center justify-center space-x-8 lg:flex">
          <div className="relative">
            <img
              src="/images/bundles-large.jpg"
              alt="tech products on a table"
              className="h-96 object-cover object-center"
            />
            <div className="absolute bottom-0 z-10 ml-12 mb-12">
              <h1 className="text-4xl font-semibold text-white">Bundles</h1>
              <Link href="/categories/bundles" passHref>
                <button className="mt-6 border border-white bg-gray-200 bg-opacity-0 py-4 px-9 text-base font-medium text-white transition duration-150 hover:bg-gray-200 hover:bg-opacity-10  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/earphones-wide.jpg"
              alt="A kitchen counter"
              className="h-96 object-cover object-center"
            />
            <div className="absolute bottom-0 z-10 ml-12 mb-12">
              <h1 className="text-4xl font-semibold text-white">Earphones</h1>
              <Link href="/categories/earphone" passHref>
                <button className="mt-6 border border-white bg-white bg-opacity-0 py-4 px-9 text-base font-medium text-white transition duration-150 hover:bg-gray-50 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 lg:hidden">
          <div className="relative">
            <img
              src="/images/bundles-medium.jpg"
              alt="tech products on a table"
              className="h-96 object-cover object-center md:h-auto"
            />
            <div className="absolute bottom-0 w-full px-3 pb-6 md:px-10 md:pb-10">
              <h1 className="text-xl font-semibold text-white">Bundles</h1>
              <Link href="/categories/bundles" passHref>
                <button className="mt-4 w-full border border-white bg-white bg-opacity-0 py-4 px-8 text-center text-base font-medium text-white transition duration-150 hover:bg-gray-50 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:mt-5 lg:w-5/12">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/earphones.jpg"
              alt="A kitchen counter"
              className="h-96 object-cover object-center md:h-auto"
            />
            <div className="absolute bottom-0 w-full px-3 pb-6 md:px-10 md:pb-10">
              <h1 className="text-xl font-semibold text-white">Earphones</h1>
              <Link href="/categories/earphone" passHref>
                <button className="mt-4 w-full border border-white bg-white bg-opacity-0 py-4 text-center text-base font-medium text-white transition duration-150 hover:bg-gray-50 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:mt-5 lg:w-5/12">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
