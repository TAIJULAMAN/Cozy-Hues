/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";

const TrendingCard = ({data}) => {
    console.log(data);
  return (
    <div className="relative bg-[#f5f5f5] rounded-3xl overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[450px]">
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
     <div className="  text-white">
        <p className="text-xl md:text-2xl font-semibold">{data.title}</p>
        <p className="text-lg md:text-xl">{data.price}</p>
      </div>
      <div className="w-20 h-20 bg-[#ffffff] rounded-full">
      <GiShoppingBag className="text-5xl text-[#d09423] ml-3 mt-3" />
      </div>
     </div>
    </div>
  </div>
  );
};

export default TrendingCard;
