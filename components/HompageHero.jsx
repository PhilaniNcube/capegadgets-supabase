import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HomepageHero() {
  return (
    <div className="mt-6 overflow-hidden">
      <div className="container mx-auto h-auto bg-gray-800 px-4 py-8 sm:px-10 md:py-0">
        <div className="flex flex-col items-center justify-center md:flex md:flex-row">
          <div className="order-1 w-full md:order-none md:w-1/2">
            <div className="">
              <h1 className="mt-6 text-2xl font-extrabold text-white md:mt-0 md:text-4xl md:leading-9 lg:text-5xl">
                Big Savings.
              </h1>
              <h1 className="mt-2 text-2xl font-light text-white md:mt-4 md:text-4xl md:leading-9 lg:mt-6 lg:text-5xl">
                Big Variety.
              </h1>
              <p className="mt-4 text-sm text-white md:mt-6 md:w-4/5 md:text-base md:leading-6 lg:w-auto">
                Order your supplies for university life online using your
                Intellimali or Internet Banking. We have stock of lots of items
                from laptops, cellphones, speakers, ebooks, 2nd hand textbooks
                and lots more.
              </p>
              <Link href="/products" passhref>
                <button className="mt-6 flex cursor-pointer items-center border border-white py-3 px-9 text-sm font-medium text-white hover:bg-gray-900 md:mt-8 md:py-3 md:px-11 md:text-base">
                  Shop &rarr;
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pt-12 lg:pt-4">
            <Image width={900} height={900} src="/images/acer.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomepageHero
