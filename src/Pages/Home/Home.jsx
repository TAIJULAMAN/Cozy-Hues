import Hero from "../../Components/Home/Hero/Hero";
import LowerHero from "../../Components/Home/LowerHero/LowerHero";
import NewCollection from "../../Components/Home/NewCollection/NewCollection";
import FeaturedCategory from "../../Components/Home/FeaturedCategory/FeaturedCategory";
import TrendingProduct from "../../Components/Home/TrendingProduct/TrendingProduct";
import FlashSale from "../../Components/Home/FlashSale/FlashSale";
import Review from "../../Components/Home/Review/Review";
import LatestBlog from "../../Components/Home/LatestBlog/LatestBlog";
import Faq from "../../Components/Home/Faq/Faq";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";

function Home() {
  return (
    <div>
      <Hero />
      <LowerHero />
      <NewCollection />
      <FeaturedCategory />
      <TrendingProduct />
      <FlashSale />
      <Review />
      <div className="px-20">
        <p className="text-3xl md:text-4xl lg:text-5xl text-[#272626] font-semibold text-center md:text-left mb-6">
          Explore Our Latest Blog
        </p>
        <LatestBlog />
      </div>

      <Faq />
      <NewsLetter />
    </div>
  );
}

export default Home;
