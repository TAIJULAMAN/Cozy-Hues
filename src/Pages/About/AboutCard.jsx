/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import LowerHero from './../../Components/Home/LowerHero/LowerHero';
import Review from "../../Components/Home/Review/Review";
import AboutTeamCart from "./AboutTeamCart";

const AboutCard = () => {
    const teamMembers=[
        {
            image: "/sofa1.png",
            name: "Aman",
            role: "Leader"
        },
        {
            image: "/sofa2.png",
            name: "Tohir",
            role: "CEO & Owner"
        },
        {
            image: "/chair.png",
            name: "Mohin",
            role: "Leader"
        },
    ]
  return (
    <div className="p-6">
      {/* Journey Story Section */}
      <div className="bg-white p-8 rounded-lg mb-12">
        <div className="rounded-t-3xl overflow-hidden border border-gray-300 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-[#f2f2f1] flex-1 rounded-xl">
              <img
                src="chair.png"
                alt="Journey Story"
                className="w-full md:w-3/4 md:h-96 object-cover"
              />
            </div>
            <div className="md:ml-8 flex-1">
              <h3 className="text-3xl font-semibold mb-4">The FurniFlex Journey Story</h3>
              <p className="text-gray-700">
                The FurniFlex Journey Transforming spaces with innovative design, exploring the artistry of craftsmanship
                and style, crafting furniture that blends timeless and modern aesthetics. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Laborum eveniet a ullam in omnis amet officia facilis dolor nisi veniam
                dolorem doloribus asperiores sed totam, ab sapiente dolore odio! Consequatur, aliquid autem repudiandae
                nobis earum nulla repellendus, tempore libero culpa quos blanditiis ipsa deserunt ex, harum dolorem
                error? Aspernatur, aut.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="rounded-3xl overflow-hidden border border-gray-300 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8 flex-1">
              <h3 className="text-2xl font-semibold mb-4">Milestones and Achievements</h3>
              <p className="text-gray-700">
                Over the years, we've reached several significant milestones. In 2012, we launched our first collection,
                making our products accessible to a wider audience. By 2015, we had expanded our product line to include
                not only classic furniture pieces but also contemporary designs. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dicta, dolore dolorem repellendus corrupti voluptas quis nulla sit, tempora, nobis porro
                rerum quidem aspernatur consectetur eos. Itaque, est! Ex cumque esse ea non, explicabo tenetur facilis
                eligendi incidunt, sunt laborum aliquid?
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-[#f2f2f1] flex-1 rounded-xl">
              <img
                src="sofa1.png"
                alt="Milestones"
                className="w-full md:w-3/4 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Innovation Section */}
        <div className="rounded-3xl overflow-hidden border border-gray-300 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-[#f2f2f1] flex-1 rounded-xl">
              <img
                src="/sofa2.png"
                alt="Innovation"
                className="w-full md:w-3/4 md:h-96 object-cover"
              />
            </div>
            <div className="md:ml-8 flex-1">
              <h3 className="text-2xl font-semibold mb-4">Innovation and Growth</h3>
              <p className="text-gray-700">
                Innovation has always been at the heart of what we do. In 2018, we introduced our first line of
                eco-friendly furniture, crafted from sustainable materials. This commitment to the environment has not
                only won us accolades but also the trust and loyalty of our customers.
              </p>
            </div>
          </div>
        </div>

        {/* Global Reach Section */}
        <div className="rounded-b-3xl overflow-hidden border border-gray-300 p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:mr-8 flex-1">
              <h3 className="text-2xl font-semibold mb-4">Our Global Reach</h3>
              <p className="text-gray-700">
                Today, FurniFlex serves customers around the world. With distribution centers in key locations, we ensure
                that our high-quality furniture reaches your home efficiently and safely. Our global presence is a
                testament to the love and support of our customers, who inspire us to continue our journey.
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 flex-1 bg-[#f2f2f1] rounded-xl">
              <img
                src="/sofa1.png"
                alt="Global Reach"
                className="w-full md:w-3/4 md:h-96 object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      {/* team member */}
      <p className="text-center mt-20 mb-16 md:text-5xl font-semibold">Our Awesome Team</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-20">
           {
            teamMembers.map((data,idx)=><AboutTeamCart key={idx} data={data}/>)
           }
      </div>

      {/* Testimonial Section */}
      <Review />

      {/* Lower hero Section */}
      <LowerHero />
    </div>
  );
};

export default AboutCard;
