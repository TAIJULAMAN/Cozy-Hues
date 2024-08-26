import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const FeaturedSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
      {
        id: 1,
        image: "/sofa1.png",
        name: "John Doe",
        description: "Creative Designer",
      },
      {
        id: 2,
        image: "/hero2.jpg",
        name: "Jane Smith",
        description: "Web Developer",
      },
      {
        id: 3,
        image: "/hero3.jpg",
        name: "Alice Johnson",
        description: "Project Manager",
      },
      {
        id: 4,
        image: "/hero4.jpg",
        name: "Alice Johnson",
        description: "Project Manager",
      },
      {
        id: 5,
        image: "/sofa1.png",
        name: "John Doe",
        description: "Creative Designer",
      },
      {
        id: 6,
        image: "/sofa4.jpg",
        name: "Alice Johnson",
        description: "Project Manager",
      },
      {
        id: 7,
        image: "/sofa1.png",
        name: "Alice Johnson",
        description: "Project Manager",
      },
      {
        id: 8,
        image: "/sofa4.jpg",
        name: "Alice Johnson",
        description: "Project Manager",
      },
      {
        id: 9,
        image: "/sofa1.png",
        name: "John Doe",
        description: "Creative Designer",
      },
      {
        id: 10,
        image: "/sofa4.jpg",
        name: "Alice Johnson",
        description: "Project Manager",
      },
    ];
  
    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 0.5));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 0.5));
    };
  return (

    <div>
         <div className=" left-4 bottom-4 flex justify-end mb-4 gap-2 p-2">
        <button onClick={prevSlide} className="w-10 h-10 lg:w-24 lg:h-12  border-2 px-2 py-1 rounded-3xl hover:bg-[#d09423]  transition duration-300 ease-in-out ">
            <FaArrowLeft className="text-lg lg:text-2xl ml-1 lg:ml-6 text-[#d5a13e] hover:text-white " />
        </button>
        <button onClick={nextSlide} className="w-10 h-10 lg:w-24 lg:h-12  border-2 px-2 py-1 rounded-3xl hover:bg-[#d09423] transition duration-300 ease-in-out">
            <FaArrowRight className="text-lg lg:text-2xl ml-1 lg:ml-6 text-[#d5a13e] hover:text-white" />
        </button>
    </div>
<div className="relative h-64 md:h-80 lg:h-[600px] w-full overflow-hidden">
    <div
        className="flex gap-4 md:gap-16 lg:gap-36 w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
        <div className="flex gap-4 md:gap-16 lg:gap-20">
  {data.map((image, index) => (
    <div key={index} className="relative flex flex-col items-center justify-center">
      <div className="bg-[#f5f5f5] w-80 h-80  rounded-full"></div>
      <div className="absolute top-4 flex flex-col items-center">
        <img
          src={image.image}
          alt={`slide ${index}`}
          className="w-72 h-72 rounded-full object-cover"
        />
        <div className="mt-8 w-72 text-center">
          <p className="text-[#565656] text-4xl">{image.name}</p>
          <p className="text-[#9b9b9b] text-2xl">{image.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>

   
</div>
    </div>
    

  )
}

export default FeaturedSlider