import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ImageSlider = () => {
    const images = [
        "/sofa1.jpg",
        "/sofa2.jpg",
        "/sofa3.jpg",
        "/sofa4.jpg",
        "/3.png",
        "/3.png",
        "/3.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 0.5));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 0.5));
    };

    return (
        <div className="relative h-64 md:h-80 lg:h-[600px] w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`slide ${index}`} className="h-48 md:h-64 lg:h-[500px] w-64 md:w-80 lg:w-96 object-cover rounded-3xl" />
                ))}
            </div>

            <div className="absolute left-4 bottom-4 flex gap-2 p-2">
                <button onClick={prevSlide} className="w-10 h-10 lg:w-24 lg:h-12 bg-[#426467] text-white px-2 py-1 rounded-3xl hover:bg-[#d09423] transition duration-300 ease-in-out">
                    <FaArrowLeft className="text-lg lg:text-2xl ml-1 lg:ml-6" /> 
                </button>
                <button onClick={nextSlide} className="w-10 h-10 lg:w-24 lg:h-12 bg-[#426467] text-white px-2 py-1 rounded-3xl hover:bg-[#d09423] transition duration-300 ease-in-out">
                    <FaArrowRight className="text-lg lg:text-2xl ml-1 lg:ml-6" />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
