import React from 'react';
import { Link } from 'react-router-dom';
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list absolute bg-white shadow-lg rounded border border-gray-200 z-50 mt-2 w-full max-h-60 overflow-y-auto">
      {results.map((result, id) => (
        <Link to={`/products/${result.product_id}`}>
        <div className="result-item p-2 hover:bg-gray-100 cursor-pointer" key={id}>
          {result.product_name}
        </div>
        </Link>
      ))}
    </div>
  );
};
