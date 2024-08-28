import { HiOutlineUserGroup, HiAnnotation, HiDocumentText, HiArrowNarrowUp } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function AdminHome() {
    const fakeData = {
        totalUsers: 1200,
        lastMonthUsers: 300,
        totalSelles: 1500,
        lastMonthsells: 400,
        totalblogs: 850,
        lastMonthblogs: 200,
        users: [
          { _id: 1, profilePicture: '/customer3.jpg', username: 'user1' },
          { _id: 2, profilePicture: '/customer2.jpg', username: 'user2' },
        ],
        sells: [
          { _id: 1, name_of_product: 'Chair', total_sell: 15, image: '/chair.png' },
          { _id: 2, name_of_product: 'Table.', total_sell: 30, image: '/hero3.jpg', },
        ],
        blogs: [
          { _id: 1, image: '/hero2.jpg', title: 'blog 1' },
          { _id: 2, image: '/hero5.jpg', title: 'blog 2' },
        ],
      };
    
      const { totalUsers, lastMonthUsers, totalSelles, lastMonthsells, totalblogs, lastMonthblogs, users, sells, blogs } = fakeData;
      console.log(sells[0].image);
    
  return (
    <div className='p-3 md:mx-auto'>
      <div className='flex-wrap flex gap-4 justify-center'>
        {/* Card Component */}
        <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md mb-12'>
          <div className='flex justify-between text-xl font-semibold'>
            <div>
              <h3 className='text-gray-500 text-md uppercase'>Total Users</h3>
              <p className='text-2xl'>{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className='bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex gap-2 text-sm'>
            <span className='text-green-500 flex items-center text-xl font-semibold'>
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className='text-gray-500 text-xl font-semibold'>Last month</div>
          </div>
        </div>
        {/* Repeat for Sells and blogs */}
        <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md text-xl font-semibold'>
          <div className='flex justify-between'>
            <div>
              <h3 className='text-gray-500 text-md uppercase'>Total Sells</h3>
              <p className='text-2xl'>{totalSelles}</p>
            </div>
            <HiAnnotation className='bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex gap-2  text-xl font-semibold'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastMonthsells}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
        <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
          <div className='flex justify-between text-xl font-semibold'>
            <div>
              <h3 className='text-gray-500 text-md uppercase'>Total Blogs</h3>
              <p className='text-2xl'>{totalblogs}</p>
            </div>
            <HiDocumentText className='bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
          <div className='flex gap-2  text-xl font-semibold'>
            <span className='text-green-500 flex items-center'>
              <HiArrowNarrowUp />
              {lastMonthblogs}
            </span>
            <div className='text-gray-500'>Last month</div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 py-3 mx-auto justify-center'>
        {/* Recent Users */}
        <div className='flex flex-col w-full md:w-96 shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent users</h1>
           <Link to='/dashboard/allusers'>
           <button className='px-4 py-1 font-semibold border border-green-500 text-black rounded-md hover:bg-green-500 hover:text-white'>
              See all
            </button>
           </Link>
          </div>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-left'>
                <th className='p-2'>User image</th>
                <th className='p-2'>Username</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className='bg-white dark:bg-gray-800'>
                  <td className='p-2'>
                    <img
                      src={user.profilePicture}
                      alt='user'
                      className='w-10 h-10 object-cover rounded-full bg-gray-500'
                    />
                  </td>
                  <td className='p-2'>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Recent sells */}
        <div className='flex flex-col w-full md:w-96 shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent sells</h1>
            <Link to='/dashboard/allproduct'>
           <button className='px-4 py-1 font-semibold border border-green-500 text-black rounded-md hover:bg-green-500 hover:text-white'>
              See all
            </button>
           </Link>
          </div>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-left'>
                <th className='p-2'>Product Name</th>
                <th className='p-2'>Product Image</th>
                <th className='p-2'>Number of Sell</th>
              </tr>
            </thead>
            <tbody>
              {sells.map((product) => (
                <tr key={product._id} className='bg-white dark:bg-gray-800'>
                  <td className='p-2 w-96'>
                    <p className='line-clamp-2'>{product.name_of_product}</p>
                  </td>
                  <td className='p-2 w-96'>
                    <img src={product.image} className='w-12 h-12 rounded-full object-cover'/>
                  </td>
                  <td className='p-2'>{product.total_sell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Recent blogs */}
        <div className='flex flex-col w-full md:w-[450px]  shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent Blogs</h1>
           <Link to='/dashboard/allblogs'>
           <button className='px-4 py-1 font-semibold border border-green-500 text-black rounded-md hover:bg-green-500 hover:text-white'>
              See all
            </button>
           </Link>
          </div>
          <table className='table-auto w-full'>
            <thead>
              <tr className='text-left'>
                <th className='p-2'>Blog image</th>
                <th className='p-2'>Blogname</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} className='bg-white dark:bg-gray-800'>
                  <td className='p-2'>
                    <img
                      src={blog.image}
                      alt='blog'
                      className='w-10 h-10 object-cover rounded-full bg-gray-500'
                    />
                  </td>
                  <td className='p-2'>{blog.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHome