import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  // Updated line
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import AskUsForm from './AskUsForm';
import ContactUs from './ContactUs';
import OurProducts from './OurProducts';
import CrumbRubber from './CrumbRubber';
import Epdm from './Epdm';
import Tyrewire from './Tyrewire';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>  {/* Using HashRouter here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AskUs" element={<AskUsForm />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/OurProducts" element={<OurProducts />} />
        <Route path="/CrumbRubber" element={<CrumbRubber />} />
        <Route path="/Epdm" element={<Epdm />} />
        <Route path="/TyreWire" element={<Tyrewire />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
