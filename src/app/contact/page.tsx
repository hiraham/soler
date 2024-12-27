"use client"; // Add this at the top of the file

import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/NavigationSection";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/Images/contactus.JPG"
          alt="Contact Us"
          width={1200}
          height={1000}
          className="object-cover w-full h-[600px] md:h-[800px] lg:h-[400px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Address Section */}
      <div className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {/* Head Office Address */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Head Office Address</h3>
          <p>Plot CB-15 Alfalah Society Shahra-e-Faisal, Beside Agha Khan Lab, Karachi</p>
        </div>
        {/* Bahria Town Address */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Bahria Town Address</h3>
          <p>MK Technologies, Bahria Town, Karachi, Pakistan</p>
        </div>
        {/* Dubai Address */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Dubai Address</h3>
          <p>MK Technologies, Dubai, United Arab Emirates</p>
        </div>
        {/* Call Us */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Call Us</h3>
          <p>0321-2735160</p>
        </div>
        {/* Email Addresses */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Email Addresses</h3>
          <p>info@mktechnologies.pk</p>
          <p>admin@mktechnologies.pk</p>
        </div>
      </div>

      {/* Submission Form */}
      <div className="py-12 px-6 flex flex-col lg:flex-row items-center">
       
     
        {/* Left: Form */}
        <div className="lg:w-1/2 w-full">
          <h3 className="text-center text-2xl font-semibold mb-6">Submit Your Message</h3>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5} // Fixed the rows issue (should be a number)
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <div className="text-center mt-6">
  <Link href="/admin@mktechnologies.pk">
    <button type="button" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
      Submit
    </button>
  </Link>
</div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <Image
            src="/Images/cont.JPG" // Use the correct image path
            alt="Contact Form"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
