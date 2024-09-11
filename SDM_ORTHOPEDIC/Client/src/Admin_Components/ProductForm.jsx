import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductForm({ product, onSave }) {
    const [formData, setFormData] = useState({
        product_id: '',
        product_category: '',
        product_name: '',
        product_info: '',
        image1: '',
        image2: '',
        image3: '',
        sizes: [{ id: null, product_size: '' }], // Include id for updates
        prices: [{ id: null, product_size: '', price: '' }] // Include id for updates
    });

    useEffect(() => {
        if (product) {
            // Load sizes and prices for the product being edited
            axios.get(`http://localhost:1234/products/${product.product_id}/sizes`)
                .then(res => setFormData(prev => ({ ...prev, sizes: res.data })))
                .catch(error => console.error(`Error fetching sizes for product ${product.product_id}:`, error));

            axios.get(`http://localhost:1234/products/${product.product_id}/price`)
                .then(res => setFormData(prev => ({ ...prev, prices: res.data })))
                .catch(error => console.error(`Error fetching prices for product ${product.product_id}:`, error));

            setFormData({
                ...product,
                sizes: [], // Sizes and prices are being set by axios calls
                prices: []
            });
        }
    }, [product]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSizeChange = (index, e) => {
        const { name, value } = e.target;
        
        // Update sizes
        const newSizes = [...formData.sizes];
        newSizes[index][name] = value;
        setFormData(prev => ({ ...prev, sizes: newSizes }));
    
        // Check if the price array has the corresponding size and update the price size
        const newPrices = [...formData.prices];
        if (newPrices[index]) {
            newPrices[index].product_size = value;
        } else {
            // If there's no price entry for this size, create a new one
            newPrices.push({ product_size: value, price: '' });
        }
        setFormData(prev => ({ ...prev, prices: newPrices }));
    };
    
    const handlePriceChange = (index, e) => {
        const { name, value } = e.target;
        
        // Update prices
        const newPrices = [...formData.prices];
        newPrices[index][name] = value;
        setFormData(prev => ({ ...prev, prices: newPrices }));
    
        // Also update the size if the user is changing the size inside prices
        if (name === 'product_size') {
            const newSizes = [...formData.sizes];
            if (newSizes[index]) {
                newSizes[index].product_size = value;
            }
            setFormData(prev => ({ ...prev, sizes: newSizes }));
        }
    };

    const addSize = () => {
        setFormData(prev => ({ ...prev, sizes: [...prev.sizes, { id: null, product_size: '' }] }));
    };

    const removeSize = index => {
        const newSizes = formData.sizes.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, sizes: newSizes }));
    };

    const addPrice = () => {
        setFormData(prev => ({ ...prev, prices: [...prev.prices, { id: null, product_size: '', price: '' }] }));
    };

    const removePrice = index => {
        const newPrices = formData.prices.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, prices: newPrices }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const confirmSubmit = window.confirm('Are you sure you want to save these changes?');
        if (!confirmSubmit) return;

        try {
            let productPromise;
            if (product) {
                // Update product
                productPromise = axios.put(`http://localhost:1234/products/${formData.product_id}`, {
                    product_category: formData.product_category,
                    product_name: formData.product_name,
                    product_info: formData.product_info,
                    image1: formData.image1,
                    image2: formData.image2,
                    image3: formData.image3
                });
            } else {
                // Create new product
                productPromise = axios.post('http://localhost:1234/products', {
                    product_category: formData.product_category,
                    product_name: formData.product_name,
                    product_info: formData.product_info,
                    image1: formData.image1,
                    image2: formData.image2,
                    image3: formData.image3
                });
            }

            const productResponse = await productPromise;
            const productId = product ? product.product_id : productResponse.data.product_id;

            // Handle sizes
            const sizePromises = formData.sizes.map(size => {
                if (size.id) {
                    return axios.put(`http://localhost:1234/products/${productId}/sizes/${size.id}`, size);
                } else {
                    return axios.post(`http://localhost:1234/products/${productId}/sizes`, size);
                }
            });

            // Handle prices
            const pricePromises = formData.prices.map(price => {
                if (price.id) {
                    return axios.put(`http://localhost:1234/products/${productId}/prices/${price.id}`, price);
                } else {
                    return axios.post(`http://localhost:1234/products/${productId}/prices`, price);
                }
            });

            await Promise.all([...sizePromises, ...pricePromises]);

            // Show success alert
            setTimeout(() => {
                alert('Changes saved successfully!');
                onSave();
            }, 2000);

        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">{product ? 'Edit Product' : 'Create Product'}</h2>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700">Product ID</label>
                        <input type="text" name="product_id" value={formData.product_id} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">Category</label>
                        <input type="text" name="product_category" value={formData.product_category} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input type="text" name="product_name" value={formData.product_name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Info</label>
                        <textarea name="product_info" value={formData.product_info} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                {/* Image URLs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                        <label className="block text-gray-700">Image 1 URL</label>
                        <input type="text" name="image1" value={formData.image1} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Image 2 URL</label>
                        <input type="text" name="image2" value={formData.image2} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Image 3 URL</label>
                        <input type="text" name="image3" value={formData.image3} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>

                {/* Sizes Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Sizes</h3>
                    {formData.sizes.map((size, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input type="text" name="product_size" value={size.product_size} onChange={e => handleSizeChange(index, e)} className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Size" />
                            <button type="button" onClick={() => removeSize(index)} className="text-red-600 hover:text-red-800 ml-2">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addSize} className="mt-2 text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Add Size</button>
                </div>

                {/* Prices Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Prices</h3>
                    {formData.prices.map((price, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input type="text" name="product_size" value={price.product_size} onChange={e => handlePriceChange(index, e)} className="w-1/2 border border-gray-300 rounded-lg px-4 py-2" placeholder="Size" />
                            <input type="text" name="price" value={price.price} onChange={e => handlePriceChange(index, e)} className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 ml-2" placeholder="Price" />
                            <button type="button" onClick={() => removePrice(index)} className="text-red-600 hover:text-red-800 ml-2">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addPrice} className="mt-2 text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Add Price</button>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">{product ? 'Update Product' : 'Create Product'}</button>
            </form>
        </div>
    );
}

export default ProductForm;
