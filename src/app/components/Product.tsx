import React from "react";

const BestSellingProducts: React.FC = () => {
  const products = [
    {
      
      title: "Solar Panels",
      description:
        "Efficient and durable solar panels that provide reliable power for homes, businesses, and industrial setups. A long-term investment in your energy future.",
      imageUrl: "/Images/so.jpg", // Replace with actual image URL
    },
    {
      
        title: "Solar Hybrid System",
        description:
          "Our Solar Hybrid Systems provide a reliable, energy-efficient solution that integrates solar power with backup energy systems.",
        imageUrl: "/Images/st.jpg",
    },
    {
        title: "Solar Batteries",
        description:
          "High-quality solar batteries to store energy efficiently for use during non-sunny hours. Reliable, long-lasting, and designed for maximum efficiency.",
        imageUrl: "/Images/es.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-8">
          Best Selling Solar Products
        </h1>

        {/* Product Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-56 object-cover mb-6 rounded-lg"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
