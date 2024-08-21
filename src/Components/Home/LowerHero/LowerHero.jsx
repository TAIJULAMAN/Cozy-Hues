import { FaCar } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import { IoBagOutline, IoReturnDownBack } from "react-icons/io5";


function LowerHero() {
  return (
    <div className="bg-[#FFFFFF] px-16 text-[#414140] text-base font-normal flex max-sm:flex-col max-sm:justify-center items-center justify-between gap-10 py-20">
      <div>
        <div className="flex flex-col">
          <div className="rounded-full w-12 h-12 bg-slate-200 relative"></div>
          <div className="ml-3 absolute w-12 h-12 bg-[#ffba35] rounded-full flex justify-center text-center items-center">
            <p><FaCar className="text-3xl"/></p>
          </div>
        </div>
        <p className="text-4xl font-semibold mt-5">Fast & Free</p>
        <p className="text-4xl font-semibold">Shipping</p>
      </div>
      <div>
        <div className="flex">
          <div className="rounded-full w-12 h-12 bg-slate-200 relative"></div>
          <div className="ml-3 absolute w-12 h-12 bg-[#ffba35] rounded-full flex justify-center text-center items-center">
            <p><IoBagOutline className="text-3xl"/></p>
          </div>
        </div>
        <p className="text-4xl font-semibold mt-5">Easy to</p>
        <p className="text-4xl font-semibold">Shop</p>
      </div>
      <div>
        <div className="flex">
          <div className="rounded-full w-12 h-12 bg-slate-200 relative"></div>
          <div className="ml-3 absolute w-12 h-12 bg-[#ffba35] rounded-full flex justify-center text-center items-center">
            <p><HiOutlineSupport className="text-3xl"/></p>
          </div>
        </div>
        <p className="text-4xl font-semibold mt-5">24/7</p>
        <p className="text-4xl font-semibold">Support</p>
      </div>
      <div>
        <div className="flex">
          <div className="rounded-full w-12 h-12 bg-slate-200 relative"></div>
          <div className="ml-3 absolute w-12 h-12 bg-[#ffba35] rounded-full flex justify-center text-center items-center">
            <p><IoReturnDownBack className="text-3xl"/></p>
          </div>
        </div>
        <p className="text-4xl font-semibold mt-5">Hastle Free</p>
        <p className="text-4xl font-semibold">Returns</p>
      </div>
    </div>
  );
}

export default LowerHero;
