import image from "/hero3.jpg";
import image2 from "/hero2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NewCollection() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 px-4 md:px-8 lg:px-16">
        {/* top card */}
      <div className="lg:w-3/5 flex flex-col gap-5">
        <div className="bg-[#F5F5F5] p-5 md:p-10 rounded-xl flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-[#456669] bg-white rounded-full text-center border-[1px] px-2 py-1 font-semibold w-full md:w-2/3 mx-auto md:mx-0">
              NEW COLLECTION
            </p>
            <p className="text-[#414140] text-xl md:text-2xl font-semibold py-5">
              Accent Chairs
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">Arm Chair</p>
            <p className="text-[#414140] text-base font-semibold pb-2">Wing Chair</p>
            <p className="text-[#414140] text-base font-semibold pb-2">Cafe Chair</p>
            <p className="text-[#414140] text-base font-semibold pb-2">Wheels Chair</p>
            <Link  to='/products' >
              <button className=" border-b-2 border-[#2d5356] text-[#2d5356] hover:text-[#124447] text-xl font-semibold flex justify-center items-center gap-2 mt-4 md:mt-0">
                View All <FaArrowRight className="w-6 md:w-8 text-xl md:text-2xl" />
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src={image} className="object-cover w-[300px] h-[200px] md:w-[450px] md:h-[350px] rounded-xl" />
          </div>
        </div>
{/* bottom card */}
        <div className="flex flex-col md:flex-row gap-5 mt-5 w-full">
          <div className="bg-[#f5f5f5] w-full md:w-1/2 rounded-xl p-5 md:p-10">
            <p className="text-[#456669] bg-white rounded-full text-center border-[1px] px-2 py-1 font-medium w-full md:w-2/3 mx-auto md:mx-0 mb-3">
              NEW COLLECTION
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center text-center md:text-left">
              <div className="w-full md:w-1/2">
                <p className="text-[#414140] text-lg font-bold pb-3">Accent Chairs</p>
                <p className="text-[#414140] text-sm font-medium pb-2">Arm Chair</p>
                <p className="text-[#414140] text-sm font-medium pb-2">Wing Chair</p>
                <p className="text-[#414140] text-sm font-medium pb-2">Cafe Chair</p>
                <p className="text-[#414140] text-sm font-medium pb-3">Wheels Chair</p>
                <Link to='/products'>
                  <button className="border-b-2 border-[#2d5356] text-[#2d5356] text-sm md:text-xl font-semibold flex justify-center items-center gap-2">
                    View All <FaArrowRight className="w-6 md:w-8 text-xl md:text-2xl" />
                  </button>
                </Link>
              </div>
              <div className="flex justify-center items-center w-full md:w-1/2">
                <img src={image2} className="object-cover w-[250px] h-[150px] md:w-[270px] md:h-[180px] rounded-lg" />
              </div>
            </div>
          </div>
 
 {/* discount card */}
          <div className="bg-[#2d5356] w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-12 md:py-24 rounded-xl text-center">
            <button className="bg-[#d09423] text-white text-lg md:text-xl uppercase rounded-full px-4 py-2">
              Get Discount
            </button>
            <p className="text-white text-3xl md:text-4xl mt-3">20% OFFER</p>
          </div>
        </div>
      </div>
{/* last card */}
      <div className="lg:w-2/5 bg-[#F5F5F5] p-5 md:p-10 rounded-xl">
        <div className="text-center md:text-left">
          <p className="text-[#456669] bg-white rounded-full text-center border-[1px] w-2/3 md:w-1/2 px-2 py-1 mx-auto md:mx-0 font-semibold">
            NEW COLLECTION
          </p>
          <p className="text-[#414140] text-xl md:text-2xl font-semibold py-5">Accent Chairs</p>
          <p className="text-[#414140] text-base font-semibold pb-2">Arm Chair</p>
          <p className="text-[#414140] text-base font-semibold pb-2">Wing Chair</p>
          <p className="text-[#414140] text-base font-semibold pb-2">Cafe Chair</p>
          <p className="text-[#414140] text-base font-semibold pb-2">Wheels Chair</p>
          <Link to='/products'>
            <button className="border-b-2 border-[#2d5356] text-[#2d5356] text-xl font-semibold flex justify-center items-center gap-2 mt-3">
              View All <FaArrowRight className="w-8 text-2xl" />
            </button>
          </Link>
          <div className=" flex justify-end ">
            <img src={image} className="object-cover w-[300px] h-[300px] md:w-[500px] md:h-[450px] rounded-2xl md:-mt-20 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
