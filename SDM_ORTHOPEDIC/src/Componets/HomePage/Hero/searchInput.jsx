import React, { useState } from 'react';

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center w-full">
      <div className="relative w-full">
        {/* Search Icon */}
        <button
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 bg-transparent rounded-full text-2xl transition duration-300 ease-in-out ${
            isFocused ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={() => setIsFocused(true)}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>

        {/* Input Field */}
        <input
          type="text"
          className={`w-full pl-12 pr-16 py-3 text-lg leading-5 text-gray-800 placeholder-gray-300 bg-white border border-gray-300 rounded-full transition-all duration-300 ease-in-out ${
            isFocused ? 'opacity-100' : 'opacity-0'
          }`}
          placeholder="Type to Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
