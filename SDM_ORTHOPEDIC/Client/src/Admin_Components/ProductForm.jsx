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
        sizes: [{ product_size: '' }],
        prices: [{ product_size: '', price: '' }]
    });

    useEffect(() => {
        if (product) {
            // Fetch and set existing sizes and prices for the product
            axios.get(`http://localhost:1234/products/${product.product_id}/sizes`)
                .then(res => setFormData(prev => ({ ...prev, sizes: res.data })))
                .catch(error => console.error(`Error fetching sizes for product ${product.product_id}:`, error));

            axios.get(`http://localhost:1234/products/${product.product_id}/price`)
                .then(res => setFormData(prev => ({ ...prev, prices: res.data })))
                .catch(error => console.error(`Error fetching prices for product ${product.product_id}:`, error));

            setFormData({
                ...product,
                sizes: [],
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
        const newSizes = [...formData.sizes];
        newSizes[index][name] = value;
        setFormData(prev => ({ ...prev, sizes: newSizes }));
    };

    const handlePriceChange = (index, e) => {
        const { name, value } = e.target;
        const newPrices = [...formData.prices];
        newPrices[index][name] = value;
        setFormData(prev => ({ ...prev, prices: newPrices }));
    };

    const addSize = () => {
        setFormData(prev => ({ ...prev, sizes: [...prev.sizes, { product_size: '' }] }));
    };

    const removeSize = index => {
        const newSizes = formData.sizes.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, sizes: newSizes }));
    };

    const addPrice = () => {
        setFormData(prev => ({ ...prev, prices: [...prev.prices, { product_size: '', price: '' }] }));
    };

    const removePrice = index => {
        const newPrices = formData.prices.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, prices: newPrices }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        const promises = [];
        
        // Save or update product details
        if (product) {
            promises.push(axios.put(`http://localhost:1234/products/${formData.product_id}`, {
                product_category: formData.product_category,
                product_name: formData.product_name,
                product_info: formData.product_info,
                image1: formData.image1,
                image2: formData.image2,
                image3: formData.image3
            }));
        } else {
            promises.push(axios.post('http://localhost:1234/products', {
                product_category: formData.product_category,
                product_name: formData.product_name,
                product_info: formData.product_info,
                image1: formData.image1,
                image2: formData.image2,
                image3: formData.image3
            }));
        }

        // Save or update sizes
        promises.push(...formData.sizes.map(size =>
            axios.post(`http://localhost:1234/products/${formData.product_id}/sizes`, size)
        ));

        // Save or update prices
        promises.push(...formData.prices.map(price =>
            axios.post(`http://localhost:1234/products/${formData.product_id}/price`, price)
        ));

        Promise.all(promises)
            .then(() => onSave())
            .catch(error => console.error('Error saving product:', error));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-xl font-bold mb-4">{product ? 'Edit Product' : 'Create Product'}</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Product ID</label>
                <input type="text" name="product_id" value={formData.product_id} onChange={handleChange} className="w-full border rounded px-2 py-1" required />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input type="text" name="product_category" value={formData.product_category} onChange={handleChange} className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" name="product_name" value={formData.product_name} onChange={handleChange} className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Info</label>
                <textarea name="product_info" value={formData.product_info} onChange={handleChange} className="w-full border rounded px-2 py-1" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Images</label>
                <input type="text" name="image1" value={formData.image1} onChange={handleChange} placeholder="Image 1 URL" className="w-full border rounded px-2 py-1" />
                <input type="text" name="image2" value={formData.image2} onChange={handleChange} placeholder="Image 2 URL" className="w-full border rounded px-2 py-1 mt-2" />
                <input type="text" name="image3" value={formData.image3} onChange={handleChange} placeholder="Image 3 URL" className="w-full border rounded px-2 py-1 mt-2" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Sizes</label>
                {formData.sizes.map((size, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            name="product_size"
                            value={size.product_size}
                            onChange={e => handleSizeChange(index, e)}
                            className="w-full border rounded px-2 py-1"
                            placeholder="Size"
                        />
                        <button type="button" onClick={() => removeSize(index)} className="text-red-500 ml-2">Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addSize} className="bg-gray-200 px-4 py-2 rounded">Add Size</button>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Prices</label>
                {formData.prices.map((price, index) => (
                    <div key={index} className="flex items-center mb-2">
                        <input
                            type="text"
                            name="product_size"
                            value={price.product_size}
                            onChange={e => handlePriceChange(index, e)}
                            className="w-1/2 border rounded px-2 py-1"
                            placeholder="Size"
                        />
                        <input
                            type="text"
                            name="price"
                            value={price.price}
                            onChange={e => handlePriceChange(index, e)}
                            className="w-1/2 border rounded px-2 py-1 ml-2"
                            placeholder="Price"
                        />
                        <button type="button" onClick={() => removePrice(index)} className="text-red-500 ml-2">Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addPrice} className="bg-gray-200 px-4 py-2 rounded">Add Price</button>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {product ? 'Update Product' : 'Create Product'}
            </button>
        </form>
    );
}

export default ProductForm;
