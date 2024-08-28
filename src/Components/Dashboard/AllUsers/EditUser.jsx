
const EditUser = () => {
  return (
    <div className="container mx-auto p-4">
    <h2 className="text-4xl font-semibold mb-4">Edit Product</h2>
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl">
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
      <button className="bg-green-700 w-28 h-12 rounded-lg text-white font-bold">
          Add User
        </button>
      </div>
    </form>
  </div>
  )
}

export default EditUser