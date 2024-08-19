import React from "react";
import image from "../../../../public/3.png";

function NewCollection() {
  return (
    <div className="flex gap-5 px-16">
      <div className="w-3/5 flex-col gap-5">
        <div className="bg-[#F5F5F5] p-10 rounded-xl flex justify-center gap-10">
          <div className="w-1/2 text-left">
            <p className="bg-white rounded-full text-center border-[1px] px-2 py-1 border-gray-400 font-semibold w-2/3">
              NEW COLLECTION
            </p>
            <p className="text-[#414140] text-2xl font-semibold py-5">
              Accent Chairs
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Arm Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Wing Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Cafe Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Wheels Chair
            </p>
            <button className="border-b-2 border-[#2d5356] text-[#2d5356] text-xl font-semibold ">
              View All
            </button>
          </div>
          <div className="object-cover w-1/2 flex-col justify-center items-center">
            <img src={image} className="object-cover w-[150px] h-[300px]" />
          </div>
        </div>

        <div className="flex gap-5 w-full mt-5">
          <div className="bg-[#f5f5f5] w-1/2 rounded-xl p-10">
            <p className="bg-white rounded-full text-center border-[1px] px-2 py-1 border-gray-400 font-medium w-2/3 mb-3">
                NEW COLLECTION
              </p>
            <div className="flex gap-5 justify-center items-center text-center">
              <div className="w-1/2 text-left">
                <p className="text-[#414140] text-lg font-bold pb-3">
                  Accent Chairs
                </p>
                <p className="text-[#414140] text-sm font-medium pb-2">
                  Arm Chair
                </p>
                <p className="text-[#414140] text-sm font-medium pb-2">
                  Wing Chair
                </p>
                <p className="text-[#414140] text-sm font-medium pb-2">
                  Cafe Chair
                </p>
                <p className="text-[#414140] text-sm font-medium pb-3">
                  Wheels Chair
                </p>
                <button className="border-b-2 border-[#2d5356] text-[#2d5356] text-xl font-semibold ">
                  View All
                </button>
              </div>
              <div className="object-cover w-1/2 flex-col justify-center items-center">
                <img src={image} className="object-cover w-[70px] h-[180px]" />
              </div>
            </div>
          </div>

          <div className="bg-[#2d5356] w-1/2 flex-col justify-center text-center items-center px-12 py-24 rounded-xl">
            <button className="bg-[#d09423] text-white text-xl uppercase rounded-full px-4 py-2">
              Get Discount
            </button>
            <p className="text-white text-4xl mt-3">20% OFFER</p>
          </div>
        </div>
      </div>

      <div className="w-2/5 bg-[#F5F5F5] p-10 rounded-xl">
        <div>
          <div>
            <p className="bg-white rounded-full text-center border-[1px] w-1/2 px-2 py-1 border-gray-400 font-semibold">
              NEW COLLECTION
            </p>
            <p className="text-[#414140] text-2xl font-semibold py-5">
              Accent Chairs
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Arm Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Wing Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Cafe Chair
            </p>
            <p className="text-[#414140] text-base font-semibold pb-2">
              Wheels Chair
            </p>
            <button className="border-b-2 border-[#2d5356] text-[#2d5356] text-xl font-semibold ">
              View All
            </button>
          </div>
          <div className="w-1/2 -mt-20 ml-28">
            <img src={image} className="w-[200px] h-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
