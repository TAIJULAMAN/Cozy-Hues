/* eslint-disable react/no-unescaped-entities */

const SingleBlogContent = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-16 py-8 md:py-16">
    {/* Main Content */}
    <div className="w-full md:w-3/4 lg:w-3/5 mb-8 md:mb-0">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Transform Your Living Room with These <br /> Top 5 Design Tips
      </h2>
      <p className="text-[#434141] text-base md:text-lg leading-relaxed mb-6">
        Your living room is the heart of your home, a place where you relax, entertain guests, and spend quality time with family. Transforming it into a stylish, functional space can enhance your overall living experience. Here are our top 5 design tips to help you create a living room that you'll love.
      </p>
      <ol className="list-decimal list-inside text-gray-800 text-base md:text-lg leading-relaxed space-y-4">
        <li className="text-[#434141]"><strong className="text-2xl text-[#646463]">Choose a Cohesive Color Scheme</strong> <br /> Selecting a color palette that complements your personal style and the overall theme of your home is crucial. Opt for three main colors: a dominant color for the walls, a secondary color for large furniture pieces, and an accent color for accessories and decor items.</li>
        <li className="text-[#434141]"><strong className="text-2xl text-[#646463]">Invest in Quality Seating</strong> <br /> Comfortable and stylish seating is essential. Consider a mix of a plush sofa, cozy armchairs, and stylish ottomans. Ensure the fabrics are durable and easy to clean, especially if you have kids or pets.</li>
        <li className="text-[#434141]"><strong className="text-2xl text-[#646463]">Create a Focal Point</strong> <br /> A focal point anchors the room and draws the eye. This could be a statement piece of art, a bold piece of furniture, or a beautiful fireplace. Arrange your seating around this focal point to create a balanced and inviting layout.</li>
        <li className="text-[#434141]"><strong className="text-2xl text-[#646463]">Incorporate Various Textures</strong> <br /> Adding different textures can make your living room feel more dynamic and inviting. Mix materials like wood, metal, glass, and textiles. Think soft throw blankets, patterned rugs, and sleek metal accents.</li>
        <li className="text-[#434141]"><strong className="text-2xl text-[#646463]">Optimize Lighting</strong> <br /> Layered lighting enhances the functionality and ambiance of your living room. Combine overhead lighting with task lighting (like floor lamps) and accent lighting (such as wall sconces). Use dimmers to adjust the mood.</li>
      </ol>
    </div>

    {/* Sidebar */}
    <div className="w-full md:w-1/4 lg:w-1/5 md:ml-8">

      <div className="mt-8">
        <h4 className="text-lg md:text-xl font-semibold mb-4">Categories Link</h4>
        <ul className=" text-base md:text-lg space-y-2 text-[#bf861c]">
          <li><a href="#" className="hover:text-gray-800">Design Inspiration</a></li>
          <li><a href="#" className="hover:text-gray-800">Furniture Care</a></li>
          <li><a href="#" className="hover:text-gray-800">Sofa</a></li>
          <li><a href="#" className="hover:text-gray-800">Product Spotlights</a></li>
          <li><a href="#" className="hover:text-gray-800">Home Organization</a></li>
          <li><a href="#" className="hover:text-gray-800">Living Room</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default SingleBlogContent