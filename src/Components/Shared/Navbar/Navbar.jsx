import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-wrap justify-between px-6 py-2 bg-[#D09423] text-[16px] font-[400] text-white h-16 items-center">
    <div className="max-sm:hidden md:flex items-center gap-2">
      <p className="font-semibold text-xl">Follow Us</p>
      <div className="flex gap-2">
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#d59f39]">
            <FaInstagram className="text-xl" />
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#d59f39]">
            <FaXTwitter className="text-xl" />
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#d59f39]">
            <FaFacebookF className="text-xl" />
          </div>
        </Link>
      </div>
    </div>
    <div className=" text-center ">
      <p className="text-lg lg:text-xl text-center self-center ml-10">Sign up get 20% Off for all collection</p> 
    </div>
    <div className="max-sm:hidden  text-center md:flex items-center gap-1 text-lg lg:text-xl">
      <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#d59f39]">
        <FiPhoneCall className="text-xl" />
      </div>
      <p>01956729315</p>
    </div>
  </div>
  
  );
}

export default Navbar;
