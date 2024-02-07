import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ArtistSection from './components/ArtistSection';
import EventsSection from './components/EventsSection';
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
