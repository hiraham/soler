import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-orange-500  py-2 px-8 text-white text-xl ">
      <div className="flex justify-between items-center">
        {/* Left: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube  />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram  />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>

        {/* Right: Contact Details */}
        <div className="flex items-center space-x-4">
          <p className="text-sm">Contact: +123 456 789</p>
          <p className="text-sm">Email: info@solarwebsite.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
