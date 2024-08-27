import { Link } from "react-router-dom";
import Pagination from "../../Shared/Pagination";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function AllProducts() {
  const cardDataArray = [
    {
      imageSrc: "/pr1.png",
      badgeText: "-20%",
      title: "Luxe Lounge Sofa",
      price: "40000 BDT",
      category: "wood",
      sold: "10",
      stock: "Out-of-stock",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-15%",
      title: "Elegant Dining Table",
      price: "30000 BDT",
      category: "wood",
      sold: "12",
      stock: "Out-of-stock",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-10%",
      title: "Modern Floor Lamp",
      price: "15000 BDT",
      category: "glass",
      sold: "12",
      stock: "In-stock",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-25%",
      title: "Comfort King Bed",
      price: "50000 BDT",
      category: "glass",
      sold: "121",
      stock: "Out-of-stock",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-5%",
      title: "Office Desk",
      price: "20000 BDT",
      category: "rattan",
      sold: "10",
      stock: "In-stock",
    },
    {
      imageSrc: "/chair.png",
      badgeText: "-30%",
      title: "Stylish Armchair",
      price: "22000 BDT",
      category: "plastic",
      sold: "10",
      stock: "In-stock",
    },
  ];
  return (
    <div>
        {/* add user part */}
        

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                Product image
              </th>
              <th scope="col" className="px-6 py-3">
                Product title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
             
              <th scope="col" className="px-6 py-3">
                Stock
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cardDataArray.map((post,index) => (
              <tr
                key={post._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
              >
                <td className="px-6 py-4">
                  {index+1}
                </td>
                <td className="px-6 py-4">
                  <Link to={`/post/${post.slug}`}>
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      className="md:w-20 md:h-20 rounded-full object-cover bg-gray-500"
                    />
                  </Link>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <Link to={`/post/${post.slug}`}>{post.title}</Link>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  {post.price}
                </td>
               
                <td
                  className={`px-6 py-4 font-medium  dark:text-white ${
                    post.stock === "In-stock"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {post.stock}
                </td>
                <td className="px-6 py-4">{post.category}</td>

                <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
                  <div>
                    <MdDelete className="text-3xl hover:text-red-500" />
                  </div>
                  <div>
                    <Link to={`/dashboard/updateproduct/${post._id}`}>
                      <FaEdit className="text-3xl hover:text-teal-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-end p-4">
        <Pagination />
      </div>
    </div>
  );
}

export default AllProducts;
