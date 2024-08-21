/* eslint-disable react/prop-types */

const LatestBlogCard = ({blog}) => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
    <div className="h-64 md:h-72 lg:h-80">
      <img
        className="object-cover w-full h-full rounded-3xl"
        src={blog.image}
        alt=""
      />
    </div>
    <div className="p-4">
      <p className="text-[#727170] text-lg md:text-xl lg:text-2xl font-semibold">
        {blog.blogTitle}
      </p>
      <p className="text-sm md:text-base font-semibold">
        by <span className="text-[#727170]">{blog.blogOwner}</span> on{" "}
        <span className="text-[#ddb465]">{blog.date}</span>
      </p>
    </div>
  </div>
  )
}

export default LatestBlogCard