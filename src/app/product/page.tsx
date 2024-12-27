import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/NavigationSection";

const Product = () => {
  const products = [
    {
      src: "/Images/so.jpg",
      description: "Graphic Design",
      alt: "Graphic Design",
      name: "Graphic Design",
      previousPrice: "$16.48",
      newPrice: "$6.48",
    },
    {
      src: "/Images/k.jpg",
      alt: "Graphic Design",
      name: "Graphic Design",
      description: "Math Department",
      previousPrice: "$18.48",
      newPrice: "$8.48",
    },
    {
      src: "/Images/d.jpg",
      alt: "Graphic Design",
      name: "Product 3",
      description: "Graphic Design",
      previousPrice: "$20.48",
      newPrice: "$10.48",
    },
    {
      src: "/Images/e.jpg",
      alt: "Graphic Design",
      name: "Product 4",
      description: "History Department",
      previousPrice: "$22.48",
      newPrice: "$12.48",
    },
    {
      src: "/Images/st.jpg",
      alt: "Graphic Design",
      name: "Product 5",
      description: "Graphic Design",
      previousPrice: "$24.48",
      newPrice: "$14.48",
    },
    {
      src: "/Images/a.png",
      alt: "Graphic Design",
      name: "Product 6",
      description: "Graphic Design",
      previousPrice: "$26.48",
      newPrice: "$16.48",
    },
    {
      src: "/Images/g.jpg",
      alt: "Graphic Design",
      name: "Product 7",
      description: "Graphic Design",
      previousPrice: "$28.48",
      newPrice: "$18.48",
    },
    {
      src: "/Images/st.jpg",
      alt: "Graphic Design",
      name: "Product 8",
      description: "Computer Science Department",
      previousPrice: "$30.48",
      newPrice: "$20.48",
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
            src="/Images/c.jpg"
            alt="main"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg border-2 border-gray-300 object-cover mx-auto"
          />
          <h3 className="text-3xl font-bold text-gray-800 font-[Montserrat] mt-8">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="flex justify-center items-center mb-4">
                <Image
                  src={item.src || "/images/placeholder.png"} // Fallback for missing images
                  alt={item.alt || "Product Image"}
                  width={200}
                  height={250}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              {/* Product Name */}
              <p className="text-lg font-semibold text-gray-800 text-center font-[Montserrat]">
                {item.name}
              </p>
              {/* Product Description */}
              {item.description && (
                <p className="text-sm text-gray-500 text-center mt-2">
                  {item.description}
                </p>
              )}
              {/* Prices */}
              <div className="flex justify-center items-center space-x-2 mt-4">
                {item.previousPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {item.previousPrice}
                  </p>
                )}
                <p className="text-green-600 font-bold text-lg">
                  {item.newPrice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
