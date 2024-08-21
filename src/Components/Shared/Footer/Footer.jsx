import { FaCcVisa, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-16 ">
      <hr />
      <div className=" flex justify-center">
        <Link to="/">
          <img className="w-56 object-cover " src="/logo.png" alt="" />
        </Link>
      </div>
      <hr />

      {/* items */}

      <div className="flex flex-wrap justify-around bg-[#ffffff] mt-16 text-xl mb-12 ">
        {/* left */}
        <div className="  mb-4">
          <ul >
            <Link><li className="my-4 font-semibold text-[#525150]">About</li></Link>
            <Link><li className="my-2 text-[#8a8a8a]">Our Company</li></Link>
            <Link><li className="my-2 text-[#8a8a8a]">Our Story</li></Link>
            <Link><li className="my-2 text-[#8a8a8a]">Blog</li></Link>
            
          </ul>
        </div>
        {/* middle */}
        <div  className="  mb-4">
          <ul>
          <Link><li className="my-4 font-semibold text-[#525150]">Information</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Delivery Information</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Privacy Policy</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Terms & Condition</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Return</li></Link>
          </ul>
        </div>
        {/* right */}
        <div className="  mb-4">
          <ul>
          <Link><li className="my-4 font-semibold text-[#525150]">Support</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Contact Us</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Help</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">FAQ</li></Link>
          <Link><li className="my-2 text-[#8a8a8a]">Cheak Out</li></Link>
          </ul>
        </div>
      </div>


      {/* bottom footer */}
       <div className="w-full bg-[#2d5356] py-6 px-4">
           <div className="flex flex-wrap items-center justify-between">
            {/* left */}
             <div className="text-center md:text-left">
             <p className="text-base text-[#8da0a2]">Copyright@2024 Ensurence Technology.All Rights Reserved</p>
             </div>
{/* middle */}
              <div className="flex gap-2 justify-center md:justify-start">
              <div className="flex gap-2">
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#3a5d60]">
            <FaInstagram className="text-xl text-white" />
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#3a5d60]">
            <FaXTwitter className="text-xl text-white" />
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#3a5d60]">
            <FaFacebookF className="text-xl text-white" />
          </div>
        </Link>
      </div>
              </div>

              {/* right */}
              <div className="flex gap-2 justify-center md:justify-end">
              <div className="flex gap-2">
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#3a5d60]">
          <FaCcVisa className="text-xl text-white" />

     
          </div>
        </Link>
        <Link>
          <div className="flex items-center justify-center rounded-full w-9 h-8 bg-[#3a5d60]">
          <MdOutlinePayment className="text-xl text-white" />
         
          </div>
        </Link>

      </div>
              </div>
           </div>
       </div>
    </div>
  );
}

export default Footer;
