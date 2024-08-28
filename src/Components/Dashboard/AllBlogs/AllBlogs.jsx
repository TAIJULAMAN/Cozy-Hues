import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom"
import Pagination from "../../Shared/Pagination"

function AllBlogs() {
    const blogs =  [
        {
          "image": "/chair.png",
          "blogTitle": "Exploring the Beauty of Nature",
          "blogOwner": "John Doe",
          "date": "2024-08-20"
        },
        {
          "image": "/sofa1.png",
          "blogTitle": "The Future of Technology",
          "blogOwner": "Jane Smith",
          "date": "2024-08-18"
        },
        {
          "image": "/sofa2.png",
          "blogTitle": "Healthy Eating Habits",
          "blogOwner": "Emily Johnson",
          "date": "2024-08-15"
        },
        {
          "image": "/sofa1.png",
          "blogTitle": "Traveling on a Budget",
          "blogOwner": "Michael Brown",
          "date": "2024-08-10"
        },
        {
          "image": "/sofa4.jpg",
          "blogTitle": "The Art of Minimalism",
          "blogOwner": "Sophia Davis",
          "date": "2024-08-05"
        },
        {
          "image": "/chair.png",
          "blogTitle": "Understanding Cryptocurrency",
          "blogOwner": "James Wilson",
          "date": "2024-08-01"
        }
      ]
  return (
    <div>
        <div className="flex justify-between py-6">
        <p className="text-3xl font-semibold">All Blogs</p>
       <Link to='/dashboard/createblog'> <button className="bg-green-700 w-28 h-12 rounded-lg text-white font-bold">
          Create Blogs
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
              Blog image
            </th>
            <th scope="col" className="px-6 py-3">
              Blog title
            </th>
           
            <th scope="col" className="px-6 py-3">
              Author
            </th>
           
        
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog,index) => (
            <tr
              key={blog._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-xl font-medium"
            >
              <td className="px-6 py-4">
                {index+1}
              </td>
              <td className="px-6 py-4">
                <Link to={`/blog/${blog.slug}`}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="md:w-20 md:h-20 rounded-full object-cover bg-gray-500"
                  />
                </Link>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                <Link to={`/blog/${blog.slug}`}>{blog.blogTitle}</Link>
              </td>
             
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {blog.blogOwner} 
              </td>
            
         

              <td className="px-6 py-4  flex gap-3 hover:underline hover:cursor-pointer">
                <div>
                  <MdDelete className="text-3xl hover:text-red-500" />
                </div>
                <div>
                  <Link to={`/dashboard/updateblog/${blog._id}`}>
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
  )
}

export default AllBlogs