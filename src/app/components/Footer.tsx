import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C5878] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">MK Solar Technologies</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              MK Solar Technologies is Sindh’s first solar renewable energy store offering innovative solutions for energy needs. We provide a range of solar panels, inverters, batteries, and accessories to make renewable energy accessible for everyone.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Domestic Solar Solutions</li>
              <li>Commercial Solar Solutions</li>
              <li>Industrial Solar Solutions</li>
              <li>Net Metering</li>
              <li>Solar Design</li>
              <li>Solar Consultancy</li>
            </ul>
          </div>

          {/* Product Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Solar Panels</li>
              <li>Solar Inverters</li>
              <li>Solar Batteries</li>
              <li>Solar Water Pumps</li>
              <li>DC Breakers & SPDs</li>
              <li>Mounting Structures</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Shahra-e-Faisal, Karachi, Sindh, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +92 321 2735160
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> info@mktechologies.pk
              </li>
              <li className="flex items-center gap-2">
                <FaGlobe /> <a href="https://MKtechnologies.pk" className="hover:underline">MKtechnologies.pk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© 2012 - 2024 MK Solar Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
