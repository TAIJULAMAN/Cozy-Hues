import OrderSummary from "../../Components/Shared/OrderSummary";
import CheckAddress from "./CheckAddress";
import LowerHero from './../../Components/Home/LowerHero/LowerHero';

function Checkout() {
  return (
    <div className="">
      <div className=" py-12 md:py-20 bg-[#2d5356]  md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Checkout</p>
      </div>

      <div className="section-container my-6 lg:my-8 grid gap-6 lg:gap-12 lg:grid-cols-3 px-4 lg:px-12">
        {/* left */}
        <div className="lg:col-span-2 mt-10 lg:mt-20  rounded-3xl">
         <CheckAddress/>
        </div>
        {/* right */}
        <div>
             <OrderSummary/>
        </div>
      </div>
      <LowerHero/>
    </div>
  );
}

export default Checkout;
