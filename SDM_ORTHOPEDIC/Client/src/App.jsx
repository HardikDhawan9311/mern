import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componets/HomePage/Home';
import About from './Componets/HomePage/About_us/About';
//import Contactus from './Componets/HomePage/Contact_us/Contactus';
import Contact from './Componets/HomePage/Contact_us/Contact';
import API from './Api';
import Products1 from './Poducts1';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/product" element={<API />} />
      
        <Route path="/products/:id" element={<Products1 />} />
      </Routes>
    </Router>
  
  );
}

export default App;
