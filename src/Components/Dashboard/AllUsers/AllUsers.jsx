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
      <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold">All User</p>
       <Link to='/dashboard/createproduct'> <button className="bg-green-700 w-28 h-12 rounded-lg text-white font-bold">
          Add User
        </button></Link>
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
            {users.map((post, index) => (
              <tr
                key={post._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
              >
                <td className="px-6 py-4">{index + 1}</td>
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
                  {post.email}{" "}
                </td>

                <td
                  className={`px-6 py-4 font-medium  dark:text-white ${
                    post.role === "Admin" ? "text-green-500" : "text-red-500"
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
                      <Link to="/dashboard/edituser">
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
  );
}

export default AllUsers;
