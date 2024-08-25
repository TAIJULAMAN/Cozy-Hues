import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import SingleBlogContent from "./SingleBlogContent";
import SingleBlogHeader from "./SingleBlogHeader";
import SingleBlogSlider from "./SingleBlogSlider";
import LowerHero from './../../Components/Home/LowerHero/LowerHero';

const BlogSingle = () => {
  return (
    <div>
      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Blog Name</p>
      </div>

      {/* blog header */}
      <div>
        <SingleBlogHeader />
          <SingleBlogContent />
        <SingleBlogSlider />
        <div className="mt-16">
        <NewsLetter/>
        </div>
        <LowerHero/>
      </div>
    </div>
  );
};

export default BlogSingle;
