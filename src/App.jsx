import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ArtistSection from './components/ArtistSection';
import EventsSection from './components/EventsSection';
import SuggestionsSection from './components/SuggestionsSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';
import { LastFMApi } from './utils/API'


const App = () => {

  useEffect(function () {
    // Last FM API Test
    // BandsInTown API test


   
    LastFMApi()

  }, []);
  

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




export default App;
