import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ImageSlider from "../../ImageSlider/ImageSlider";

function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row justify-center w-full gap-10">
      <div className="w-full lg:w-2/5 py-5 px-4 lg:px-0">
        <div>
          <p className="bg-[#426467] text-white text-[14px] lg:text-[16px] font-[400] w-48 lg:w-56 p-3 text-center rounded-3xl">
            FURNITURE DESIGNS IDEA
          </p>
          <p className="text-4xl lg:text-7xl font-bold pt-2 mt-4">Modern Interior</p>
          <p className="text-4xl lg:text-7xl font-bold pt-2">Design Studio</p>
          <p className="text-sm lg:text-base font-normal py-5 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea aspernatur, assumenda officiis perferendis quisquam vel, maxime laudantium minima repudiandae quas minus! Laudantium dolorum veritatis minus pariatur itaque quia molestias!
          </p>
          {/* button start*/}
          <div className="flex lg:flex-row items-center gap-5 lg:gap-14 mt-6">
            <div>
              <Link to='/products'>
                <button className="bg-[#d09423] rounded-full px-4 py-2 flex items-center gap-5 justify-center w-40 lg:w-56 h-12 lg:h-16 text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold">
                  Shop Now
                  <FaArrowRightLong className="text-lg lg:text-xl" />
                </button>
              </Link>
            </div>

            <div className="hover:cursor-pointer">
              <Link>
                <p className="text-lg lg:text-2xl border-b font-semibold">Follow Instagram</p>
              </Link>
            </div>
          </div>
          {/* button end*/}
        </div>
        <div className="flex lg:flex-row gap-8 lg:gap-16 pt-10 text-base lg:text-lg font-normal mt-2">
          <div>
            <p className="font-semibold text-2xl lg:text-3xl">50000+</p>
            <p className="text-lg lg:text-xl">Happy Customer</p>
          </div>
          <div>
            <p className="font-bold text-2xl lg:text-3xl">50+</p>
            <p className="text-lg lg:text-xl">Certified Outlets</p>
          </div>
          <div>
            <p className="font-bold text-2xl lg:text-3xl">2500+</p>
            <p className="text-lg lg:text-xl">Unique Styles</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-3/5 px-4 lg:px-0">
       <ImageSlider/>
      </div>
    </div>
  );
}                  

export default HeroContent;
