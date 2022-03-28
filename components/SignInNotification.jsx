import React from 'react'
const SignInNotification = ({ show, setShow }) => {
  return (
    <div>
      {/* Code block starts */}
      <div className="absolute top-44 flex items-center justify-center px-4 sm:px-0">
        <div
          id="alert"
          className={
            show
              ? 'top-0 mt-12 mb-8 items-center justify-between rounded-md bg-blue-200  py-4 px-4 shadow  transition duration-150 ease-in-out md:flex lg:w-10/12 '
              : 'translate-hide top-0 mt-12 mb-8 items-center justify-between rounded-md  bg-blue-200 py-4 px-4  shadow transition duration-150 ease-in-out md:flex lg:w-10/12'
          }
        >
          <div className="items-center sm:flex">
            <div className="flex items-end">
              <div className="mr-2 mt-0.5 text-blue-500 sm:mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="mr-2 hidden h-1 w-1 rounded-full bg-blue-500 xl:block" />
            <p className="text-base text-blue-500">
              Please check your email address for your login link
            </p>
          </div>
          <div className="mt-4 flex justify-end md:mt-0 md:pl-4 lg:pl-0">
            <span
              onClick={() => setShow(false)}
              className="cursor-pointer text-sm text-gray-500"
            >
              Dismiss
            </span>
          </div>
        </div>
      </div>
      {/* Code block ends */}
      <style>
        {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
      </style>
    </div>
  )
}
export default SignInNotification
