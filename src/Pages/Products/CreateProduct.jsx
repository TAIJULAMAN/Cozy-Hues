import ReactQuill from "react-quill"

const CreateProduct = () => {
  return (
    <div className='p-4 max-w-4xl mx-auto min-h-screen'>
  <h1 className='text-center text-3xl my-7 font-semibold'>Create a Product</h1>
  <form className='flex flex-col gap-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <input
        type='text'
        placeholder='Title'
        required
        id='title'
        className='p-2 border border-gray-300 rounded-md w-full'
      />
      <select
        className='p-2 border border-gray-300 rounded-md w-full'
       
      >
        <option value='uncategorized'>Select a category</option>
        <option value='javascript'>JavaScript</option>
        <option value='reactjs'>React.js</option>
        <option value='nextjs'>Next.js</option>
        <option value='islamic'>Islamic</option>
        <option value='poetry'>Poetry</option>
      </select>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <input
        type='number'
        placeholder='Price'
        required
        id='price'
        className='p-2 border border-gray-300 rounded-md w-full'
      />
     
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center border-4 border-teal-500 border-dotted p-3'>
      <input
        type='file'
        accept='image/*'
        className='col-span-2 p-2 border border-gray-300 rounded-md'
      />
      <button
        type='button'
        className='px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md w-full'
      >
        Upload Images
      </button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
      <img
        src='https://via.placeholder.com/400x300'
        alt='upload'
        className='w-full h-72 object-cover rounded-md'
      />
    </div>
    <ReactQuill
      theme='snow'
      placeholder='Write something...'
      className='h-72 mb-12'
    />
    <button
      type='submit'
      className='px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md'
    >
      Publish
    </button>
  </form>
</div>

  )
}

export default CreateProduct