import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/Others/About';
import Service from './pages/Others/Service';
import Contact from './pages/Others/Contact';


export default function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
           <Route path="/services" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
