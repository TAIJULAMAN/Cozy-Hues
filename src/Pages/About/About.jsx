import AboutCard from "./AboutCard";

const About = () => {
   
   
    
  return (
    <div>
      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">About</p>
      </div>

      {/* header part */}
   
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold my-8 text-center mt-16">
       Discover FurniFlex - <br /> Wher Innovation Meets Design
      </h1>
    
  
    {/* image */}

      <div className="bg-white rounded-lg overflow-hidden w-full ">
        <img 
          src="/sofa1.png" 
          alt="Blog Post" 
          className="container mx-auto object-cover h-64 md:h-[450px] lg:h-[750px] rounded-3xl bg-gray-100"
        />
       
      </div>

      <div className="my-12 text-center">
         <p className="text-[#abacab] font-semibold text-base">FurniFlex Challenging</p>

         <h1 className="text-4xl font-semibold my-6 text-[#656464]">The FurniFlex Journey Story</h1>
         <p className="my-4 text-[#6e7373] font-medium">The FurniFlex Journey Transforming spaces with innovation design. Explore our story of craftsmanship <br /> and style, creating furniture that inspires and enhances modern living.</p>
      </div>


      {/* about card */}
     <AboutCard/>
 
    </div>
  );
};

export default About;
