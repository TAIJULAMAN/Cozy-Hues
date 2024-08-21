

const NewsLetter = () => {
  return (
    <div className="mx-4 md:mx-8 lg:mx-12 mb-8 md:mb-12">
    <div className="bg-[#f5f5f5] max-w-full h-auto md:h-[500px] rounded-3xl flex flex-col md:flex-row justify-around items-center p-4 md:p-8">
      {/* Left */}
      <div className="text-center md:text-left">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1c1b1a] my-4 md:my-6">
          Subscribe To Our Newsletter
        </p>
        <p className="text-[#8e8e8e] text-lg md:text-xl my-4 md:my-6">
          Subscribe to our email newsletter today to receive updates on the latest news.
        </p>
  
        <div className="relative mt-4 md:mt-6">
          <input
            type="email"
            className="w-full md:w-[450px] h-14 md:h-20 rounded-full pl-4 md:pl-8 text-lg md:text-xl text-[#8e8e8e] pr-28"
            placeholder="Enter your email"
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 md:mt-3 md:mr-3 bg-[#cd9837] text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-full">
            Submit
          </button>
        </div>
      </div>
  
      {/* Right */}
      <div className="mt-8 md:mt-0">
        <img
          className="h-64 md:h-[450px] w-[500px] md:w-[700px] object-cover rounded-3xl"
          src="/sofa3.jpg"
          alt="Newsletter"
        />
      </div>
    </div>
  </div>
  
  )
}

export default NewsLetter