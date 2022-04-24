import React, { useState } from 'react'
export default function index() {
  return (
    <div>
      <div className=" relative 2xl:container 2xl:mx-auto">
        <div className=" absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 text-center">
          <div className=" flex h-full w-full flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold leading-7 text-white lg:text-4xl lg:leading-9">
              FAQs
            </h1>
            <p className=" mt-8 w-9/12 text-lg font-medium leading-7 text-white sm:w-full md:text-xl md:leading-5 ">
              Find Answers to Frequently Asked Questions
            </p>
          </div>
        </div>
        <img
          className=" hidden w-full lg:block"
          src="https://i.ibb.co/vzV3ZG5/Rectangle-6-8.png"
          alt="Image with ladies bag and accessories"
        />
        <img
          className=" hidden w-full sm:block lg:hidden"
          src="https://i.ibb.co/TmrtnBV/Rectangle-6-7.png"
          alt="Image with ladies bag and accessories"
        />
        <img
          className=" block w-full sm:hidden"
          src="https://i.ibb.co/dmTNcWD/img.png"
          alt="Image with ladies bag and accessories"
        />
      </div>
      <div className=" w-full py-12 px-4 md:py-12 md:px-6 lg:mx-auto lg:w-7/12 2xl:w-5/12">
        <div>
          <h2 className=" text-xl font-medium leading-7 text-gray-800 md:text-2xl md:leading-6">
            How long does it take for my package to arrive?
          </h2>
          <div className=" mt-4 md:mt-6">
            <p className=" text-base font-normal leading-6 text-gray-600">
              Products generally arrive between 7 to working days.
            </p>
            <br />
            <p className=" text-base font-normal leading-6 text-gray-600">
              In some cases especially for cellphones & laptops the delivery
              time may be increased due to the worldwide shortage of these
              devices.
            </p>
          </div>
        </div>
        {/* Question 2 */}
        <hr className=" my-8 w-full" />
        <div>
          <h2 className=" text-xl font-medium leading-7 text-gray-800 md:text-2xl md:leading-6">
            Where is my order?
          </h2>
          <div className=" mt-4 md:mt-6">
            <p className=" text-base font-normal leading-6 text-gray-600">
              Remember you can query the status of your orders anytime in My
              orders in the My account section. You can access directly in the
              Orders section.
            </p>
            <br />
            <p className=" text-base font-normal leading-6 text-gray-600">
              When your order is out for delivery, our courier will send you an
              sms.
            </p>
          </div>
        </div>
        {/* Question 3 */}
        <hr className=" my-8 w-full" />
        <div>
          <h2 className=" text-xl font-medium leading-7 text-gray-800 md:text-2xl md:leading-6">
            Can I cancel or change my Order?
          </h2>
          <div className=" mt-4 md:mt-6">
            <p className=" text-base font-normal leading-6 text-gray-600">
              Yes, you can change or cancel your order within the first 3 days
              of your order placement
            </p>
          </div>
        </div>
        <hr className=" my-8 w-full" />
      </div>
    </div>
  )
}
