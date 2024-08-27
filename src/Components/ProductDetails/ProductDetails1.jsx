/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import PDetailsImagePrice from "./PDetailsImagePrice";
import PDDescription from "./PDDescription";
import DiscoverSimilar from "../DiscoverSimilar/DiscoverSimilar";
import LowerHero from "./../Home/LowerHero/LowerHero";

function ProductDetails1() {
  const [mainImage, setMainImage] = useState("/hero4.jpg");

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };
  return (
    <div className="">
      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center ">
        <p className="text-3xl md:text-5xl font-semibold">
          Product Details/ Item Names
        </p>
      </div>
      <div className="p-4  mt-16">
        {/* Image and image price section */}
        <PDetailsImagePrice
          handleImageClick={handleImageClick}
          mainImage={mainImage}
        />
        {/* product description section */}

        <div className="mx-16">
          <PDDescription />

          {/* discover similar itmes */}
          <DiscoverSimilar />

         <div className="mt-16">
         <LowerHero />
         </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails1;
