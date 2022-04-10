import React from 'react'
import Link from 'next/link'
import supabase from '../utils/supabase'
import CategoryImage from '../components/Categories/CategoryImage'

const categories = ({ categories }) => {
  return (
    <div className="overflow-y-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-center py-12 px-4 md:px-6 lg:px-0">
        <h1 className="text-xl font-medium leading-6 text-gray-800 md:text-2xl md:leading-8 lg:text-4xl lg:leading-9">
          Shop by Category
        </h1>
        <div className="mt-10 grid w-full grid-cols-2 gap-4 md:mt-6 md:gap-x-8 md:gap-y-12 lg:mt-8 lg:grid-cols-3">
          {categories.map((category) => {
            return (
              <Link
                href={`/categories/${category.slug}`}
                passHref
                key={category.id}
              >
                <div className="group flex cursor-pointer flex-col items-start justify-start space-y-3 md:space-y-4">
                  <div className="w-full">
                    <CategoryImage image={category.image} />
                  </div>
                  <p className="text-md font-medium leading-4 text-gray-800 md:text-xl">
                    {category.name}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default categories

export async function getServerSideProps() {
  let { data: Category, error } = await supabase.from('Category').select('*')

  return {
    props: {
      categories: Category,
    },
  }
}
