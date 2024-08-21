import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import TrendingCard from "./TrendingCard"


function TrendingProduct() {

    const cardDataArray = [
        {
          imageSrc: '/chair.png',
          badgeText: '-20%',
          title: 'Luxe Lounge Sofa',
          price: '40000 BDT',
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-15%',
          title: 'Elegant Dining Table',
          price: '30000 BDT',
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-10%',
          title: 'Modern Floor Lamp',
          price: '15000 BDT',
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-25%',
          title: 'Comfort King Bed',
          price: '50000 BDT',
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-5%',
          title: 'Office Desk',
          price: '20000 BDT',
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-30%',
          title: 'Stylish Armchair',
          price: '22000 BDT',
        },
      ];


  return (
    <div className="bg-white px-4 md:px-8 lg:px-16 mt-8 md:mt-12 mb-24 md:mb-36">
   <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left">
        Trending products <br />for you
    </p>
    <Link href="#">
        <button className="bg-[#d09423] rounded-full px-4 py-2 mt-4 md:mt-0 flex items-center gap-3 md:gap-5 justify-center w-full md:w-auto h-12 lg:h-16 text-lg lg:text-xl hover:bg-[#b0841c] transition duration-300 ease-in-out font-semibold">
            View All Products
            <FaArrowRightLong className="text-lg lg:text-xl" />
        </button>
    </Link>
</div>
    <nav className="mt-8 md:mt-12">
        <ul className="flex flex-wrap gap-4 md:gap-8 text-lg md:text-xl font-semibold justify-center md:justify-start">
            <li className="hover:text-[#3d6063] hover:underline"><Link href="#">Bed Room</Link></li>
            <li className="hover:text-[#3d6063] hover:underline"><Link href="#">Living Room</Link></li>
            <li className="hover:text-[#3d6063] hover:underline"><Link href="#">Dining Room</Link></li>
            <li className="hover:text-[#3d6063] hover:underline"><Link href="#">Outdoor</Link></li>
            <li className="hover:text-[#3d6063] hover:underline"><Link href="#">Indoor</Link></li>
        </ul>
    </nav>

    {/* card */}
    {/* TODO: THIS IS NOT RESPONSIVE YET */}
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {cardDataArray.map((data, index) => (
        <TrendingCard key={index} data={data} />
      ))}
    </div>
</div>
  )
}

export default TrendingProduct