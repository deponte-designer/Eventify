import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Navbar onSearchSubmit={handleSearchSubmit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists searchQuery={searchQuery} />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home for unknown routes */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

