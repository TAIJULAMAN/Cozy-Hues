import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LatestBlogCard from './../../Components/Home/LatestBlog/LatestBlogCard';


const SingleBlogSlider = () => {

    const blogs =  [
        {
          "image": "/chair.png",
          "blogTitle": "Exploring the Beauty of Nature",
          "blogOwner": "John Doe",
          "date": "2024-08-20"
        },
        {
          "image": "/sofa1.png",
          "blogTitle": "The Future of Technology",
          "blogOwner": "Jane Smith",
          "date": "2024-08-18"
        },
        {
          "image": "/sofa2.png",
          "blogTitle": "Healthy Eating Habits",
          "blogOwner": "Emily Johnson",
          "date": "2024-08-15"
        },
        {
          "image": "/sofa1.png",
          "blogTitle": "Traveling on a Budget",
          "blogOwner": "Michael Brown",
          "date": "2024-08-10"
        },
        {
          "image": "/sofa4.jpg",
          "blogTitle": "The Art of Minimalism",
          "blogOwner": "Sophia Davis",
          "date": "2024-08-05"
        },
        {
          "image": "/chair.png",
          "blogTitle": "Understanding Cryptocurrency",
          "blogOwner": "James Wilson",
          "date": "2024-08-01"
        }
      ]
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 0.5));
      };
  
      const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 0.5));
      };
      

  return (
    <div className="mx-16 ">
        <div className="relative h-64 md:h-80 lg:h-[600px] w-full overflow-hidden">
            <p className="md:text-6xl font-semibold text-[#100f0d]">Latest Blogs</p>

                
            <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
               {blogs.map((blog, index) => (
        <LatestBlogCard key={index} blog={blog} />
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
    </div>
  )
}

export default SingleBlogSlider