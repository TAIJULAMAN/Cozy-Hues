/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { GoTriangleRight } from "react-icons/go";
import TechniqualDetails from "./TechniqualDetails";

const PDDescription = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="mt-10 md:px-4 lg:px-0">
      <ul className="flex flex-wrap border-b text-lg sm:text-xl lg:text-2xl">
        <li
          className={`${
            activeTab === 'description'
              ? 'text-[#b97a07] font-semibold bg-white border-b-2 border-[#b97a07]'
              : 'text-gray-800'
          } py-2 sm:py-3 px-4 sm:px-6 cursor-pointer transition-all`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </li>
        <li
          className={`${
            activeTab === 'product-information'
              ? 'text-[#b97a07] font-semibold bg-white border-b-2 border-[#b97a07]'
              : 'text-gray-800'
          } py-2 sm:py-3 px-4 sm:px-6 cursor-pointer transition-all`}
          onClick={() => setActiveTab('product-information')}
        >
          Product Information
        </li>
        <li
          className={`${
            activeTab === 'reviews'
              ? 'text-[#b97a07] font-semibold bg-white border-b-2 border-[#b97a07]'
              : 'text-gray-500'
          } py-2 sm:py-3 px-4 sm:px-6 cursor-pointer transition-all`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </li>
      </ul>

      <div className="mt-6 sm:mt-8">
        {/* description */}
        {activeTab === 'description' && (
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800">
              Product Description
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl text-gray-500 mt-4">
              Elevate your casual style with our premium men's t-shirt. Crafted
              for comfort and designed with a modern fit, this versatile shirt is
              an essential addition to your wardrobe. The soft and breathable
              fabric ensures all-day comfort, making it perfect for everyday
              wear. Its classic crew neck and short sleeves offer a timeless
              look. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam animi doloremque consequuntur labore repellendus, a, aperiam distinctio similique hic quod excepturi facilis, maxime laudantium cumque minus ratione? Aut atque voluptatum iste, impedit recusandae facilis quia ullam aliquam placeat possimus mollitia incidunt eveniet dolores delectus porro fugit? Magni, ea repellendus.
            </p>

            <ul className="space-y-3 list-disc mt-6 pl-4 text-sm sm:text-lg lg:text-xl text-gray-500">
              <li className="flex items-center">
                <GoTriangleRight className="text-lg sm:text-xl lg:text-3xl text-[#d09423]" />
                A gray t-shirt is a wardrobe essential because it is so versatile.
              </li>
              <li className="flex items-center">
                <GoTriangleRight className="text-lg sm:text-xl lg:text-3xl text-[#d09423]" />
                Available in a wide range of sizes, from extra small to extra
                large, and even in tall and petite sizes.
              </li>
              <li className="flex items-center">
                <GoTriangleRight className="text-lg sm:text-xl lg:text-3xl text-[#d09423]" />
                This is easy to care for. They can usually be machine-washed and
                dried on low heat.
              </li>
              <li className="flex items-center">
                <GoTriangleRight className="text-lg sm:text-xl lg:text-3xl text-[#d09423]" />
                You can add your own designs, paintings, or embroidery to make
                it your own.
              </li>
            </ul>
          </div>
        )}

        {/* Product Information */}
        {activeTab === 'product-information' && (
          <TechniqualDetails />
        )}

        {/* reviews */}
        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
            <p className="text-sm text-gray-500 mt-4">
              There are no reviews yet. Be the first to write a review about this product!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDDescription;
