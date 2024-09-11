import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        username: formData.firstName,
        email: formData.email,
        phone_number: formData.phone,
        company: formData.company,
        message: formData.message
      };
      setSubmitted(true);
      console.log('Submitting form data:', requestData); // Log form data for debugging

      // Send form data to the backend
      await axios.post('http://localhost:8080/users', requestData);

      // Send confirmation email using Nodemailer
      await axios.post('http://localhost:5000/send-email', {
        to: requestData.email,
        subject: 'Your Form Submission',
        text:` Thank you for your submission, ${requestData.username}\n Your query: ${requestData.message}`
      });

      // Send email to your account with all form data
      await axios.post('http://localhost:5000/send-email', {
        to: 'arshdeepsinghgaidu725@gmail.com',
        subject: 'New Form Submission',
        text: `
          New submission received with the following details:
          Name: ${requestData.username}
          Email: ${requestData.email}
          Phone Number: ${requestData.phone_number}
          Company: ${requestData.company}
          Message: ${requestData.message}
        `
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          phone: '',
          email: '',
          company: '',
          message: ''
        });
      }, 5000);
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      setError('There was an error submitting the form. Please try again.');
    }
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
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="bg-white max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-6 h-full">
          <div className="bg-blue-900 p-10 lg:col-span-2">
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
          <div className="bg-blue-50 p-14 lg:col-span-4">
            <h2 className="mb-14 font-bold text-4xl text-blue-900 relative before:block before:absolute before:bg-sky-300 before:content-[''] before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
              Enter your details
            </h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                    placeholder="Name"
                    name="firstName"
                    value={formData.firstName}
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
              <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13987.204181124724!2d77.27600120000001!3d28.785193500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff0fa36ae7c9%3A0xb2767678a349a48b!2sSdm%20Orthopaedic!5e0!3m2!1sen!2sin!4v1722071985989!5m2!1sen!2sin"
        width="1197"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default ContactUs;