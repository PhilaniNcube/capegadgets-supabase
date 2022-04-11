export default function Contact() {
  return (
    <div className>
      <div className="relative flex flex-col items-start justify-start py-12">
        <img
          className="absolute bottom-0 z-0 w-full object-cover"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_6_bg.png"
          alt="background"
        />
        <div className="relative z-10 flex w-full flex-col items-start justify-start px-4 md:px-6 lg:w-3/4 xl:px-20">
          <h1 className="text-center text-xl font-extrabold leading-5 text-gray-800 md:text-2xl md:leading-6 xl:text-4xl xl:leading-9">
            Contact us
          </h1>
          <div className="mt-8 flex w-48 flex-col items-start justify-start space-y-4 xl:mt-10">
            <p className="text-lg leading-4 text-gray-800 xl:text-xl xl:leading-5">
              Mailing Address
            </p>
            <p className="text-base leading-normal text-gray-600">
              16 Strand Avenue, Humewood, Port Elizabeth.
            </p>
          </div>
          <h1 className="mt-10 text-xl leading-5 text-gray-800 md:mt-12 xl:mt-14 xl:text-2xl xl:leading-normal">
            Drop us a line
          </h1>
          <div className="mt-6 flex w-full flex-col items-start justify-start space-y-4 md:space-y-6 xl:mt-8 xl:space-y-8">
            <div className="jusitfy-start flex w-full items-start space-x-4 md:space-x-6 xl:space-x-8">
              <input
                type="text"
                name
                className="flex  h-11 w-full  items-center justify-start border border-gray-300 px-4 text-base leading-4 text-gray-800 placeholder-gray-400 focus:outline-none md:h-12 md:px-5 md:text-lg xl:h-14 xl:px-6 xl:text-xl xl:leading-5"
                id
                placeholder="Name"
              />
              <input
                type="email"
                name
                className="flex  h-11 w-full items-center justify-start border border-gray-300 px-4 text-base leading-4 text-gray-800 placeholder-gray-400 focus:outline-none md:h-12 md:px-5 md:text-lg xl:h-14 xl:px-6 xl:text-xl xl:leading-5"
                id
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <textarea
                type="text"
                name
                className="flex w-full resize-none items-start justify-start border border-gray-300  p-3 pb-32  text-base leading-4 text-gray-800 placeholder-gray-400 focus:outline-none md:px-5  md:pb-36 md:pt-5 md:text-lg xl:px-6 xl:pb-48 xl:pt-6 xl:text-xl xl:leading-5"
                id
                placeholder="Message"
                defaultValue={' '}
              />
            </div>
          </div>
          <button className="mt-6 h-11 w-full bg-gray-800 text-center text-lg leading-none text-white hover:bg-gray-700 focus:bg-gray-900 sm:w-48">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
