import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import LowerHero from "../../Components/Home/LowerHero/LowerHero";

const BlogCommunity = () => {
  return (
    <div>
      <div className="px-4 md:px-20 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Join Our Community Card */}
          <div className="bg-teal-900 text-white p-8 md:p-16 rounded-lg shadow-md flex flex-col justify-between h-auto md:h-[500px]">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                Join Our Community
              </h2>
              <p className="text-lg md:text-xl mb-6">
                We invite you to join our growing community of design
                enthusiasts, DIY lovers, and home improvement aficionados.
                Subscribe to our newsletter to get the latest blog posts
                delivered straight to your inbox, and follow us on social media
                for daily inspiration and updates.
              </p>
            </div>
            <div className="flex space-x-4 text-2xl md:text-3xl">
              <Link to="#" className="text-white">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-white">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-white">
                <FaFacebook />
              </Link>
              <Link to="#" className="text-white">
                <FaPinterest />
              </Link>
            </div>
          </div>

          {/* Share Your Story Card */}
          <div className="bg-gray-100 text-gray-800 p-8 md:p-16 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Share Your Story
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Have a furniture transformation or a home decor success story to
              share? We’d love to feature you on our blog! Submit your story and
              photos to
            </p>
            <p className="text-lg md:text-xl mb-6 text-yellow-600">
              Email: mdamdamnur.oc@gmail.com
            </p>
            <p className="text-lg md:text-xl">
              Thank you for visiting the Furniture Emporium Blog. We’re excited
              to be part of your journey in creating a beautiful, comfortable,
              and stylish home.
            </p>
          </div>
        </div>
      </div>

      <LowerHero />
    </div>
  );
};

export default BlogCommunity;
