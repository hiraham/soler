import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/NavigationSection";

const Blogs = () => {
  const blogs = [
    {
      src: "/Images/download (1).jpg",
      title: "How to Build a Solar-Powered Home",
      description:
        "Discover how to integrate solar power into your home for a sustainable future. Learn the steps to take and the products you need.",
      link: "/blogs/how-to-build-a-solar-powered-home",
    },
    {
      src: "/Images/download (2).jpg",
      title: "Top Solar Trends in 2024",
      description:
        "Explore the latest trends in the solar energy industry and what innovations are changing the landscape of renewable energy.",
      link: "/blogs/top-solar-trends-in-2024",
    },
    {
      src: "/Images/z.jpg",  // Corrected the path
      title: "The Future of Renewable Energy",
      description:
        "A deep dive into the future of renewable energy, including emerging technologies and their potential impact on global energy markets.",
      link: "/blogs/the-future-of-renewable-energy",
    },

  ];

  return (
    <div>
      <Header />
      <Navigation />
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Image
            src="/Images/st.jpg"
            alt="Blogs Main"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg border-2 border-gray-300 object-cover mx-auto"
          />
          <h3 className="text-3xl font-bold text-gray-800 font-[Montserrat] mt-8">
            OUR BLOGS
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Stay updated with the latest insights and trends in solar energy and renewable technologies.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={blog.src || "/images/placeholder.png"} // Fallback for missing images
                  alt={blog.title || "Blog Image"}
                  width={400}
                  height={250}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              {/* Blog Title */}
              <p className="text-lg font-semibold text-gray-800 text-center font-[Montserrat]">
                {blog.title}
              </p>
              {/* Blog Description */}
              <p className="text-sm text-gray-500 text-center mt-2">
                {blog.description}
              </p>
              {/* Read More Link */}
              <div className="text-center mt-4">
                <a
                  href={blog.link}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
