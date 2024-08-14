import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList({ onEdit, onDelete }) {
    const [products, setProducts] = useState([]);
    const [sizes, setSizes] = useState({});
    const [prices, setPrices] = useState({});

    useEffect(() => {
        // Fetch products
        axios.get('http://localhost:1234/products')
            .then(response => {
                setProducts(response.data);
                // Fetch sizes and prices for each product
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
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Products List</h2>
            <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Category</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Info</th>
                        <th className="py-2 px-4 border">Images</th>
                        <th className="py-2 px-4 border">Sizes</th>
                        <th className="py-2 px-4 border">Prices</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.product_id}>
                            <td className="py-2 px-4 border">{product.product_id}</td>
                            <td className="py-2 px-4 border">{product.product_category}</td>
                            <td className="py-2 px-4 border">{product.product_name}</td>
                            <td className="py-2 px-4 border">{product.product_info}</td>
                            <td className="py-2 px-4 border">
                                <img src={product.image1} alt="Image1" className="h-12 w-12 inline-block"/>
                                <img src={product.image2} alt="Image2" className="h-12 w-12 inline-block"/>
                                <img src={product.image3} alt="Image3" className="h-12 w-12 inline-block"/>
                            </td>
                            <td className="py-2 px-4 border">
                                {sizes[product.product_id] ? (
                                    <ul>
                                        {sizes[product.product_id].map(size => (
                                            <li key={size.product_size}>{size.product_size}</li>
                                        ))}
                                    </ul>
                                ) : 'Not Set'}
                            </td>
                            <td className="py-2 px-4 border">
                                {prices[product.product_id] ? (
                                    <ul>
                                        {prices[product.product_id].map(price => (
                                            <li key={price.product_size}>
                                                {price.product_size} - {price.price}
                                            </li>
                                        ))}
                                    </ul>
                                ) : 'Not Set'}
                            </td>
                            <td className="py-2 px-4 border">
                                <button onClick={() => onEdit(product)} className="text-blue-500">Edit</button>
                                <button onClick={() => onDelete(product.product_id)} className="text-red-500 ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
