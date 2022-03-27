import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="container mx-auto mt-8 flex items-center justify-center bg-slate-200 py-12 px-4 lg:px-0">
      <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex w-80 flex-col items-start justify-start px-4 sm:w-auto md:px-8">
          <div>
            <p className="text-3xl font-semibold leading-9 text-gray-800 xl:text-4xl">
              Place your order today
            </p>
          </div>
          <div className="mt-4 lg:w-4/5 xl:w-3/5">
            <p className="text-base leading-6 text-gray-600">
              Anything that you could need for your university studies. Let us
              help you get ready to succeed
            </p>
          </div>
          <div className="mt-16 w-full">
            <Link href="/products" passHref>
              <button className="flex h-14 w-full items-center justify-between bg-gray-900 px-4 text-white hover:bg-gray-700 lg:w-72">
                <p className="text-xl font-medium leading-5">See More</p>
                <span>&rarr;</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="jusitfy-center flex flex-1 flex-col items-center space-y-4 px-4 sm:flex-row sm:space-x-5 sm:space-y-0 md:px-8 lg:space-x-8">
          <div className="h-full w-full">
            <div className="hidden h-full w-full lg:inline-block">
              <Image
                width={296}
                height={432}
                className="hidden h-full lg:inline-block"
                src="/images/laptops-1.jpg"
                alt="laptops"
              />
            </div>
            <div className="inline-block h-full w-full sm:w-auto lg:hidden">
              <Image
                width={348}
                height={424}
                className="inline-block h-full w-full lg:hidden"
                src="/images/laptops-2.jpg"
                alt="laptops"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
