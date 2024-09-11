import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ onEdit, onDelete }) {
    const [products, setProducts] = useState([]);
    const [sizes, setSizes] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        axios.get('http://localhost:1234/products')
            .then(response => {
                setProducts(response.data);
                response.data.forEach(product => {
                    axios.get(`http://localhost:1234/products/${product.product_id}/sizes`)
                        .then(res => setSizes(prev => ({ ...prev, [product.product_id]: res.data })))
                        .catch(error => console.error(`Error fetching sizes for product ${product.product_id}:`, error));

                    axios.get(`http://localhost:1234/products/${product.product_id}/price`)
                        .then(res => setPrices(prev => ({ ...prev, [product.product_id]: res.data })))
                        .catch(error => console.error(`Error fetching prices for product ${product.product_id}:`, error));
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Products List</h2>
            <div className="shadow-lg rounded-lg overflow-hidden">
                <table className="min-w-full table-auto bg-white rounded-lg">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Category</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left w-2/6">Info</th> {/* Increase width here */}
                            <th className="py-3 px-6 text-left">Images</th>
                            <th className="py-3 px-6 text-left">Sizes</th>
                            <th className="py-3 px-6 text-left">Prices</th>
                            <th className="py-3 px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {products.map(product => (
                            <tr key={product.product_id} className="bg-gray-50 hover:bg-gray-100 border-b transition-all">
                                <td className="py-3 px-6">{product.product_id}</td>
                                <td className="py-3 px-6">{product.product_category}</td>
                                <td className="py-3 px-6">{product.product_name}</td>
                                <td className="py-3 px-6 w-2/6">{product.product_info}</td> {/* Increase width here */}
                                <td className="py-3 px-6">
                                    <div className="flex space-x-2">
                                        <img src={product.image1} alt="Image1" className="h-12 w-12 object-cover rounded" />
                                        <img src={product.image2} alt="Image2" className="h-12 w-12 object-cover rounded" />
                                        <img src={product.image3} alt="Image3" className="h-12 w-12 object-cover rounded" />
                                    </div>
                                </td>
                                <td className="py-3 px-6">
                                    {sizes[product.product_id] ? (
                                        <ul className="list-disc pl-5">
                                            {sizes[product.product_id].map(size => (
                                                <li key={size.product_size}>{size.product_size}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-gray-500 italic">Not Set</span>
                                    )}
                                </td>
                                <td className="py-3 px-6">
                                    {prices[product.product_id] ? (
                                        <ul className="list-disc pl-5">
                                            {prices[product.product_id].map(price => (
                                                <li key={price.product_size}>
                                                    {price.product_size} - ₹{price.price}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-gray-500 italic">Not Set</span>
                                    )}
                                </td>
                                <td className="py-3 px-6">
                                    <button
                                        onClick={() => onEdit(product)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(product.product_id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 ml-3 transition duration-300"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
