import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
const MaterialFielter = () => {
    const PricesOption = [
        { id: 1, name: "Wood" },
        { id: 2, name: "Cloth" },
        { id: 3, name: "Glass" },
        { id: 4, name: "Rattan" },
        { id: 5, name: "Plastic" },
        { id: 6, name: "Uphotstered" },
      
      ];
    const [isOpen, setIsOpen] = useState(true);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (categoryId) => {
      if (selectedCategories.includes(categoryId)) {
        setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
      } else {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
    };
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className=" md:col-span-1 mt-4">
    
    <div className="mx-4 border-2 p-6 rounded-3xl">
    <div className="flex justify-between items-center cursor-pointer " onClick={toggleAccordion}>
                <h2 className="text-2xl font-semibold">
                    Material
                </h2>
                <button>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
            </div>
      {
        isOpen && (
            <div className=" mt-6">
        {PricesOption.map(category => (
        <label key={category.id} className="flex items-center mb-2 cursor-pointer">
        <input 
          type="checkbox" 
          className="mr-2 w-4 h-4 rounded-full appearance-none bg-gray-200 checked:bg-[#d09423] border border-gray-300 focus:outline-none cursor-pointer" 
          checked={selectedCategories.includes(category.id)}
          onChange={() => handleCategoryChange(category.id)} 
        />
        <span className={`py-1 px-3 border-2 rounded-full ${selectedCategories.includes(category.id) ? 'text-[#d09423] border-[#d09423]' : 'text-black'}`}>
          {category.name}
        </span>
      </label>
        ))}
      </div>
        )
      }
    </div>
  </div>
  )
}

export default MaterialFielter