import React, { useEffect, useState } from 'react';
import ArtistSection from '../components/ArtistSection';
import DiscoverSection from '../components/DiscoverSection';
import SuggestionsSection from '../components/SuggestionsSection';
import {ModalComponentError, ModalComponentTypo} from '../components/ModalComponent';
import { runScript } from '../utils/Api';
import { useNavigate } from 'react-router-dom';


let Artists = ({ searchQuery }) => {
  let [artistData, setArtistData] = useState(null);
  let [showModal, setShowModal] = useState(false);
  let [showTypoModal, setShowTypoModal] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let fetchArtistData = async () => {
      try {
        let data = await runScript(searchQuery);
        setArtistData(data);
        // Check if artist not found and toggle modal accordingly
        if 
        (data && data.lastfm === "The artist you supplied could not be found") {
          setShowModal(true);
        }
        else if (data && data.typoCheck!==null){
          setShowTypoModal(true);
          }
        } catch (error) {
        console.error('Error fetching artist data:', error);
      }
    };

    if (searchQuery) {
      fetchArtistData();
    }
  }, [searchQuery]);

  let toggleModal = () => {
    setShowModal(!showModal);
  };

  let toggleTypoModal = () => {
    setShowTypoModal(!showTypoModal);
  };

  return (
    <div id="container_div">
      {artistData && artistData.lastfm !== "The artist you supplied could not be found" && (
        <>
          <ArtistSection artistData={artistData} />
          <DiscoverSection artistData={artistData} />
          <SuggestionsSection artistData={artistData} />
        </>
      )}
      
        <ModalComponentError show={showModal} toggleModal={toggleModal} />
      
        <ModalComponentTypo show={showTypoModal} toggleTypoModal={toggleTypoModal} artistName={searchQuery} />
     
    </div>
  );
};

export default Artists;

