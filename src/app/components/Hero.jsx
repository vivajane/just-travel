import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/12567920/pexels-photo-12567920.jpeg')] md:h-screen w-full h-[400px] bg-cover bg-no-repeat  bg-opacity-50 bg-blend-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-700 via-purple-500 to-indigo-500 opacity-60 mix-blend-multiply" />
      <div className=" relative z-10 flex items-center justify-center h-full text-center px-4">
        <div data-aos="fade-down" className="md:mt-0 mt-20">
          <h1 className="md:text-5xl text-xl font-bold text-white mb-4">
            Unleash the Fun at FunVerge
          </h1>
          <p className="md:text-[20px] text-white">
            Dive into exciting adventures and memories that last a lifetime.
          </p>
          <ul className="flex gap-3 py-4 text-white text-sm md:px-24 ">
            <li className="border-r-3 pr-3 border-r-white">Outdoor Fun</li>
            <li className="border-r-3 pr-3 border-r-white">Family Hangout</li>
            <li className="border-r-3 pr-3 border-r-white">Group Fun</li>
            <li >Indoor Fun</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
