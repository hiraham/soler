import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavigationSection: React.FC = () => {
  return (
    <div className="bg-white text-black py-4 px-8 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Images/log.jpg" alt="Solar Logo" className="w-16 h-16" />
          <h1 className="text-lg font-bold">Solar System</h1>
        </div>

        {/* Center: Navigation Bar */}
        <nav className="flex space-x-8">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#solution" className="hover:text-gray-600">Solution</a>
          <a href="#product" className="hover:text-gray-600">Product</a>
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#blogs" className="hover:text-gray-600">Blogs</a>
        </nav>

        {/* Right: Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-black text-xl cursor-pointer hover:text-gray-600" />
          <input
                type="text"
                placeholder="Search..."
                className="outline-none text-sm bg-transparent"
              />
          <FaShoppingCart className="text-black text-xl cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
