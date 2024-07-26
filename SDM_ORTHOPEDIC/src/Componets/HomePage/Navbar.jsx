import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct === product ? null : product);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header  top-0 bg-blue-100 shadow-md flex justify-between items-center px-4 md:px-8 py-2 z-20">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-20 md:h-10 md:w-22 mr-4" />
      </div>
      <nav className="nav font-semibold text-lg flex-1 flex justify-end items-center relative z-20">
        <div className="hidden md:flex items-center space-x-4">
          <div
            className="relative"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <a
              href="#"
              className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer flex items-center"
            >
              Products
              <i className="fas fa-chevron-down ml-2"></i>
            </a>
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded border border-gray-200 z-30">
                <ul className="space-y-2 p-4">
                  {['Product 1', 'Product 2', 'Product 3'].map((product) => (
                    <li
                      key={product}
                      className="relative cursor-pointer hover:text-green-500"
                      onClick={() => handleProductClick(product)}
                    >
                      <a href="#">{product}</a>
                      {activeProduct === product && (
                        <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded border border-gray-200 z-40">
                          <ul className="space-y-2 p-4">
                            <li className="cursor-pointer hover:text-green-500">
                              <a href="#">Subproduct 1</a>
                            </li>
                            <li className="cursor-pointer hover:text-green-500">
                              <a href="#">Subproduct 2</a>
                            </li>
                            <li className="cursor-pointer hover:text-green-500">
                              <a href="#">Subproduct 3</a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <a href="#" className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">About Us</a>
          <a href="#" className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">Contact Us</a>
        </div>
        <div className="hidden md:flex items-center w-full max-w-md mx-4">
          <input
            className="w-full border border-gray-300 px-4 py-1 text-gray-400 outline-none focus:border-blue-500 transition duration-200"
            type="search"
            name="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            type="submit"
            className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
            aria-label="Search button"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex items-center md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-600 focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded border border-gray-200 z-30 md:hidden">
          <ul className="space-y-2 p-4">
            <li
              className="relative cursor-pointer hover:text-green-500"
              onClick={() => handleProductClick('Products')}
            >
              <a href="#">Products <i className="fas fa-chevron-down ml-2"></i></a>
              {activeProduct === 'Products' && (
                <div className="pl-4 mt-2">
                  <ul className="space-y-2">
                    <li className="cursor-pointer hover:text-green-500">
                      <a href="#">Product 1</a>
                    </li>
                    <li className="cursor-pointer hover:text-green-500">
                      <a href="#">Product 2</a>
                    </li>
                    <li className="cursor-pointer hover:text-green-500">
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-green-500">
              <a href="#">About Us</a>
            </li>
            <li className="cursor-pointer hover:text-green-500">
              <a href="#">Contact Us</a>
            </li>
            <li>
              <div className="flex items-center w-full max-w-md mx-4">
                <input
                  className="w-full border border-gray-300 px-4 py-1 text-gray-400 outline-none focus:border-blue-500 transition duration-200"
                  type="search"
                  name="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="m-2 rounded bg-blue-600 px-4 py-2 text-white"
                  aria-label="Search button"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
