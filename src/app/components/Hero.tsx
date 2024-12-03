import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div>
      <div className="relative bg-grey-800">
        {/* Background Image */}
        <img
          src="/Images/x.jpg"
          alt="Solar Tech"
          width={1200}
          height={1000}
          className="object-cover w-full h-[600px] md:h-[800px] lg:h-[600px]"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            MK Solar Technologies
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 drop-shadow-lg">
            Welcome to Our Future-Ready Solutions
          </p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg font-semibold text-gray-900 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>cmd
      
    </div>
  );
};

export default HeroSection;

