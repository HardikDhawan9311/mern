import React from 'react';
import logo from '../../assets/Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 mt-auto container mx-auto flex justify-between items-center">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              <strong>SDM ORTHOPAEDIC</strong>
              <br />
              Address: Sector B1, Plot No. E-16, Tronica City Industrial Area Loni, Ghaziabad, Uttar Pradesh - 201103
              <br />
              Contact: 9810648410, 9354256801
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a className="hover:opacity-75" href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                {/* Facebook Icon */}
              </a>
              <a className="hover:opacity-75" href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                {/* Instagram Icon */}
              </a>
              <a className="hover:opacity-75" href="https://twitter.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                {/* Twitter Icon */}
              </a>
              <a className="hover:opacity-75" href="https://youtube.com" target="_blank" rel="noreferrer">
                <span className="sr-only">YouTube</span>
                {/* YouTube Icon */}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#">About</a>
                <a className="hover:opacity-75" href="#">Products</a>
              </nav>
            </div>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-8">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
        <p className="mt-8 text-xs text-gray-800">
          Copyright © 2024 sdmorthopedic.com. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
