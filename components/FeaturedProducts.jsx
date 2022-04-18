import React from 'react'
import Image from 'next/image'
import formatter from '../lib/format'
import Link from 'next/link'

const FeaturedProducts = ({ products }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="px-4 py-8 md:px-6 md:py-12 lg:px-0">
        <h1 className="text-center text-2xl font-bold leading-9 text-gray-900 md:text-4xl">
          Featured Products
        </h1>
        <div className="mt-4 grid gap-y-12 gap-x-6 sm:grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:grid-cols-5">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <div className="relative flex cursor-pointer flex-col items-center rounded bg-white py-4 shadow">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="aspect-square px-4"
                />
                <p className="text-2xl font-bold text-gray-800">
                  {formatter.format(product.price / 100)}
                </p>
                <p className="mt-2 px-2 text-sm leading-5 text-gray-700">
                  {product.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
