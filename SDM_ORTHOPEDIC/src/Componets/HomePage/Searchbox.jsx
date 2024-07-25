import React, { useState } from 'react';

const Searchbox = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-fit h-fit left-36">
      <button 
        className="absolute right-0 w-12 h-12 text-xl font-bold text-white bg-transparent rounded-full cursor-pointer"
        onFocus={() => setFocused(true)}
      >
        🔍
      </button>
      <input
        type="text"
        placeholder="Type to Search..."
        className={`w-12 h-12 p-2 pr-10 text-lg tracking-wider text-white placeholder-white placeholder-opacity-50 bg-white border-none rounded-full outline-none transition-all duration-500 ease-in-out ${focused ? 'w-72 rounded-none bg-transparent border-b border-white' : ''}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Searchbox;
