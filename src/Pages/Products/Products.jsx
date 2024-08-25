import LowerHero from "../../Components/Home/LowerHero/LowerHero";
import TrendingCard from "../../Components/Home/TrendingProduct/TrendingCard";
import Pagination from "../../Components/Shared/Pagination";
import AvailabilityFilter from "./AvailabilityFilter";
import CategoriesFilter from "./CategoriesFilter";
import MaterialFielter from "./MaterialFielter";
import PriceFielter from "./PriceFielter";

function Products() {
  const cardDataArray = [
    {
      imageSrc: "/chair.png",
      badgeText: "-20%",
      title: "Luxe Lounge Sofa",
      price: "40000 BDT",
    },
    {
      imageSrc: "/sofa1.png",
      badgeText: "-15%",
      title: "Elegant Dining Table",
      price: "30000 BDT",
    },
    {
      imageSrc: "/sofa2.png",
      badgeText: "-10%",
      title: "Modern Floor Lamp",
      price: "15000 BDT",
    },
    {
      imageSrc: "/sofa1.png",
      badgeText: "-25%",
      title: "Comfort King Bed",
      price: "50000 BDT",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-5%",
      title: "Office Desk",
      price: "20000 BDT",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-30%",
      title: "Stylish Armchair",
      price: "22000 BDT",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-20%",
      title: "Luxe Lounge Sofa",
      price: "40000 BDT",
    },
    {
      imageSrc: "/sofa1.png",
      badgeText: "-15%",
      title: "Elegant Dining Table",
      price: "30000 BDT",
    },
    {
      imageSrc: "/sofa2.png",
      badgeText: "-10%",
      title: "Modern Floor Lamp",
      price: "15000 BDT",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="py-16 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Products</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mx-4 md:mx-12 mt-10">
        {/* Left Sidebar */}
        <div className="space-y-8 md:col-span-1">
          <CategoriesFilter />
           <PriceFielter />
           <MaterialFielter />
          <AvailabilityFilter />
        </div>

        {/* Product Cards */}
        <div className="md:col-span-4">
          <p className="text-[#605f60] text-2xl md:text-4xl font-semibold mb-6">
            Showing 1-15 of 300 results
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardDataArray.map((data, index) => (
              <TrendingCard key={index} data={data} />
            ))}
          </div>

          {/* pagination section */}
          <div className="mt-20 flex justify-end ">
        <div >
        <Pagination/>
        </div>
          </div>
        </div>
      </div>
      {/* lower hero */}
      <div className="py-20">
      <LowerHero />
      </div>
      
    </div>
  );
}

export default Products;
