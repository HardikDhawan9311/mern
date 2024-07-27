import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componets/HomePage/Home';
import About from './Componets/HomePage/About_us/About';
import Contactus from './Componets/HomePage/Contact_us/Contactus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
