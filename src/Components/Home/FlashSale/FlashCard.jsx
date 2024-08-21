import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"


const FlashCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
    {/* First card */}
    <div className="relative w-full lg:w-[800px] h-[450px] lg:h-[550px] rounded-3xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/sofa2.jpg')`,
          opacity: 0.7, 
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-500 opacity-50"></div>
        
        {/* Content above the overlays */}
        <div className="relative z-10 p-6 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 pl-4 md:pl-12">
            <p className="text-white text-xl md:text-2xl">Exclusive Offer</p>
            <div className="bg-white h-8 w-20 rounded-2xl text-[#d09423] text-center pt-1">
              15% OFF
            </div>
          </div>
          <div className="pl-4 md:pl-12 text-3xl md:text-5xl text-white mt-4 md:mt-8">
            <p>Best Online <br /> Deals, Free Stuff</p>
            <p className="mt-4 md:mt-8 text-lg md:text-xl">Only this week... Don’t miss out!</p>
            <Link to="#">
              <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-52 h-10 md:h-12 lg:h-16 text-lg md:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold mt-6 md:mt-12">
                Get Best Deal
                <FaArrowRightLong className="text-lg md:text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second card */}
      <div className="relative w-full lg:w-[800px] h-[450px] lg:h-[550px] rounded-3xl overflow-hidden bg-[#f5f5f5]">
        {/* Content above the background */}
        <div className="relative z-10 p-6 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 pl-4 md:pl-12">
            <p className="text-[#4b4848] text-xl md:text-2xl font-semibold">Regular Offer</p>
          </div>
          <div className="pl-4 md:pl-12 text-3xl md:text-5xl text-black mt-4 md:mt-8">
            <p className="font-semibold">10% Cash-back <br /> on personal care</p>
            <p className="mt-4 md:mt-8 text-lg md:text-xl text-[#4b4848]">Max cashback: $12 Code: ALKJFAJ</p>
            <Link to="#">
              <button className="bg-[#2d5356] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-52 h-10 md:h-12 lg:h-16 text-lg md:text-xl hover:bg-[#0a2022] transition duration-300 ease-in-out font-semibold mt-6 md:mt-12 text-white ">
                Get Best Deal
                <FaArrowRightLong className="text-lg md:text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FlashCard