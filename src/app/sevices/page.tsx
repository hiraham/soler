import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/NavigationSection";

const Services = () => {
  const services = [
    {
      src: "/Images/ma.jpg",
      title: "Graphic Design",
      description:
        "Professional graphic design services to make your brand stand out.",
      price: "$50/hour",
    },
    {
      src: "/Images/mg.jpg",
      title: "Web Development",
      description:
        "Custom website development tailored to your business needs.",
      price: "$70/hour",
    },
    {
      src: "/Images/mp.jpg",
      title: "SEO Optimization",
      description:
        "Improve your website's visibility and drive organic traffic.",
      price: "$40/hour",
    },
    {
      src: "/Images/mo.jpg",
      title: "Digital Marketing",
      description:
        "Comprehensive marketing strategies for online success.",
      price: "$60/hour",
    },
    {
      src: "/Images/m.jpg",
      title: "Customer Support",
      description: "Reliable support services for your customers.",
      price: "$30/hour",
    },
    {
      src: "/Images/mr.jpg",
      title: "Data Analytics",
      description:
        "Data-driven insights to help grow your business.",
      price: "$80/hour",
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
            src="/Images/sr.jpg"
            alt="Services Main"
            width={1200}
            height={500}
            className="rounded-lg shadow-lg border-2 border-gray-300 object-cover mx-auto"
          />
          <h3 className="text-3xl font-bold text-gray-800 font-[Montserrat] mt-8">
            OUR SERVICES
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Tailored solutions to meet your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={service.src || "/images/placeholder.png"} // Fallback for missing images
                  alt={service.title || "Service Image"}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              {/* Service Title */}
              <p className="text-lg font-semibold text-gray-800 text-center font-[Montserrat]">
                {service.title}
              </p>
              {/* Service Description */}
              <p className="text-sm text-gray-500 text-center mt-2">
                {service.description}
              </p>
              {/* Service Price */}
              {service.price && (
                <p className="text-green-600 font-bold text-center mt-4">
                  {service.price}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
