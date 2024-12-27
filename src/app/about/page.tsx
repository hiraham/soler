"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from '../components/NavigationSection';

const About = () => {
  return (
    <>
      <Header />
       <Navigation/>
      {/* Hero Section */}
      <div className="container mx-auto text-slate-700 px-6 md:px-14 font-[Montserrat] mt-12">
        <Image src="/Images/download (3).jpg" alt="Solar Tech"
          width={1200}
          height={1000}
          className="object-cover w-full h-[600px] md:h-[800px] lg:h-[500px] bg-opacity-70 p-10 rounded-lg shadow-lg"
        /> 
        <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 bg-opacity-70 p-10 rounded-lg shadow-lg">
          {/* Image on the left */}
          <Image
            src="/Images/v.jpg" // Replace with the actual image path
            alt="About Company"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          
          {/* Text on the right */}
          <div className="md:w-1/2 text-left">
            <h5 className="text-lg font-bold text-yellow-400 mb-4 tracking-wide uppercase">
              About Company
            </h5>
            <h1 className="text-5xl font-extrabold mb-6 leading-snug">
              Explore the Boundless Universe with Us
            </h1>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              At our company, we combine passion, innovation, and expertise to make 
              space exploration accessible. Our mission is to bridge the gap between 
              humanity and the cosmos, unveiling the mysteries of the solar system 
              while delivering transformative solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join us in reaching for the stars as we redefine possibilities, one 
              mission at a time. Together, we can unlock the secrets of the universe 
              and inspire generations to come.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out">
              <Link href="/productlist">Get a Free Quote</Link>
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto my-16 px-6 md:px-14">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <Image
            src="/Images/x.jpg" // Ensure this image exists in /public/Images/
            alt="Exploring the Universe"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-[#252B42] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              At our core, we are dreamers and innovators. Our mission is to
              make space exploration accessible and inspire the world with the
              infinite possibilities that lie beyond our planet. From
              groundbreaking research to advanced solutions, we are charting a
              path to the stars.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a dedicated team of experts and a passion for innovation, we
              aim to bridge the gap between Earth and the cosmos, empowering
              individuals and organizations to reach new heights.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
