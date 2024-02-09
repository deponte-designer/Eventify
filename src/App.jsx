import './App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ArtistSection from './components/ArtistSection';
import EventsSection from './components/EventsSection';
import SuggestionsSection from './components/SuggestionsSection';
import DiscoverSection from './components/DiscoverSection';
import Footer from './components/Footer';
import ModalComponentError from './components/ModalComponent';
import { runScript } from './utils/Api';

const App = () => {
  const [artistData, setArtistData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearchSubmit = async (searchQuery) => {
    try {
      const data = await runScript(searchQuery);
      setArtistData(data);
      // Check if artist not found and toggle modal accordingly
      if (data && data.lastfm === "The artist you supplied could not be found") {
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error fetching artist data:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Log the initial value of showModal
  console.log("Initial showModal:", showModal);

  useEffect(() => {
    console.log("Artist data:", artistData);
  }, [artistData]);

  useEffect(() => {
    console.log("Show modal:", showModal);
  }, [showModal]);

  return (
    <div className="app-container">
      <Navbar onSearchSubmit={handleSearchSubmit} />
      {/* Conditionally render ArtistSection */}
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <ArtistSection artistData={artistData} />
      )}
      {/* Conditionally render EventsSection */}
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <EventsSection artistData={artistData} />
      )}
      {/* Conditionally render DiscoverSection */}
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <DiscoverSection artistData={artistData} />
      )}
      {/* Conditionally render SuggestionsSection */}
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <SuggestionsSection artistData={artistData} />
      )}
      <Footer />
      {/* Modal component */}
      {showModal && (
        <ModalComponentError show={showModal} toggleModal={() => setShowModal(false)} />
      )}
    </div>
  );
};


export default App;
