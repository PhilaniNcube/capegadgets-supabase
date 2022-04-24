import React, { useState } from 'react'

const Returns = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)

  return (
    <div className=" py-9 px-4 md:py-12 md:px-6 lg:px-20 2xl:container 2xl:mx-auto">
      <h2 className=" text-3xl font-semibold leading-9 text-gray-800 md:leading-7 lg:text-4xl lg:leading-9">
        Returns
      </h2>
      <div className="mt-4 flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between">
        <div className=" "></div>
      </div>
      <div className=" mt-8 flex flex-col md:mt-16 md:flex-row md:space-x-8">
        <div className=" w-full md:w-5/12 lg:w-4/12 ">
          <img
            src="/images/acer.png"
            alt="Laptop"
            className="hidden w-full md:block"
          />
          <img
            src="/images/acer.png"
            alt="Laptop"
            className="block w-full md:hidden "
          />
        </div>
        <div className=" mt-10 w-full sm:mt-14 md:mt-0 md:w-7/12 lg:w-8/12">
          {/* <!-- Returns Section --> */}

          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                Returns
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                onClick={() => setShow2(!show2)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show2 ? 'hidden' : 'block'}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                'mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 ' +
                (show2 ? 'block' : 'hidden')
              }
            >
              We will accept returns on a limited basis. The product needs to be
              in it's original packaging. The returns will only be accepted
              within 3 days of delivery of your order.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          {/* <!-- Exchange Section --> */}

          <div>
            <div className=" flex cursor-pointer items-center justify-between">
              <h3 className=" text-xl font-semibold leading-5 text-gray-800">
                Exchange
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                onClick={() => setShow3(!show3)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show3 ? 'hidden' : 'block'}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                'mt-4 w-11/12 text-base font-normal leading-6 text-gray-600 ' +
                (show3 ? 'block' : 'hidden')
              }
            >
              We currently only do exchanges if your order has not yet left our
              premises.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default Returns
