import React, { useState } from 'react';
import ProductList from '../Admin_Components/ProductList';
import ProductForm from '../Admin_Components/ProductForm';
import BackArrow from '../assets/Images/BackArrow.png'; // Correct image import
import axios from 'axios';

function AdminPanel() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = product => {
        setSelectedProduct(product);
        setIsEditing(true);
    };

    const handleDelete = productId => {
        axios.delete(`http://localhost:1234/products/${productId}`)
            .then(() => window.location.reload())
            .catch(error => console.error('Error deleting product:', error));
    };

    const handleSave = () => {
        setIsEditing(false);
        setSelectedProduct(null);
        window.location.reload();
    };

    const handleBackToList = () => {
        setIsEditing(false);
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto p-4">
            {isEditing ? (
                <div>
                    {/* Back to Product List button with Image */}
                    <button
                        onClick={handleBackToList}
                        className="px-6 py-3 mb-4"
                    >
                        <img 
                            src={BackArrow} // Corrected image source
                            alt="Back" 
                            className="w-6 h-6 inline-block"
                        />
                    </button>

                    {/* Product Form */}
                    <ProductForm product={selectedProduct} onSave={handleSave} />
                </div>
            ) : (
                <div>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 mb-4"
                    >
                        Create New Product
                    </button>

                    {/* Product List */}
                    <ProductList onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
