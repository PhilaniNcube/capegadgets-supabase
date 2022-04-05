import react, { useState } from 'react'
import Image from 'next/image'
import formatter from '../../lib/format'
import useCart from '../../hooks/useCart'

export default function ProductDetail({ product }) {
  const [num, setNum] = useState(1)

  const { addToCart, addCartQty, reduceCartQty } = useCart()

  const handleNum = (flag) => {
    if (flag === 'sub' && num > 1) {
      setNum(num - 1)
    }
    if (flag === 'add' && num < product.stockOnHand) {
      setNum(num + 1)
    }
  }
  return (
    <div className="my-4">
      <div className="flex flex-col items-stretch justify-center px-4  md:flex-row md:px-6 2xl:container 2xl:mx-auto 2xl:px-20 ">
        <div className=" flex flex-col items-stretch md:w-2/3 lg:w-full xl:justify-between ">
          <div className="flex justify-center">
            <Image
              width={600}
              height={600}
              src={product.image}
              className="aspect-square border-gray-200 md:border-r md:border-b lg:border-r-0 lg:border-b-0"
              alt={product.name}
            />
          </div>
          <div className="hidden w-full flex-col items-start justify-start pb-12 md:flex lg:hidden">
            <div className="mt-8 flex w-full items-center justify-between border-b border-gray-200 pb-4 md:mt-10 xl:mt-12">
              <p className="text-base font-medium leading-none text-gray-800">
                Details
              </p>
              <button>
                <img
                  className="w-6"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                  alt="add"
                />
              </button>
            </div>
            <div className="mt-4 flex w-full items-center justify-between border-b border-gray-200 pb-4">
              <p className="text-base font-medium leading-none text-gray-800">
                Size chart
              </p>
              <button>
                <img
                  className="w-6"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                  alt="add"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-start border-gray-200 md:mt-0  md:w-2/3 md:px-6  md:py-12 lg:border-l xl:px-8 2xl:justify-between">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl font-medium leading-5 text-gray-800 xl:text-2xl xl:leading-normal">
              {product.name}
            </p>
          </div>
          <div className="mt-6 flex w-full items-center justify-between xl:mt-8">
            <div className="flex items-center justify-start space-x-6">
              <p className="text-center text-xl leading-5 text-gray-800">
                {formatter.format(product.price / 100)}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start justify-start space-y-5 xl:mt-10">
            <p className="text-center text-lg font-medium leading-none text-gray-800 xl:text-xl xl:leading-5">
              Specs
            </p>
            <div className="flex items-center justify-start space-x-3">
              <p className="flex h-5 items-center justify-center  rounded-full  text-lg leading-none text-gray-400">
                {product.size}
              </p>
            </div>
          </div>
          <div className="mt-8 flex h-11 w-full items-center justify-between border border-gray-200 xl:mt-12">
            <button
              onClick={() => handleNum('sub')}
              className="broder-gray-200 flex h-full w-11 items-center justify-center border-r xl:w-16"
            >
              <img
                className="w-6"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg1.svg"
                alt="subtract"
              />
            </button>
            <p id="num" className="text-xl leading-tight text-gray-600">
              {num}
            </p>
            <button
              onClick={() => handleNum('add')}
              className="broder-gray-200 flex h-full w-11 items-center justify-center border-l xl:w-16"
            >
              <img
                className="w-6"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                alt="add"
              />
            </button>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-center space-y-4 xl:mt-10 xl:flex-row xl:space-y-0 xl:space-x-8">
            <button
              onClick={() => addToCart(product, num)}
              className="duration-400 flex w-full items-center justify-center rounded-full border border-gray-600 bg-gray-800 py-3 text-base leading-none text-gray-50 transition ease-in-out hover:bg-gray-200 hover:text-gray-800 xl:py-4"
            >
              Add to cart
            </button>
          </div>
          <p className="mt-6 text-base leading-normal text-gray-600 xl:mt-10">
            {product.description}
          </p>
          <div className=" w-full flex-col items-start justify-start pb-12 md:hidden lg:flex">
            <div className="jusitfy-start mt-8 flex items-center space-x-4 xl:mt-10">
              <p className="text-lg font-medium leading-none text-gray-800">
                Share :{' '}
              </p>
              <button
                aria-label="facebook"
                className="duration-400 w-6 transition ease-in-out hover:-translate-y-0.5 "
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg3.svg"
                  alt="facebook"
                />
              </button>
              <button
                aria-label="twitter"
                className="duration-400 w-6 transition ease-in-out hover:-translate-y-0.5 "
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg4.svg"
                  alt="twitter"
                />
              </button>
              <button
                aria-label="instagram"
                className="duration-400 w-6 transition ease-in-out hover:-translate-y-0.5 "
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg5.svg"
                  alt="instagram"
                />
              </button>
            </div>
            <div className="mt-8 flex w-full items-center justify-between border-b border-gray-200 pb-4 md:mt-10 xl:mt-12">
              <p className="text-base font-medium leading-none text-gray-800">
                Details:
              </p>
              <button>
                <img
                  className="w-6"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                  alt="add"
                />
              </button>
            </div>
            <div className="mt-4 flex w-full items-center justify-between border-b border-gray-200 pb-4">
              <p className="text-base font-medium leading-none text-gray-800">
                Size chart
              </p>
              <button>
                <img
                  className="w-6"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_detail_svg2.svg"
                  alt="add"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
