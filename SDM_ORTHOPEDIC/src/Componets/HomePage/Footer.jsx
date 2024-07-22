import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Jobs</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Press</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Accessibility</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Partners</a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-x"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
