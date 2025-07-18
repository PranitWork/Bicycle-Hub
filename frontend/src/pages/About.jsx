import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans  w-full">
      {/* Top Section - About Event */}
      <div className="bg-[#1a1a1a] text-white px-6 md:px-20 py-30 relative overflow-hidden">
        <div className="absolute top-0  left-0 w-[300px] h-[300px] bg-[url('/Images/About-Page/bg1.jpg')] bg-no-repeat bg-cover blur-md opacity-30 rotate-12 -z-10" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side collage */}
          <div className="space-y-4">
            <img
              src="/Images/About-Page/bg2.jpg"
              alt="Speaker"
              className="rounded-md w-full"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/Images/About-Page/bg4.jpg"
                alt="Speaker 2"
                className="rounded-md"
              />
              <img
                src="/Images/About-Page/bg5.jpg"
                alt="Audience"
                className="rounded-md"
              />
            </div>
          </div>

          {/* Right text content */}
          <div>
            <h2 className="text-white text-4xl font-bold mb-6">
              About Bicycle Hub
            </h2>
            <p className="text-gray-300 mb-6 text-[16px] leading-[1.8]">
              Bicycle Hub, your ultimate destination for everything cycling.
              Whether you’re a seasoned rider, a daily commuter, or just
              beginning your biking journey, we’re here to support and empower
              your ride. At Bicycle Hub, we believe that cycling is more than
              just transportation — it’s a lifestyle. We bring together a
              passionate community of riders, top-tier brands, expert advice,
              and innovative gear to help you explore the world on two wheels.
              From curated events and educational workshops to product showcases
              and riding groups, we offer an inclusive space for connection,
              growth, and adventure.
              <h1 className="text-white text-3xl font-bold mt-6">
                Why Bicycle Hub?
              </h1>
            </p>

              <ul className="flex flex-col gap-2">
                <li>🛠️ Expert tips,</li>
                <li>🚴 Trusted by thousands of cyclists nationwide </li>
                <li>gear guides, and maintenance support</li>
                <li>🌍 Community-driven events and rides</li>
                <li>🔧 Personalized recommendations based on your riding</li>
              </ul>
              
           
            <div className="flex mt-20 gap-4">
              <div className="bg-white text-black px-5 py-3 rounded-[10px] text-sm font-semibold">
                <Link to="/products">
                View Products
                </Link>
              </div>
              <div className="bg-white text-black px-5 py-3 rounded-[10px] text-sm font-semibold">
                <Link to="/products">
                Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Successful past events */}
      <div className="bg-[#f6f6f6] px-6 md:px-20 py-20">
        <h2 className="text-black text-4xl font-bold mb-12">
          Images That Captured
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 relative">
          <div className="col-span-1">
            <img
              src="/Images/About-Page/bg1.jpg"
              className="rounded-md "
              alt="past"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/Images/About-Page/bg2.jpg"
              className="rounded-md"
              alt="past"
            />
          </div>

          <div className="col-span-1 row-span-2">
            <img
              src="/Images/About-Page/bg9.jpg"
              className="rounded-md h-full h-[200px] object-cover"
              alt="past"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/Images/About-Page/bg4.jpg"
              className="rounded-md"
              alt="past"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/Images/About-Page/bg5.jpg"
              className="rounded-md"
              alt="past"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/Images/About-Page/bg6.jpg"
              className="rounded-md"
              alt="past"
            />
          </div>
        </div>
      </div>

      {/* Footer/Closing note */}
      <div className="px-6 md:px-20 py-16 bg-white">
        <p className="text-black text-[18px] md:text-lg max-w-3xl leading-relaxed">
          style Join us as we build a better, healthier, and more connected
              cycling community — one ride at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
