
import DiscoverSimilarCard from './DiscoverSimilarCard';
const DiscoverSimilar = () => {
    const cardDataArray = [
        {
          imageSrc: '/pr1.png',
          badgeText: '-20%',
          title: 'Luxe Lounge Sofa',
          price: '40000 BDT',
          category: "wood"
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-15%',
          title: 'Elegant Dining Table',
          price: '30000 BDT',
          category: "wood"
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-10%',
          title: 'Modern Floor Lamp',
          price: '15000 BDT',
          category: "glass"
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-25%',
          title: 'Comfort King Bed',
          price: '50000 BDT',
          category: "glass"
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-5%',
          title: 'Office Desk',
          price: '20000 BDT',
          category: "rattan"
        },
        {
          imageSrc: '/chair.png',
          badgeText: '-30%',
          title: 'Stylish Armchair',
          price: '22000 BDT',
          category: "plastic"
        },
      ];
  return (
    <div className='mt-20'>
        <p className='text-4xl my-12 font-semibold'>Discover Similar Items</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
            cardDataArray.map((data,index)=><DiscoverSimilarCard key={index} data={data}/>)
        }
    
        </div>
    </div>
  )
}

export default DiscoverSimilar