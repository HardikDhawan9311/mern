import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Componets/HomePage/Footer';
import Navbar from '../Componets/HomePage/Hero/Navbar';


const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productId: ''
  });

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:1234/categories`);
        const categoryProducts = response.data[categoryName];
        setProducts(categoryProducts || []);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

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

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);

  //   try {
  //     await axios.post('http://localhost:1234/send-email', formData);
  //     alert('Email sent successfully');
  //   } catch (error) {
  //     console.error('Error sending email:', error);
  //     alert('Error sending email');
  //   }
  //   setShowForm(false);
  // };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      setShowThankYou(true);  // Show thank you message
      setShowForm(false);
      await axios.post('http://localhost:1234/send-email', formData);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
    
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products.length) {
    return <p>No products found in this category.</p>;
  }

  return (
    <>
    <Navbar/>
      {/* <h1>{categoryName}</h1> */}
      <h1 className="text-6xl font-bold text-center p-8 mb-2 relative mt-4">
          {categoryName}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 h-2 w-16 bg-gray-300"></div>
        </h1>
      <div className="min-h-screen bg-grey-100 p-6">
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

 {showThankYou && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-4">Thank you for contacting us. We will get back to you soon.</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowThankYou(false)}
        >
          Close
        </button>
      </div>
    </div>
  )}
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
};

export default CategoryPage;
