import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../assets/Images/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState({});
  const [showAllSubcategories, setShowAllSubcategories] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:1234/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
    setShowAllSubcategories({});
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMoreClick = (categoryName) => {
    setShowAllSubcategories((prevState) => ({
      ...prevState,
      [categoryName]: true,
    }));
  };

  const handleProductClick = (product) => {
    console.log(`Product clicked: ${product.product_name}`);
    // Add additional logic as needed
  };

  return (
    <header className="bg-blue-100 shadow-md flex justify-between items-center px-4 md:px-8 py-2 z-20 relative">
      <div className="flex items-center">
        <a href="/">
          <img src={logo} alt="Logo" className="h-8 w-20 md:h-10 md:w-22 mr-4" />
        </a>
      </div>
      <nav className="font-semibold text-lg flex-1 flex justify-end items-center">
        <div className="hidden md:flex items-center space-x-4 transition-transform duration-300 ease-in-out">
          <NavLink
            to="/about"
            className="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer"
          >
            About Us
          </NavLink>
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
              <div
                className="absolute top-full right-2.5 bg-white shadow-lg rounded-md border border-gray-200 p-4 z-50"
                style={{ minWidth: '1100px' }}
              >
                <ul className="flex flex-wrap justify-center">
                  {Object.keys(categories).map((categoryName) => (
                    <li key={categoryName} className="relative group mr-4">
                      <span
                        className="block px-4 py-2 text-black-500 hover:text-blue-700 cursor-pointer"
                        style={{ fontWeight: 'bold' }}
                        onMouseEnter={() => handleCategoryClick(categoryName)}
                      >
                        {categoryName}
                      </span>
                      {activeCategory === categoryName && (
                        <ul className="absolute left-0 top-full bg-white shadow-lg rounded-md border border-gray-200 p-2 mt-2 z-50">
                          {categories[categoryName]
                            .slice(
                              0,
                              showAllSubcategories[categoryName]
                                ? categories[categoryName].length
                                : 4
                            )
                            .map((product) => (
                              <li
                                key={product.product_id}
                                className="cursor-pointer mr-4"
                              >
                                <Link
                                  to={`/products/${product.product_id}`}
                                  className="block px-4 py-2 text-black-500 hover:text-blue-700"
                                  onClick={() => handleProductClick(product)}
                                >
                                  {product.product_name}
                                </Link>
                              </li>
                            ))}
                          {!showAllSubcategories[categoryName] &&
                            categories[categoryName].length > 4 && (
                              <li className="cursor-pointer mr-4">
                                <span
                                  onClick={() => handleMoreClick(categoryName)}
                                  className="block px-4 py-2 text-blue-700 hover:text-blue-900 cursor-pointer"
                                >
                                  More...
                                </span>
                              </li>
                            )}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <NavLink
            to="/contact_us"
            className="p-4 border-b-2 border-blue-700 border-opacity-0 hover:border-opacity-100 hover:text-blue-700 duration-200 cursor-pointer"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="p-5 overflow-hidden w-[50px] h-[50px] hover:w-[210px] bg-[#FFFFFF] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300 mr-4">
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
        <div className="absolute top-0 left-0 w-full bg-white shadow-lg rounded-md border border-gray-200 z-50 md:hidden">
          <ul className="space-y-2 p-4">
            <li
              className="relative cursor-pointer hover:text-blue-700"
              onClick={() => handleCategoryClick('Products')}
            >
              <NavLink to="/product">
                Products <i className="fas fa-chevron-down ml-2"></i>
              </NavLink>
              {activeCategory === 'Products' && (
                <div className="pl-4 mt-4">
                  <ul className="space-y-2">
                    {Object.keys(categories).map((categoryName) => (
                      <li
                        key={categoryName}
                        className="relative cursor-pointer hover:text-green-700"
                      >
                        {categoryName}
                        <ul className="mt-2 pl-4">
                          {categories[categoryName].map((product) => (
                            <li
                              key={product.product_id}
                              className="cursor-pointer hover:text-blue-700"
                            >
                              <Link to={`/products/${product.product_id}`}>
                                {product.product_name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
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
