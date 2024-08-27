/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa"
import { GiShoppingBag } from "react-icons/gi"
import { Link } from "react-router-dom"

const DiscoverSimilarCard = ({data}) => {
  return (
    <Link to='/product/:id' className="relative bg-[#f5f5f5] rounded-3xl overflow-hidden w-full sm:w-auto">
    <div className="relative flex flex-col items-start p-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <p className="bg-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <FaRegHeart className="text-lg hover:text-red-600" />
          </p>
        </div>
        <div className="bg-[#0b7e87] h-10 rounded-3xl flex items-center justify-center border-2 w-20">
          <p className="text-lg text-white font-semibold">
            {data.badgeText}
          </p>
        </div>
      </div>

      <img
        src={data.imageSrc}
        alt={data.title}
        className="w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px] object-cover mt-4"
      />

      <div className="w-full bg-[#2d5356] rounded-3xl mt-4 p-4 flex justify-between">
        <div className="text-white">
          <p className="text-lg md:text-xl font-semibold">{data.title}</p>
          <p className="text-md md:text-lg">{data.price}</p>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
         <button>
         <GiShoppingBag className="text-4xl md:text-5xl text-[#d09423]" />
         </button>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default DiscoverSimilarCard