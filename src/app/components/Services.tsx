import React from "react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Solar System Installation",
      description:
        "We provide professional solar system installation services for residential, commercial, and industrial needs. Our team ensures efficient and seamless installation.",
      imageUrl: "/Images/j.jpg", // Replace with actual image path
    },
    {
      title: "Solar System Maintenance",
      description:
        "Regular maintenance is crucial for the optimal performance of your solar system. We offer maintenance services to keep your solar panels working efficiently.",
      imageUrl: "/Images/ma.jpg", // Replace with actual image path
    },
    {
      title: "Solar Panel Cleaning",
      description:
        "We offer solar panel cleaning services to remove dust, debris, and other elements that may reduce your system's efficiency.",
      imageUrl: "/Images/mr.jpg", // Replace with actual image path
    },
   
    
    {
      title: "Solar System Consultancy",
      description:
        "Our consultancy services help you design and implement the best solar solution based on your energy needs and budget.",
      imageUrl: "/Images/mg.jpg", // Replace with actual image path
    },
    {
      title: "Solar Panel Structure Fabrication",
      description:
        "We offer customized solar panel structures tailored to your installation needs, ensuring stability and longevity.",
      imageUrl: "/Images/mp.jpg", // Replace with actual image path
    },
    
    {
      title: "Solar System Design",
      description:
        "We offer professional solar system design services, ensuring that your system is tailored to your specific energy requirements and site conditions.",
      imageUrl: "/Images/mo.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Our Solar Services
        </h1>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover mb-6 rounded-t-lg"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Solar Services in Your Area</h2>
          <p className="text-lg mb-6">
            With just one click, get solar services delivered in your city. Contact us today for more information!
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300">
            Get Services Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
