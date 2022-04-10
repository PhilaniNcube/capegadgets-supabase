import Image from 'next/image'
import React, { useState } from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CategoryImage({ image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="group">
      <div className="aspect-w-9 aspect-h-6 w-full overflow-hidden rounded-lg bg-gray-200 shadow">
        <Image
          layout="fill"
          src={image}
          className={cn(
            'object-cover ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          alt="blog image"
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export default CategoryImage
