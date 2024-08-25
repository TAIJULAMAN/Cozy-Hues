/* eslint-disable react/no-unescaped-entities */

const SingleBlogHeader = () => {
  return (
    <div className="px-4 md:px-16 py-8 md:py-16">
    <div className="bg-white flex flex-col justify-start  md:text-left">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4">
        Welcome to Our Blog!
      </h1>
      <p className="text-sm md:text-lg lg:text-xl text-gray-600 ">
        At Furniture FurniFlex, we're committed to helping you create a home that not only looks beautiful but also feels comfortable and inviting. 
        Our blog is your ultimate resource for design inspiration, practical tips, and the latest trends in home furnishings. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos est aut commodi quisquam quo obcaecati voluptatum, distinctio dolore dignissimos at quas totam dicta aspernatur, odit, cum nostrum repellendus officia pariatur vitae dolorum ipsa! Culpa nobis, quidem suscipit recusandae, pariatur, quisquam fuga dicta dolore quod earum sunt vel assumenda qui.
      </p>
    </div>
    
    {/* Image */}
    <div className="mt-8 md:mt-12 flex justify-center">
      <div className="bg-white rounded-lg overflow-hidden w-full ">
        <img 
          src="/chair.png" 
          alt="Blog Post" 
          className="container mx-auto object-cover h-64 md:h-[450px] lg:h-[750px] rounded-3xl bg-gray-100"
        />
        <div className="p-6 flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
              How To Keep Your Furniture Clean
            </h2>
            <p className="text-gray-500 mt-2">
              by Robert Fox on <span className="text-[#deb876]"> Apr 20, 24</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <img 
              src="/sofa1.png" 
              alt="Author" 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <p className="ml-4 text-gray-700 text-center md:text-left">
              Written by <br /> <span className="font-semibold">Ariel Van Houten</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleBlogHeader