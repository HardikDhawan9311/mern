import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="header top-0 bg-blue-100 shadow-md flex justify-between items-center px-4 md:px-8 py-2 z-20 relative">
      <div className="flex items-center">
        <a href="/"><img src={logo} alt="Logo" className="h-8 w-20 md:h-10 md:w-22 mr-4" /></a>
      </div>
      <nav className="nav font-semibold text-lg flex-1 flex justify-end items-center relative z-20">
        <div className={`hidden md:flex items-center space-x-4 transition-transform duration-300 ease-in-out`}>
          <div
            className="relative"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <NavLink
              to="/product"
              className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer flex items-center"
            >
              Products
              <i className="fas fa-chevron-down ml-2"></i>
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded border border-gray-200 z-50 ">
                <ul className="flex space-x-4 p-4 ">
                  {['Product 1', 'Product 2', 'Product 3'].map((product) => (
                    <li
                      key={product}
                      className="relative cursor-pointer hover:text-blue-700 whitespace-nowrap "
                      onClick={() => handleProductClick(product)}
                    >
                      <NavLink to="#">{product}</NavLink>
                      {activeProduct === product && (
                        <div className="absolute top-full left-0 bg-white shadow-lg rounded border border-gray-200 z-50 mt-2">
                          <ul className="flex flex-col space-y-2 p-4">
                            <li className="cursor-pointer hover:text-blue-700 whitespace-nowrap overflow-hidden text-ellipsis">
                              <NavLink to="#">Subproduct 1</NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-blue-700 whitespace-nowrap overflow-hidden text-ellipsis">
                              <NavLink to="#">Subproduct 2</NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-blue-700 ">
                              <NavLink to="#">Subproduct 3</NavLink>
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
          <NavLink
            to="/about"
            className="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact_us"
            className="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer"
          >
            Contact Us
          </NavLink>
        </div>
        <div
          className="p-5 overflow-hidden w-[50px] h-[50px] hover:w-[210px] bg-[#FFFFFF] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300 mr-4" 
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
            <i className="fas fa-search text-black mr-8"></i>
          </div>
          <input
            type="text"
            className="outline-none text-[18px] bg-transparent w-full text-black font-normal px-4"
            placeholder="Search"
          />
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
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded border border-gray-200 z-50 md:hidden">
          <ul className="space-y-2 p-4">
            <li
              className="relative cursor-pointer hover:text-blue-700"
              onClick={() => handleProductClick('Products')}
            >
              <NavLink to="/product">
                Products <i className="fas fa-chevron-down ml-2"></i>
              </NavLink>
              {activeProduct === 'Products' && (
                <div className="pl-4 mt-4">
                  <ul className="space-y-2">
                    <li className="cursor-pointer hover:text-blue-700">
                      <NavLink to="#">Product 1</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-blue-700">
                      <NavLink to="#">Product 2</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-blue-700">
                      <NavLink to="#">Product 3</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-blue-700">
              <NavLink to="/contact_us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
