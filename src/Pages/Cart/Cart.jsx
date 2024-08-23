import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import CartTable from "./CartTable";

const Cart = () => {
  const cartItems = [
    {
      image: "/sofa1.png",
      itemName: "Chicken Burger",
      quantity: 2,
      subtotal: 12.99,
      action: "remove",
    },
    {
      image: "/sofa2.png",
      itemName: "Veggie Pizza",
      quantity: 1,
      subtotal: 8.99,
      action: "remove",
    },
    {
      image: "/sofa3.png",
      itemName: "French Fries",
      quantity: 3,
      subtotal: 5.97,
      action: "remove",
    },
    {
      image: "/sofa2.png",
      itemName: "Chocolate Shake",
      quantity: 1,
      subtotal: 4.99,
      action: "remove",
    },
  ];

  return (
    <div className="section-container my-14 lg:my-28 grid gap-6 lg:gap-12 lg:grid-cols-3 px-4 lg:px-12">
      {/* Table */}
      <div className="lg:col-span-2 mt-10 lg:mt-20  rounded-3xl">
        <div className="overflow-x-auto md:overflow-x-hidden">
          <table className="w-full table-auto rounded-3xl">
            <thead className="bg-[#2d5356] text-white font-semibold text-xs sm:text-sm lg:text-lg rounded-tl-2xl rounded-tr-2xl rounded-3xl">
              <tr>
                <th className="px-2 sm:px-4 lg:px-6 py-3">#</th>
                <th className="px-2 sm:px-4 lg:px-6 py-3">Image</th>
                <th className="px-2 sm:px-4 lg:px-6 py-3">Item Name</th>
                <th className="px-2 sm:px-4 lg:px-6 py-3">Quantity</th>
                <th className="px-2 sm:px-4 lg:px-6 py-3">Subtotal</th>
                <th className="px-2 sm:px-4 lg:px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm lg:text-lg font-medium text-gray-700 rounded-bl-2xl rounded-br-2xl">
              {cartItems?.map((item, idx) => <CartTable key={idx} idx={idx} item={item} />)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Summary */}
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
            <button type="submit" className="text-[#d09423] flex gap-4 items-center text-xs sm:text-xl lg:text-2xl font-medium cursor-pointer">
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
          <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-full lg:w-56 h-10 sm:h-12 lg:h-16 text-xs sm:text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold my-6 sm:my-8">
            Checkout
            <FaArrowRightLong className="text-lg lg:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
