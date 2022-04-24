import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import formatter from '../../lib/format'

export default function ProductsGrid({ products, filter, setFilter }) {
  return (
    <Fragment>
      <div className="container mx-auto gap-x-4 px-4 py-12 md:px-6 lg:px-8">
        <h1 className="text-xl font-medium leading-4 text-gray-800 md:text-2xl md:leading-6 lg:text-4xl lg:leading-9">
          All Products
        </h1>
        <div className="mt-8 flex flex-col ">
          <div className="relative">
            <div className="absolute flex h-full items-center pl-3 text-gray-600 dark:text-gray-400"></div>
            <input
              id="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="flex h-10 items-center rounded border border-gray-300  bg-gray-300 pr-20 pl-10 text-sm font-normal text-gray-600 shadow focus:border focus:border-sky-700 focus:outline-none sm:pr-32"
              placeholder="Search product"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="hidden sm:block md:pr-8 lg:w-72" />
          <div className="hidden sm:block md:pr-8 lg:w-72" />
          <div className="hidden sm:block md:pr-8 lg:w-72" />
        </div>
        <div className="mt-6 grid gap-y-8 sm:grid-cols-2 lg:grid-flow-row lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 xl:gap-x-12">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} passHref>
              <div
                onClick={() =>
                  analytics.track('select_item', {
                    items: [product],
                  })
                }
                key={product.id}
                className="aspect-square rounded-lg hover:bg-gray-50 hover:shadow-lg"
              >
                <Image
                  width={600}
                  height={600}
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full p-2"
                />
                <div className="px-4 py-4">
                  <p className="mt-3 text-sm font-medium leading-none text-gray-800">
                    {product.name}
                  </p>
                  <p className="mt-2 text-xs font-medium leading-3 text-gray-600">
                    {formatter.format(product.price / 100)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
