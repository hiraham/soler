"use client";
import Link from "next/link";
import { FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white px-6 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Website Name */}
        <h3 className="text-[#23A6F0] font-montserrat font-bold text-2xl leading-8 tracking-tight">
          <Link href="/">MK Soler Tecnology</Link>
        </h3>

        {/* Center: Navigation Links (for desktop) */}
        <ul className="hidden md:flex space-x-8 text-[#737373] font-montserrat text-base font-medium">
          <li className="hover:text-[#252B42] cursor-pointer">
            <Link href="/">Home</Link>
          </li>

          <li className="relative group cursor-pointer text-[#252B42] ml-1">
            <Link href="/product">Product</Link>
          </li>
          <li className="hover:text-[#252B42] cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#252B42] cursor-pointer">
            <Link href="/blogs">Blog</Link>
          </li>
          <li className="hover:text-[#252B42] cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#252B42] cursor-pointer">
            <Link href="/sevices">Services</Link>
          </li>
        </ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <FaBars className="text-[#23A6F0] cursor-pointer" size={20} onClick={toggleMobileMenu} />
        </div>

        {/* Right: Icons and Login/Register */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center text-[#23A6F0] space-x-1 cursor-pointer">
              <Image src="/Images/Vector (1).svg"
                alt="great"
                width={30} height={30}
                className="w-5 h-5 rounded-full" />
              <span className="font-montserrat font-medium text-sm">
                <Link href="/login">Login / Register</Link>
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#23A6F0] mt-1"></div>
          </div>
          {/* Shopping Cart */}
          <div className="relative">
            <Link href="/cart">
              <FaShoppingCart className="text-[#23A6F0] cursor-pointer" size={20} />
            </Link>
          
          </div>

          {/* Heart Icon */}
          <div className="relative">
            <Link href="/favorites">
              <FaHeart className="text-[#23A6F0] cursor-pointer" size={20} />
            </Link>
           
          </div>
        </div>
      </div>

      {/* Mobile Menu (for small screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md mt-4">
          <ul className="space-y-4 py-4 text-[#737373] font-montserrat text-base font-medium">
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="relative group cursor-pointer">
              Shop
              <span className="text-[#252B42] ml-1">▼</span>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/shop/category1">Category 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/shop/category2">Category 2</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/blogs">Blog</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-[#252B42] cursor-pointer">
              <Link href="/srvices">Services</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
