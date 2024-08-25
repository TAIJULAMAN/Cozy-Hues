import LatestBlogCard from "./LatestBlogCard"

function LatestBlog() {
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
    <div className="mx-4 md:mx-8 lg:mx-12 mb-8 md:mb-12">
   

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <LatestBlogCard key={index} blog={blog} />
      ))}
    </div>
  </div>
  )
}

export default LatestBlog