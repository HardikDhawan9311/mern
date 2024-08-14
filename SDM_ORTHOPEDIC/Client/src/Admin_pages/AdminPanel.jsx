import React, { useState } from 'react';
import ProductList from '../Admin_Components/ProductList';
import ProductForm from '../Admin_Components/ProductForm';
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

    return (
        <div className="container mx-auto p-4">
            {isEditing ? (
                <ProductForm product={selectedProduct} onSave={handleSave} />
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
                        Create New Product
                    </button>
                    <ProductList onEdit={handleEdit} onDelete={handleDelete} />
                </div>
            )}
        </div>
    );
}

export default AdminPanel;
