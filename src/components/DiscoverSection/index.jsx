import React, { useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import Holder from 'holderjs';
// import './style.css';
import EventCard from '../EventCard';


const DiscoverSection = ({ artistData }) => {


  // Check if artistData and ticketmaster data exist
  if (!artistData || !artistData.ticketmaster) {
    return null;
  };

  console.log("DISCOVER SECTION: ")
  console.log(artistData.ticketmaster)
  console.log(artistData.ticketmaster._embedded.events[0].name)

  const eventName = artistData.ticketmaster._embedded.events[0].name;
  const eventImg = artistData.ticketmaster._embedded.events[0].images[0].url;

  const discoverBorder = {
    border: "2px solid yellow",
  }


  return (

    <div className="discover-section-container" style={discoverBorder}>
      <h2>Discover</h2>
      <h4>Upcoming Events</h4>
      <EventCard eventImg={eventImg} eventName={eventName} />

    </div>
  );
};

export default DiscoverSection;
