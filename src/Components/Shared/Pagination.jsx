
const Pagination = () => {
  return (
    <ul className="flex space-x-4 justify-center">
    <li className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-[#d09423] w-10 h-10 rounded-lg">
      Prev
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
      1
    </li>
    <li className="flex items-center justify-center shrink-0 bg-[#d09423]  border-2 border-[#d09423] cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg">
      2
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
      3
    </li>
    <li className="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-lg">
      4
    </li>
    <li className="flex items-center justify-center shrink-0 cursor-pointer text-base font-bold text-[#d09423] w-10 h-10 rounded-lg">
      Next
    </li>
  </ul>
  )
}

export default Pagination