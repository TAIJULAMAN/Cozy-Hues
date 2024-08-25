import LatestBlog from "../../Components/Home/LatestBlog/LatestBlog";
import Pagination from "../../Components/Shared/Pagination";
import BlogCommunity from "./BlogCommunity";

function Blogs() {
  return (
    <div>

      <div className="py-12 md:py-20 bg-[#2d5356] px-4 md:px-16 text-white text-center">
        <p className="text-3xl md:text-5xl font-semibold">Our Blogs</p>
      </div>
      {/* main content */}
      <div className="px-20 mt-16">
        <p className="text-5xl font-semibold text-[#181715]">About Our Blog</p>
        <p className="text-xl text-[#7f7f7f] mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem debitis voluptates ratione error neque mollitia a, odio
          eveniet inventore delectus tempora enim veritatis reprehenderit autem
          soluta maiores tempore id. Placeat velit odio natus, earum impedit
          quidem in fugit, explicabo doloremque quia reprehenderit, vel
          adipisci. Sed earum dolorem iure aut nisi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Non numquam distinctio, deserunt eveniet
          rerum vitae praesentium nemo excepturi quos ullam. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident voluptatum veritatis
          cupiditate atque similique impedit! Earum labore non provident magni.{" "}
        </p>
      </div>
      <div className="px-4 mt-8">
        <LatestBlog />
      </div>
           <div className="mr-24 mt-12 flex justify-end">
              <Pagination/>
           </div>

           <div className="mt-28">
              <BlogCommunity/>
           </div>
    </div>
  );
}

export default Blogs;
