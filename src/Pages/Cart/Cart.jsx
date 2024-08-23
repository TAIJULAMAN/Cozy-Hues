
import CartTable from "./CartTable";
import LowerHero from "../../Components/Home/LowerHero/LowerHero";
import OrderSummary from "../../Components/Shared/OrderSummary";

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
    <div>
      <div className="py-20 md:py-32 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Cart</p>
      </div>
      <div className="section-container my-6 lg:my-8 grid gap-6 lg:gap-12 lg:grid-cols-3 px-4 lg:px-12">
        {/* Table */}
        <div className="lg:col-span-2 mt-10 lg:mt-20  rounded-3xl ">
          <div className="border-2 rounded-3xl">
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
                {cartItems?.map((item, idx) => (
                  <CartTable key={idx} idx={idx} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Summary */}
         <OrderSummary />
         
      </div>
      <LowerHero />
    </div>
  );
};

export default Cart;
