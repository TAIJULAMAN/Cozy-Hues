/* eslint-disable react/prop-types */


const PDetailsImagePrice = ({handleImageClick,mainImage}) => {
  return (
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16 container mx-auto">
            {/* image section */}
            <div className="w-full lg:sticky top-0 text-center">
              <div className="lg:h-[700px] ">
                <img
                  src={mainImage}
                  alt="Product"
                  className="w-full h-full rounded-md object-cover object-top"
                />
              </div>

              <div className="flex flex-wrap gap-4 justify-center mx-auto mt-4">
                <img
                  src="/hero4.jpg"
                  alt="Product1"
                  className="w-16 cursor-pointer rounded-md outline object-cover"
                  onClick={() => handleImageClick("/hero4.jpg")}
                />
                <img
                  src="/hero1.jpg"
                  alt="Product2"
                  className="w-16 cursor-pointer rounded-md object-cover"
                  onClick={() => handleImageClick("/hero1.jpg")}
                />
                <img
                  src="/hero2.jpg"
                  alt="Product3"
                  className="w-16 cursor-pointer rounded-md object-cover"
                  onClick={() => handleImageClick("/hero2.jpg")}
                />
                <img
                  src="/hero3.jpg"
                  alt="Product4"
                  className="w-16 cursor-pointer rounded-md object-cover"
                  onClick={() => handleImageClick("/hero3.jpg")}
                />
              </div>
            </div>

            {/* product price section */}
            <div className="p-4">
              {/* Discount Banner */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
                <div className="text-3xl font-semibold text-gray-600">
                  <i className="mr-2">🔖</i> Save 25$
                </div>
                <div className=" text-gray-500 text-xl">
                  Choice Day <i className="ml-2">📅</i>
                </div>
              </div>

              {/* Product Title and Description */}
              <div className=" mb-4">
                <h1 className="text-xl  font-semibold text-[#737c73]">
                  Swivel Home Chair
                </h1>
                <p className="text-gray-500 text-sm mt-1 ">
                  My Art Design Faux Leather - Modern Swivel Lounge Chair With
                  Hydraulic Lift For Home Office Hotel Cafe Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
              </div>

              {/* Price Section */}
              <div className=" mb-4 mt-8">
                <div className="text-4xl font-semibold text-gray-800">
                  $130.00
                  <span className="text-xl text-gray-400 line-through ml-2">
                    $155.00
                  </span>
                </div>
                <div className="text-lg font-medium text-gray-500 mt-8">
                  Product code : 992965{" "}
                  <span className="text-green-500 ml-2">In Stock</span>
                </div>
                <div className="flex items-center  text-xl font-medium mt-8">
                  <span className="mr-2">⭐ 4.9</span>
                  <span className="text-[#7f7f7f]">140 Reviews</span> <span className="mx-2 text-[#7f7f7f]">|</span>
                  <span className="text-[#7f7f7f]">431 sold</span>
                </div>
              </div>

              {/* Quantity Selector and Buttons */}
              <div className="flex items-center  gap-4 mb-4 mt-8">
                <div className="flex items-center border rounded-lg px-4 py-2 font-bold text-xl">
                  <button className="text-gray-600">-</button>
                  <span className="mx-4">01</span>
                  <button className="text-gray-600">+</button>
                </div> 
                <button className="bg-[#d09423] text-white py-4 px-4 w-1/3 rounded-2xl font-semibold">
                  Buy Now
                </button>
                <button className="bg-[#2d5356] text-white py-4 px-4 w-1/3 rounded-2xl font-semibold">
                  Add To Cart
                </button>
              </div>

              {/* Coupon Section */}
              <div className="">
                <div className="text-gray-600 text-2xl font-semibold mt-10 mb-3">
                  Coupon & Discount
                </div>
                <div className="bg-gray-800 text-white p-8 rounded-lg">
                  <div className="text-2xl font-semibold">GET EXTRA 15% OFF</div>
                  <div className="text-xl text-gray-300 mt-1 ">
                    ON PURCHASE OF 2+ STYLES
                  </div>
                  <div className="text-yellow-400 mt-2 text-xl">USE CODE: TW015</div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PDetailsImagePrice