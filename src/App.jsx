import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
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
    <div className="app-container">
      <Navbar onSearchSubmit={handleSearchSubmit} />
      <ArtistSection artistData={artistData} />
      <EventsSection artistData={artistData} />
      <DiscoverSection artistData={artistData} />
      <SuggestionsSection artistData={artistData}/>
      <Footer />
    </div>
  );
};


export default App;
