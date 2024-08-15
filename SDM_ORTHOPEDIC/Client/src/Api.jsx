import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Componets/HomePage/Hero/Navbar';
import Footer from './Componets/HomePage/Footer';

function API() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productId: ''
  });

  const fetchData = async () => {
    try {
      let res = await fetch('http://localhost:1234/products');
      let json = await res.json();
      console.log(json); // Log the fetched data
      if (Array.isArray(json)) {
        setProducts(json);
      } else {
        console.error('Fetched data is not an array', json);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const truncateText = (text, numChars) => {
    return text.length > numChars ? text.slice(0, numChars) + '...' : text;
  };

  const handleGetQuoteClick = (productId) => {
    setFormData({ ...formData, productId });
    setShowForm(true);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Debugging

    try {
      await axios.post('http://localhost:1234/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
    setShowForm(false);
  };
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-grey-100 p-6">
      <div>
      <h1 className="text-center text-6xl font-extrabold text-gray-800 tracking-wide leading-tight md:text-7xl lg:text-8xl mb-8 transition-transform duration-800 ease-in-out hover:scale-105 ">
  Products
</h1>

      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="mt-16 py-4 px-4 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 max-w-xs">
            <div className="w-sm">
              <img className="w-full h-40 object-cover mx-auto rounded-t-xl" src={product.image1} alt={product.product_name} />
              <div className="mt-4 text-black-600 text-center">
                <h1 className="text-xl font-bold">{product.product_name}</h1>
                <p className="mt-4 text-black-600">{truncateText(product.product_info, 50)}</p>
                <button 
                  className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-500 text-white tracking-widest hover:bg-blue-400 transition duration-200"
                  onClick={() => handleGetQuoteClick(product.product_id)}
                >
                  Get a Quote
                </button>
                <Link to={`/products/${product.product_id}`}>
                  <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-blue-500 text-white tracking-widest hover:bg-blue-400 transition duration-200">MORE</button>
                </Link> 
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-4">Get a Quote</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Product ID</label>
                  <input
                    type="text"
                    name="productId"
                    value={formData.productId}
                    readOnly
                    className="w-full px-3 py-2 border rounded bg-gray-100"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>
    <Footer/>
    </>
  );
}

export default API;
