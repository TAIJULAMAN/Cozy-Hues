import React from "react";

function HeroContent() {
  return (
    <div className="flex justify-center w-full gap-10">
      <div className="w-2/5 py-5">
       <div>
       <p className="w-[100%] text-white text-[16px] font-[400]">FURNITURE DESIGNS IDEA</p>
        <p className="text-6xl font-bold pt-2">Modern Interior</p>
        <p className="text-6xl font-bold pt-2">Design Studio</p>
        <p className="text-base font-normal py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea
          aspernatur, assumenda officiis perferendis quisquam vel, maxime
          laudantium minima repudiandae quas minus! Laudantium dolorum veritatis
          minus pariatur itaque quia molestias!
        </p>
        <button className="bg-[#d09423] rounded-full px-4 py-2">Shop Now</button>
       </div>
       <div className="flex gap-10 pt-10 text-lg font-normal">
        <div>
            <p className="font-bold text-2xl">50000+</p>
            <p className="text-sm">Happy Customer</p>
        </div>
        <div>
            <p className="font-bold text-2xl">50+</p>
            <p className="text-sm">Certified Outlets</p>
        </div>
        <div>
            <p className="font-bold text-2xl">2500+</p>
            <p className="text-sm">Unique Styles</p>
        </div>
       </div>

      </div>

      <div className="w-3/5">slide</div>
    </div>
  );
}

export default HeroContent;
