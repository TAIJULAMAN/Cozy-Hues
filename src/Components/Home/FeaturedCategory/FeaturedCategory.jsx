
import FeaturedSlider from "./FeaturedSlider";


function FeaturedCategory() {
  return (
    <div className="bg-white px-16 mt-36">
      <h1 className="text-6xl font-semibold text-left text-[#2d5356]"> Featured Category</h1>
     
      <div>
        <FeaturedSlider/>
      </div>
    </div>
  );
}

export default FeaturedCategory;
