import React from 'react';
import Contactus from "./Contactus";
import Navbar from "../Hero/Navbar";
import Footer from "../Footer";
import img from '../../../assets/Images/logo.png';

export default function Contact() {
  return (
    <>
    <Navbar />
      
        
        <div className="relative w-full h-64"> {/* Set a fixed height */}
          <img
            src={img}
            alt="Contact Us"
            className="w-full h-full object-cover filter blur-lg" // Ensure the image covers the container
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl font-bold">
            Contact Us
          </div>
        </div>
        <Contactus />
        <Footer />
      
    </>
  );
}
