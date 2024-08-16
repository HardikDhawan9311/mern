import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componets/HomePage/Home';
import About from './Componets/HomePage/About_us/About';
//import Contactus from './Componets/HomePage/Contact_us/Contactus';
import Contact from './Componets/HomePage/Contact_us/Contact';
import API from './Api';
import Products1 from './Poducts1';
import ChatbotButton from './Componets/chatbot/Chatbutton';
import AdminApp from './AdminApp'
import CategoryPage from './products/categories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/product" element={<API />} />
        <Route  path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/products/:id" element={<Products1 />} />
        <Route path='/AdminApp' element={<AdminApp/>}/>
      </Routes>
      <ChatbotButton/>
    </Router>
  
  );
}

export default App;
