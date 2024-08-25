/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";

function OrderComplete() {
  return (
    <div>
      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Order Completed</p>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div className="bg-white p-8 rounded-xl  max-w-md w-full text-center">
          <div className="text-yellow-500 mb-4">
            <img src="/complete-order.png" alt="" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Thank you for your purchase!
          </h2>
          <p className="text-gray-700 mb-4">
            Your order has been successfully processed. Here are the
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/ordersummary">
          <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-full lg:w-64 h-10 sm:h-12 lg:h-16 text-xs sm:text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold my-6 sm:my-8">
            View Order Details
            <FaArrowRightLong className="text-lg lg:text-xl" />
          </button>
        </Link>
      </div>

      <div className="text-center  p-6 md:p-8">
    <div className="max-w-xl mx-auto flex flex-col justify-center text-left">
        <p className="text-3xl md:text-4xl font-semibold py-4 md:py-8">Order Status:</p>

        <p className="text-gray-600 text-lg md:text-xl">
            Your order is now completed and will be processed for shipment. You will receive a confirmation email shortly with tracking information once your items have been dispatched. <br /><br />
            Thank you for shopping with us! If you have any questions or concerns, please don't hesitate to contact our customer support team.
            <br />
            <span className="text-blue-600">Email: mohinr26@gmail.com</span>
            <br />
            <span className="text-blue-600">Phone no: 01533872264</span>
        </p>
    </div>
</div>
    </div>
  );
}

export default OrderComplete;
