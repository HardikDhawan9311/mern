// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// function Products1() {
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     productId: ''
//   });

//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [sizes, setSizes] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Product ID:", id);

//     if (id) {
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         productId: id
//       }));

//       const fetchProduct = async () => {
//         try {
//           console.log(`Fetching product with ID: ${id}`);
//           const response = await fetch(`http://localhost:1234/products/${id}`);
//           if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//           }
//           const data = await response.json();
//           console.log("Fetched Product Data:", data);
//           setProduct(data);

//           const sizesResponse = await axios.get(`http://localhost:1234/products/${id}/sizes`);
//           setSizes(sizesResponse.data);
//         } catch (error) {
//           if (error.response && error.response.status === 404) {
//             console.log('No sizes found for this product');
//           } else {
//             console.error('Error fetching product:', error);
//             setError(error);
//           }
//         }
//       };

//       fetchProduct();
//     }
//   }, [id]);

//   if (error) {
//     return <div>Error fetching product: {error.message}</div>;
//   }

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const availableImages = [
//     product.image1,
//     product.image2,
//     product.image3,
//   ].filter(Boolean);

//   const options = {
//     items: 1,
//     nav: false,
//     rewind: true,
//     autoplay: true,
    
    
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData); // Debugging

//     try {
//       await axios.post('http://localhost:1234/send-email', formData);
//       alert('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       alert('Error sending email');
//     }
//     setShowForm(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
//         <div className="md:col-span-4 lg:col-span-4">
//           <OwlCarousel className='owl-theme' {...options} >
//             {availableImages.map((image, index) => (
//               <div key={index}>
//                 <img 
//                   src={image} 
//                   alt={`img${index + 1}`} 
//                   className="object-cover mt-20 border-solid border-4 border-sky-500 rounded-lg shadow-md " 
//                   style={{ width: '350px', height: '350px'}}
//                 />
//               </div>
//             ))}
//           </OwlCarousel>
//         </div>

//         <div className="md:col-span-8 lg:col-span-8 flex flex-col items-start justify-center text-left">
//           <h1 className="text-6xl font-bold ml-10">{product.product_name}</h1>
//           <div className="mt-4"><br/>
//             <button
//               className="py-2 px-4 bg-green-600 ml-60 text-white rounded-full hover:bg-green-500 transition duration-200"
//               onClick={() => setShowForm(true)}
//             >
//               Get a quotation
//             </button><br/>
//           </div>
//           <div className="mt-6 bg-white p-4 rounded-xl shadow-lg w-full">
//             <h2 className="text-2xl font-serif font-bold mb-4">Information</h2>
//             <div className="border-2 border-gray-300 p-4">
//               <p className='text-xl font-serif'>{product.product_info}</p>
//             </div>
//           </div>
//         </div>
//         {sizes.length > 0 && (
//         <div className="md:col-span-12 flex justify-center mt-6">
//           <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-4 rounded-xl shadow-lg">
//           <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
//              <thead>
//               <tr>
//                 <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
//                    Sizes available
//                     </th>
//                     </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                        {sizes.map((size, index) => (
//                          <tr key={index}>
//                            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{size.product_size}</td>
//                             </tr>
//                            ))}
//                             </tbody>
//                             </table>
//                             </div>
//                             </div>

//                           )}

//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl mb-4">Get a Quote</h2>
//               <form onSubmit={handleFormSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleFormChange}
//                     className="w-full px-3 py-2 border rounded"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleFormChange}
//                     className="w-full px-3 py-2 border rounded"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Phone No</label>
//                   <input
//                     type="text"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleFormChange}
//                     className="w-full px-3 py-2 border rounded"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700">Product ID</label>
//                   <input
//                     type="text"
//                     name="productId"
//                     value={formData.productId}
//                     readOnly
//                     className="w-full px-3 py-2 border rounded bg-gray-100"
//                   />
//                 </div>
//                 <div className="flex justify-end">
//                   <button
//                     type="button"
//                     className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                     onClick={() => setShowForm(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Products1;





import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Products1() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productId: ''
  });

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Product ID:", id);

    if (id) {
      setFormData(prevFormData => ({
        ...prevFormData,
        productId: id
      }));

      const fetchProduct = async () => {
        try {
          console.log(`Fetching product with ID: ${id}`);
          const response = await fetch(`http://localhost:1234/products/${id}`);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
          }
          const data = await response.json();
          console.log("Fetched Product Data:", data);
          setProduct(data);

          const sizesResponse = await axios.get(`http://localhost:1234/products/${id}/sizes`);
          setSizes(sizesResponse.data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log('No sizes found for this product');
          } else {
            console.error('Error fetching product:', error);
            setError(error);
          }
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>Error fetching product: {error.message}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const availableImages = [
    product.image1,
    product.image2,
    product.image3,
  ].filter(Boolean);

  const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
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
    <div className="min-h-screen bg-white-100 p-6 flex flex-col items-center">
      <div>
          <h1 className="text-6xl text-center font-bold">{product.product_name}</h1>
          </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 lg:col-span-4">
          <OwlCarousel className='owl-theme' {...options} >
            {availableImages.map((image, index) => (
              <div key={index}>
                <img 
                  src={image} 
                  alt={`img${index + 1}`} 
                  className="object-cover mt-20 border-solid border-3 rounded-lg shadow-md " 
                  style={{ width: '450px', height: '450px'}}
                />
              </div>
            ))}
          </OwlCarousel>
        </div>

        <div className="md:col-span-8 lg:col-span-8 flex flex-col items-start justify-center text-left">
          <div className="mt-6 bg-white p-4 rounded-xl shadow-lg w-full ">
            <h2 className="text-2xl font-bold mb-4">Information</h2>
            <div className="border-2 border-gray-300 p-4">
              <p>{product.product_info}</p>
            </div>
         
          <div className="mt-4 flex justify-center">
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition duration-200"
              onClick={() => setShowForm(true)}
            >
              Request a Quote
            </button>
          </div>
          </div>
        </div>
       

        {sizes.length > 0 && (
          <div className="md:col-span-12 flex justify-center mt-6">
            <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-4 rounded-xl shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                      Sizes Available
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sizes.map((size, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">{size.product_size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products1;
