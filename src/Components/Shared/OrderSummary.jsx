import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const OrderSummary = () => {
    const location = useLocation()
    const path = location.pathname
    console.log(path)
  return (
    <div className="border-2 rounded-2xl p-6 sm:p-8 lg:p-12 w-full lg:w-96">
      <div className="bg-[#2d5356] w-full h-12 sm:h-14 lg:h-16 font-semibold pt-2 lg:pt-3 rounded-2xl px-4 sm:px-6 text-white text-sm sm:text-xl lg:text-2xl text-center">
        <p>Order Summary</p>
      </div>
      <div>
        <div className="flex justify-between my-4 sm:my-6 lg:my-8 text-sm sm:text-xl lg:text-2xl font-semibold">
          <p>Subtotal</p>
          <p className="">1000 BDT</p>
        </div>
        <div className="flex justify-between my-4 sm:my-6 lg:my-8 text-sm sm:text-xl lg:text-2xl font-semibold">
          <p>Shipping</p>
          <p className="">Free</p>
        </div>

        <form action="">
          <button
            type="submit"
            className="text-[#d09423] flex gap-4 items-center text-xs sm:text-xl lg:text-2xl font-medium cursor-pointer"
          >
            Add Coupon Code <FaArrowRight className="text-lg lg:text-xl" />
          </button>
          <input
            type="text"
            className="border-2 rounded-xl mt-2 sm:mt-4 lg:mt-6 p-2 w-full"
            placeholder="coupon here"
          />
        </form>
        <div className="flex justify-between my-4 sm:my-6 lg:my-8 text-sm sm:text-xl lg:text-2xl font-semibold">
          <p>Total</p>
          <p className="">1200 BDT</p>
        </div>

        {
            path === '/cart'?<Link to="/checkout">
            <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-full lg:w-56 h-10 sm:h-12 lg:h-16 text-xs sm:text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold my-6 sm:my-8">
              Checkout
              <FaArrowRightLong className="text-lg lg:text-xl" />
            </button>
          </Link>: 
            <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-full lg:w-64 h-10 sm:h-12 lg:h-16 text-xs sm:text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold my-6 sm:my-8">
              Confirm Payment
              <FaArrowRightLong className="text-lg lg:text-xl" />
            </button>
        
        }
        
      </div>
    </div>
  );
};

export default OrderSummary;
