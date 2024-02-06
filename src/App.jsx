import './App.css'
import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import ArtistSection from './components/ArtistSection';
import EventsSection from './components/EventsSection';
import SuggestionsSection from './components/SuggestionsSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';
import { BandsInTownApi, LastFMApi } from './utils/API'


const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <ArtistSection />
      <EventsSection />
      <DiscoverSection />
      <SuggestionsSection />
      <Footer />
    </div>
  );
};

  
  useEffect(function () {
    // Last FM API Test
    // BandsInTown API test

    BandsInTownApi()
    LastFMApi()

  }, [])

    

export default App;
