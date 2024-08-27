
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <input
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1 p-2 border border-gray-300 rounded-md'
          />
        
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <input
            type='file'
            accept='image/*'
            className='p-2 border border-gray-300 rounded-md'
          />
          <button
            type='button'
            className='px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md'
          >
            Upload Image
          </button>
        </div>
        <img
          src='https://via.placeholder.com/400x300'
          alt='upload'
          className='w-full h-72 object-cover mt-4'
        />
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
  );
};

export default CreatePost;
