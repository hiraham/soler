import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">MK SOLER TECHNOLOGIES</h2>
            <p>
              MK Solar Technologies is Sindh’s first solar renewable energy store which
              offers a key feature to calculate your energy requirements. We are
              here to facilitate you through a range of solar panels, Solar
              Electrical Accessories, Solar inverter, and solar batteries.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Domestic Solar Solutions</li>
              <li>Commercial Solar Solutions</li>
              <li>Industrial Solar Solution</li>
              <li>Net Metering</li>
              <li>Solar Design</li>
              <li>Solar Consultancy</li>
            </ul>
          </div>

          {/* Product Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>Solar Panel</li>
              <li>Solar Inverter</li>
              <li>Solar Batteries</li>
              <li>Solar Water Pump</li>
              <li>DC Breakers & SPDs</li>
              <li>Mounting Structure</li>
            </ul>
          </div>
        

        {/* Contact Info Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Shahra-e-Faisal, Karachi, Sindh, Pakistan</p>
          <p>+92 321 2735160</p>
          <p>https://MKtechnologies.pk</p>
          <p>info@mktechologies.pk</p>
        </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-400">
          <p>© Copyright 2012 - 2024 MK Solar Tecnologies | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
