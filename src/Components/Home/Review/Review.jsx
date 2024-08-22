/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Review() {
  const info = [
    {
      "image": "/sofa1.png",
      "userName": "Alice Johnson",
      "reviewDescription": "The comfort level of this sofa is outstanding! Fits perfectly in my living room.",
      "city": "Dhaka"
    },
    {
      "image": "/sofa2.png",
      "userName": "Michael Smith",
      "reviewDescription": "Stylish and comfortable. The best purchase I've made for my new apartment.",
      "city": "Dhaka"
    },
    {
      "image": "/sofa1.png",
      "userName": "Emily Davis",
      "reviewDescription": "I love the modern design. The material feels durable and high-quality.",
      "city": "Dhaka"
    },
    {
      "image": "/sofa4.jpg",
      "userName": "Daniel Brown",
      "reviewDescription": "Amazing value for the price. It looks even better in person!",
      "city": "Dhaka"
    },
    {
      "image": "/3.png",
      "userName": "Sophia Wilson",
      "reviewDescription": "The color is perfect, and it adds a nice touch to my home decor.",
      "city": "Dhaka"
    },
    {
      "image": "/3.png",
      "userName": "James Williams",
      "reviewDescription": "Highly recommend! The delivery was quick, and assembly was easy.",
      "city": "Dhaka"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? info.length - 2 : prevIndex - 2
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === info.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="mx-12 mt-20 mb-36">
      {/* heading part */}
      <div className="md:flex justify-between items-center ">
        {/* title */}
        <p className="text-2xl md:text-5xl font-semibold text-[#1c1b1a] my-16">Don't take our word, <br /> see what our clients say</p>
        {/* button */}
        <div className=" mx-24 bottom-4 flex gap-2 p-2">
          <button onClick={prevSlide} className="w-10 h-10 lg:w-24 lg:h-12  border-2 px-2 py-1 rounded-3xl hover:bg-[#d09423]  transition duration-300 ease-in-out ">
            <FaArrowLeft className="text-lg lg:text-2xl ml-1 lg:ml-6 text-[#d5a13e] hover:text-white " />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 lg:w-24 lg:h-12  border-2 px-2 py-1 rounded-3xl hover:bg-[#d09423] transition duration-300 ease-in-out">
            <FaArrowRight className="text-lg lg:text-2xl ml-1 lg:ml-6 text-[#d5a13e] hover:text-white" />
          </button>
        </div>
      </div>

      {/* content */}
      <div className="relative h-64 md:h-80 lg:h-[600px] w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {info.map((image, index) => (
            <div key={index}
              className="bg-[#2d5356] w-96 md:w-[800px] h-[500px] md:h-[570px] rounded-3xl flex-shrink-0"
            >
              <div className="p-8 flex gap-8">
                <div className="flex-1">
                  <img src={image.image} alt={`slide ${index}`} className="h-48 md:h-64 lg:h-[500px] w-full object-cover rounded-3xl" />
                </div>
                <div className="flex-1  justify-center items-center md:mt-24 text-[#92a5a6]">
                  <p>{image.reviewDescription}</p> <br />
                  <hr /><br /><br />
                  <p>{image.userName}</p>
                  <p>{image.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review;
