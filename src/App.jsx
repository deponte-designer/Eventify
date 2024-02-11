// import './App.css'
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import * as ReactBootstrap from 'react-bootstrap';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Artists from './pages/Artists';
// import Contact from './pages/Contact';
// import ArtistSection from './components/ArtistSection';
// import SuggestionsSection from './components/SuggestionsSection';
// import DiscoverSection from './components/DiscoverSection';
// import Footer from './components/Footer';
// import ModalComponentError from './components/ModalComponent';
// import { runScript } from './utils/Api';

// const App = () => {
//   const [artistData, setArtistData] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleSearchSubmit = async (searchQuery) => {
//     try {
//       const data = await runScript(searchQuery);
//       setArtistData(data);
//       // Check if artist not found and toggle modal accordingly
//       if (data && data.lastfm === "The artist you supplied could not be found") {
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error('Error fetching artist data:', error);
//     }
//   };

//   const toggleModal = () => {
//     setShowModal(!showModal);
//   };

//   // Log the initial value of showModal
//   console.log("Initial showModal:", showModal);

//   useEffect(() => {
//     console.log("Artist data:", artistData);
//   }, [artistData]);

//   useEffect(() => {
//     console.log("Show modal:", showModal);
//   }, [showModal]);

//   return (
//     <Router>
//       <Navbar onSearchSubmit={handleSearchSubmit} />
//       <div className="app-container">      
//       {/* Conditionally render ArtistSection */}
//       {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
//         <ArtistSection artistData={artistData} />
//       )}
//       {/* Conditionally render DiscoverSection */}
//       {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
//         <DiscoverSection artistData={artistData} />
//       )}
//       {/* Conditionally render SuggestionsSection */}
//       {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
//         <SuggestionsSection artistData={artistData} />
//       )}
//       {/* Modal component */}
//       {showModal && (
//         <ModalComponentError show={showModal} toggleModal={() => setShowModal(false)} />
//       )}
//       {/* this div needs to be moved to Artists page maybe */}
      
//       </div>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/artists" element={<Artists />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };


// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import Footer from './components/Footer';

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

