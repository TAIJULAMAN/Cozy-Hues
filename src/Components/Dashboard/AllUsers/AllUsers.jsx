import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Pagination from "../../Shared/Pagination";
import { FaEdit } from "react-icons/fa";

function AllUsers() {
    const users = [
        {
          imageSrc: "/pr1.png",
          title: "Luxe Lounge Sofa",
          email: "asfsaf@gmail.com",
  
          role: "User",
        },
        {
          imageSrc: "/chair.png",
         
          title: "Elegant Dining Table",
          email: "asfsaf@gmail.com",
          role: "User",
        },
        {
          imageSrc: "/chair.png",
          email: "asfsaf@gmail.com",
          title: "Modern Floor Lamp",
          
          role: "Admin",
        },
        {
          imageSrc: "/chair.png",
          title: "Comfort King Bed",
          email: "mohinr26@gmail.com",      
          role: "User",
        },
        {
          imageSrc: "/chair.png",
     
          title: "Office Desk",
          email: "asfsaf@gmail.com",
          role: "Admin",
        },
        {
          imageSrc: "/chair.png",
          
          title: "Stylish Armchair",
          email: "asfsaf@gmail.com",
          role: "Admin",
        },
      ];
  return (
    <div>

<div className="container mx-auto p-4">
  <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label htmlFor="name" className="mb-1 text-sm font-medium">Name</label>
      <input type="text" id="name" className="p-2 border rounded-md" placeholder="Enter product name" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
      <input type="email" id="email" className="p-2 border rounded-md" placeholder="Enter email" />
    </div>
    <div className="flex flex-col">
      <label htmlFor="role" className="mb-1 text-sm font-medium">Role</label>
      <select id="role" className="p-2 border rounded-md">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label htmlFor="image" className="mb-1 text-sm font-medium">Product Image</label>
      <input type="file" id="image" className="p-2 border rounded-md" />
    </div>
    <div className="flex col-span-1 md:col-span-2 justify-end">
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Add User</button>
    </div>
  </form>
</div>



    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              SL
            </th>
            <th scope="col" className="px-6 py-3">
              User image
            </th>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
             User Email
            </th>
           
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((post,index) => (
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
                {post.email}    </td>
            
              <td
                className={`px-6 py-4 font-medium  dark:text-white ${
                  post.role === "Admin"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {post.role}
              </td>
          

              <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
              <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
                <div>
                  <MdDelete className="text-3xl hover:text-red-500" />
                </div>
                <div>
                  <Link to={`/dashboard/update-blog/${post._id}`}>
                    <FaEdit className="text-3xl hover:text-teal-500" />
                  </Link>
                </div>
              </td>
                
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
  )
}

export default AllUsers