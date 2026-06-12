import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skill';
import Works from './components/Works/work';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <NavBar /> 
      
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<Skills />} />
        <Route path="/projects" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;