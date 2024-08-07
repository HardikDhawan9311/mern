import React, { useState } from 'react';

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:1234/products")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((note) => {
          return (
            value &&
            note &&
            (note.product_name.toLowerCase().includes(value.toLowerCase()))
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  


  return (
    <div className="flex items-center max-w-xs bg-gray-700 rounded-lg overflow-hidden">
      <svg
        className="h-4 px-2 fill-current text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        alt="search icon"
      >
        <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
      </svg>
      <input
        className="bg-transparent text-white outline-none w-full border-0 px-2 py-2 text-sm"
        id="inputBox"
        type="text"
        placeholder="Search For Products"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
