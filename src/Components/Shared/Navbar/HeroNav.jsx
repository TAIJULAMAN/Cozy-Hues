import { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
    <div className="sticky z-10 w-full text-[#e8e9f3] bg-[#2D5356] px-16">
      <div>
        <div className=" flex flex-row justify-between py-5 ">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold hover:text-[#98dad9]">
                <span className="text-[#D09423] text-[24px] font-bold ml-[1px]">
                  C
                </span>
                ozy Hues
                <span className="text-[#D09423] text-[24px] font-extrabold ml-[1px]">
                  .
                </span>
              </h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/products"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/categories"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Categories
            </Link>
            <Link
              to="/blogs"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-[#98dad9] transition-all cursor-pointer"
            >
              Blogs
            </Link>
          </nav>

          <div className=" hidden lg:flex gap-2">
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                s
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                c
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                p
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                l
              </button>
            </Link>
          </div>

          {/* <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />

            ) : (
               
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div> */}
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#2d5356] text-white  left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/categories"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Categories
          </Link>
          <Link
            to="/blogs"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-[#98dad9] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blogs
          </Link>
          <div className=" lg:hidden">
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                s
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                c
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                p
              </button>
            </Link>
            <Link to="/">
              <button className="text-[#2e424d] font-medium hover:bg-[#98dad9] bg-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                l
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNav;
