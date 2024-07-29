import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/Images/logo.png';
import SearchInput from './searchInput';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct === product ? null : product);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchFocus = () => {
    setSearchActive(true);
  };

  const handleSearchBlur = () => {
    setSearchActive(false);
  };

  return (
    <header className="header top-0 bg-blue-100 shadow-md flex justify-between items-center px-4 md:px-8 py-2 z-20 relative">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-20 md:h-10 md:w-22 mr-4" />
      </div>
      <nav className="nav font-semibold text-lg flex-1 flex justify-end items-center relative z-20">
        <div className="flex items-center w-full max-w-md mx-4">
          <SearchInput onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
        </div>
        <div className={`hidden md:flex items-center space-x-4 transition-transform duration-300 ease-in-out ${isSearchActive ? 'transform -translate-x-64' : ''}`}>
          <div
            className="relative"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <NavLink
              to="#"
              className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer flex items-center"
            >
              Products
              <i className="fas fa-chevron-down ml-2"></i>
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded border border-gray-200 z-50">
                <ul className="space-y-2 p-4">
                  {['Product 1', 'Product 2', 'Product 3'].map((product) => (
                    <li
                      key={product}
                      className="relative cursor-pointer hover:text-green-500"
                      onClick={() => handleProductClick(product)}
                    >
                      <NavLink to="#">{product}</NavLink>
                      {activeProduct === product && (
                        <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded border border-gray-200 z-50">
                          <ul className="space-y-2 p-4">
                            <li className="cursor-pointer hover:text-green-500">
                              <NavLink to="#">Subproduct 1</NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-green-500">
                              <NavLink to="#">Subproduct 2</NavLink>
                            </li>
                            <li className="cursor-pointer hover:text-green-500">
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
            className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact_us"
            className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer"
          >
            Contact Us
          </NavLink>
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
              className="relative cursor-pointer hover:text-green-500"
              onClick={() => handleProductClick('Products')}
            >
              <NavLink to="#">
                Products <i className="fas fa-chevron-down ml-2"></i>
              </NavLink>
              {activeProduct === 'Products' && (
                <div className="pl-4 mt-2">
                  <ul className="space-y-2">
                    <li className="cursor-pointer hover:text-green-500">
                      <NavLink to="#">Product 1</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-green-500">
                      <NavLink to="#">Product 2</NavLink>
                    </li>
                    <li className="cursor-pointer hover:text-green-500">
                      <NavLink to="#">Product 3</NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="cursor-pointer hover:text-green-500">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="cursor-pointer hover:text-green-500">
              <NavLink to="/contact_us">Contact Us</NavLink>
            </li>
            <li>
              <SearchInput onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
