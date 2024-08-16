import React from 'react';
import Contactus from "./Contactus";
import Navbar from "../Hero/Navbar";
import Footer from "../Footer";


export default function Contact() {
  
  return (
    <>
    <Navbar />
      
        
        <div className="relative w-full h-64"> {/* Set a fixed height */}
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/49/96/electronic-contacts-on-dark-blue-background-vector-21194996.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover " // Ensure the image covers the container
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold ">
            Contact Us
          </div>
        </div>
        <Contactus />
        <Footer />
      
    </>
  );
}
