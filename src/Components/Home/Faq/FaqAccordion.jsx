/* eslint-disable react/prop-types */
import { useState } from "react";

const FaqAccordion = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full ">
    {data.map((item, index) => (
      <div key={index} className="border border-gray-200 rounded-lg mb-6 ">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => handleClick(index)}
        >
          <h3 className="font-semibold text-gray-800 text-2xl ">{item.question}</h3>
          <span className="text-gray-500 text-3xl">{activeIndex === index ? '-' : '+'}</span>
        </div>
        {activeIndex === index && (
          <div className="p-4 bg-[#2d5356]  border-t rounded-lg border-gray-200">
            <p className=" text-white text-xl">{item.answer}</p>
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default FaqAccordion