/* eslint-disable react/prop-types */
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"


const AboutTeamCart = ({data}) => {
  return (
    <div className="relative bg-[#f5f5f5] rounded-3xl overflow-hidden w-full sm:w-auto">
       
    <div className="relative flex flex-col items-start p-4">
     

      <img
        src={data.image}
        alt={data.title}
        className="w-full h-[200px] sm:h-[220px] md:h-[230px] lg:h-[250px] object-cover mt-4"
      />

      <div className="w-full bg-[#2d5356] rounded-3xl mt-4 p-4 flex justify-between">
        <div className="text-white">
          <p className="text-lg md:text-xl font-semibold">{data.name}</p>
          <p className="text-md md:text-lg">{data.role}</p>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20  rounded-full flex items-center justify-center gap-5">
       
       <Link>
       <FaInstagram className="text-4xl md:text-2xl text-white" />
       </Link>
       <Link>
       <FaTwitter className="text-4xl md:text-2xl text-white" />
       </Link>
      
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutTeamCart