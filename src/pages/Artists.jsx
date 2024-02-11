import React, { useEffect, useState } from 'react';
import ArtistSection from '../components/ArtistSection';
import DiscoverSection from '../components/DiscoverSection';
import SuggestionsSection from '../components/SuggestionsSection';
import ModalComponentError from '../components/ModalComponent';
import { runScript } from '../utils/Api';
import { useNavigate } from 'react-router-dom';

const Artists = ({ searchQuery }) => {
  const [artistData, setArtistData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtistData = async () => {
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

    if (searchQuery) {
      fetchArtistData();
    }
  }, [searchQuery]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <>
          <ArtistSection artistData={artistData} />
          <DiscoverSection artistData={artistData} />
          <SuggestionsSection artistData={artistData} />
        </>
      )}
      {showModal && (
        <ModalComponentError show={showModal} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default Artists;

