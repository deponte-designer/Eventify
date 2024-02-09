import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootstrap from 'react-bootstrap';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import ArtistSection from './components/ArtistSection';
import EventsSection from './components/EventsSection/EventsSection';
import SuggestionsSection from './components/SuggestionsSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';
import { runScript } from './utils/Api';

const App = () => {
  const [artistData, setArtistData] = useState(null);

  const handleSearchSubmit = async (searchQuery) => {
    try {
      const data = await runScript(searchQuery);
      setArtistData(data);
    } catch (error) {
      console.error('Error fetching artist data:', error);
    }
  };
  return (
    <Router>
      <Navbar onSearchSubmit={handleSearchSubmit} />
      {/* this div needs to be moved to Artists page maybe */}
      <div className="app-container">
          <ArtistSection artistData={artistData} />
          <EventsSection artistData={artistData} />
          <DiscoverSection artistData={artistData} />
          <SuggestionsSection artistData={artistData} />
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
