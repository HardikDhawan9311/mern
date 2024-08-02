import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componets/HomePage/Home';
import About from './Componets/HomePage/About_us/About';
//import Contactus from './Componets/HomePage/Contact_us/Contactus';
import Contact from './Componets/HomePage/Contact_us/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" exact component={Api} />
        <Route path="/product/:id" component={Product} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
