import React, { useState } from 'react';
import logo from '../../assets/Images/logo.png'
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(true); // Keep the dropdown open when clicking on "Products"
  };

  const handleProductClick = (product) => {
    setActiveProduct(activeProduct === product ? null : product);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
    setActiveProduct(null); // Close subproduct list when dropdown closes
  };

  return (
    <header className="header sticky top-0 bg-blue-100 shadow-md flex justify-between items-center px-8 py-2">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-22 mr-4" />
      </div>
      <nav className="nav font-semibold text-lg flex-1 flex justify-end relative">
        <ul className="flex items-center space-x-4">
          <li
            className="relative"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownClose}
          >
            <a
              href="#"
              className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer flex items-center"
            >
              Products
              <svg
                className="ml-2 fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded border border-gray-200 z-10 whitespace-nowrap">
                <ul className="space-y-2 p-4">
                  {['Product 1', 'Product 2', 'Product 3'].map((product) => (
                    <li
                      key={product}
                      className="relative cursor-pointer hover:text-green-500"
                      onClick={() => handleProductClick(product)}
                    >
                      <a href="#">{product}</a>
                      {activeProduct === product && (
                        <div className="absolute left-full top-0 mt-2 bg-white shadow-lg rounded border border-gray-200 z-20 whitespace-nowrap">
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
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <a href="#">Contact Us</a>
          </li>
        </ul>
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
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
