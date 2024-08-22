import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeroNav = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="sticky z-10 w-full text-[#e8e9f3] bg-[#2D5356] px-4 lg:px-16">
      <div>
        <div className="flex flex-row justify-between items-center py-5">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold hover:text-[#98dad9]">
                <span className="text-[#D09423] text-[24px] font-bold ml-[1px]">C</span>
                ozy Hues
                <span className="text-[#D09423] text-[24px] font-extrabold ml-[1px]">.</span>
              </h1>
            </Link>
          </div>

          <nav className="max-sm:hidden sm:hidden  md:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="/" className="hover:text-[#98dad9] transition-all cursor-pointer">Home</Link>
            <Link to="/products" className="hover:text-[#98dad9] transition-all cursor-pointer">Products</Link>
            <Link to="/categories" className="hover:text-[#98dad9] transition-all cursor-pointer">Categories</Link>
            <Link to="/blogs" className="hover:text-[#98dad9] transition-all cursor-pointer">Blogs</Link>
          </nav>

          <div className="max-sm:hidden sm:hidden  md:flex lg:flex gap-2">
            <Link to="/">
              <button className=" font-medium hover:bg-[#98dad9] px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <FaRegHeart className="text-white text-2xl"/>
              </button>
            </Link>
            <Link to="/">
              <button className=" font-medium hover:bg-[#98dad9] px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <IoBagOutline className="text-white text-2xl"/>
              </button>
            </Link>
            <Link to="/signup">
              <button className=" font-medium hover:bg-[#98dad9] px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <CiUser className="text-white text-2xl"/>
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            {/* Mobile Menu Icon */}
            <button onClick={handleChange}>
              {menu ? (
                <AiOutlineClose size={28} />
              ) : (
                <AiOutlineMenu size={28} />
              )}
            </button>
          </div>
        </div>

        <div className={`${menu ? "block" : "hidden"} md:hidden flex flex-col bg-[#2d5356] text-white font-semibold text-lg text-center gap-6 p-6`}>
          <Link to="/" onClick={closeMenu} className="hover:text-[#98dad9] transition-all cursor-pointer">Home</Link>
          <Link to="/products" onClick={closeMenu} className="hover:text-[#98dad9] transition-all cursor-pointer">Products</Link>
          <Link to="/categories" onClick={closeMenu} className="hover:text-[#98dad9] transition-all cursor-pointer">Categories</Link>
          <Link to="/blogs" onClick={closeMenu} className="hover:text-[#98dad9] transition-all cursor-pointer">Blogs</Link>
          <div className="flex justify-center gap-4">
            <Link to="/">
              <button className=" font-medium hover:bg-[#98dad9]  px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <FaRegHeart className="text-white text-2xl"/>
              </button>
            </Link>
            <Link to="/">
              <button className=" font-medium hover:bg-[#98dad9]  px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <IoBagOutline className="text-white text-2xl"/>
              </button>
            </Link>
            <Link to="/signup">
              <button className=" font-medium hover:bg-[#98dad9]  px-2 py-1 rounded-md transition duration-300 ease-in-out">
                <CiUser className="text-white text-2xl"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
