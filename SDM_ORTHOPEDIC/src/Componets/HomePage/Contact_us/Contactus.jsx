<<<<<<< HEAD
import React from 'react'
import Navbar from '../Hero/Navbar'
import Footer from '../Footer'
=======
import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to the backend
    axios.post('http://localhost:8080/users', {
      username: formData.Name,
      email: formData.email,
      phone_number: formData.phone,
      company_name: formData.company,
      message: formData.message
    })
    .then((result) => {
      // Send email using emailjs
      emailjs.send(
        'service_07o5imd',
        'template_ww9g9rb',
        formData,
        'GMj5gPJ63gLPjLadQ'
      ).then((result) => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            Name: '',
            phone: '',
            email: '',
            company: '',
            message: ''
          });
        }, 5000);
      }, (error) => {
        console.error(error.text);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Thank You!</h2>
          <p className="text-gray-600">Thanks for contacting us. We will get back to you soon.</p>
        </div>
      </div>
    );
  }
>>>>>>> 9c874f96c9375342bb4822f48782807bfb76777c

  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="bg-white max-w-4xl mx-auto w-full">
    <div className="grid grid-cols-6 h-full">
      <div className="bg-blue-900 p-10 col-span-2">
        <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Contact Info</h2>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Location Address
          <span className="font-normal text-xs text-blue-300 block">Address: Sector B1, Plot No. E-16, Tronica City Industrial Area Loni, Ghaziabad, Uttar Pradesh - 201103</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Phone Number
          <span className="font-normal text-xs text-blue-300 block">+91 9810648410 ,+91 9354256801</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
          Email Address
          <span className="font-normal text-xs text-blue-300 block">sdmorthopedic@yahoo.com</span>
        </p>

      </div>
      <div className="bg-blue-50 p-14 col-span-4">
        <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Enter your details</h2>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Your Name" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Company Name" ></input>
          </div>
        </div>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Email Address" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-full px-6 placeholder:text-xs" aria-placeholder="Votre nom" placeholder="Subjet" ></input>
          </div>
        </div>
        <div className="mb-6">
          <textarea className="w-full rounded-2xl placeholder:text-xs px-6 py-4" placeholder="Your message " name="" id="" rows="8"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">Submit</button>
        </div>
      </div>
    </div>
</div>
<Footer />
</div>
    </div>
  )
}
=======
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-white max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-6 h-full">
          <div className="bg-blue-900 p-10 col-span-2">
            <h2 className="mb-10 font-bold text-2xl text-blue-100 relative before:block before:absolute before:bg-sky-300 before:content-[''] before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Contact Info
            </h2>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Location Address
              <span className="font-normal text-xs text-blue-300 block">Address: Sector B1, Plot No. E-16, Tronica City Industrial Area Loni, Ghaziabad, Uttar Pradesh - 201103</span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Phone Number
              <span className="font-normal text-xs text-blue-300 block">+91 9810648410 ,+91 9354256801</span>
            </p>
            <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
              Email Address
              <span className="font-normal text-xs text-blue-300 block">sdmorthopedic@yahoo.com</span>
            </p>
          </div>
          <div className="bg-blue-50 p-14 col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-blue-900 relative before:block before:absolute before:bg-sky-300 before:content-[''] before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Enter your details
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-full bg-blue-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
>>>>>>> 9c874f96c9375342bb4822f48782807bfb76777c