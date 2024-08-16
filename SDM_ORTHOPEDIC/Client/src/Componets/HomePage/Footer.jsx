import React from 'react';
import logo from '../../assets/Images/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Section */}
          <div className="flex flex-col">
            <div className=" flex flex-item size-20 items-center  text-teal-300  ">
              <img src={logo} alt="logo" className='h-8' />
              <h2 className='font-bold text-white ml-2 text-3xl'>ORTHOPEDICS</h2>
            </div>
            <br />
            <address className='text-white'>
              Address: Sector B1, Plot No. E-16, Tronica City Industrial Area Loni, Ghaziabad, Uttar Pradesh - 201103
            </address>
            <br />
            <p className='text-white'>Contact: <a href="tel:9810648410">9810648410</a>, <a href="tel:9354256801">9354256801</a>
            </p>
          </div>

          {/* Company Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Company</p>
            <nav className="mt-6">
              <ul className="space-y-4 text-sm text-center">
                <li>
                  <a href="/" className="text-gray-300 hover:underline">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">Products</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-300 hover:underline">About Us</a>
                </li>
                <li>
                  <a href="/contact_us" className="text-gray-300 hover:underline">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Quick Links</p>
            <nav className="mt-6">
              <ul className="space-y-4 text-sm text-center">
                <li>
                  <a href="#" className="text-gray-300 hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:underline">License</a>
                </li>
                <li>
                  <Link to="/AdminApp" className="text-gray-300 hover:underline"><u>Are You an Admin ?</u></Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center">
            <p className="font-medium text-white">Follow Us</p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sdmorthopedic@yahoo.com" target='blank' className="text-gray-300 hover:text-white" aria-label="Gmail">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-center text-gray-400">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
