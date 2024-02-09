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
  const eventDate = artistData.ticketmaster._embedded.events[0].dates.start.localDate;
  const eventTime = artistData.ticketmaster._embedded.events[0].dates.start.localTime;
  // artists attractions of the event 
  // TODO: create a function to go through the array attractions[0], and if exists show all the names separated by a comma
  const eventAtractions1 = artistData.ticketmaster._embedded.events[0]._embedded.attractions[0].name;  
  const eventAtractions2 = artistData.ticketmaster._embedded.events[0]._embedded.attractions[1].name;
  const eventAddressLine1 = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].address.line1;
  const eventCity = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].city.name;
  const eventPostalCode = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].postalCode;
  const eventCountryCode = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].country.countryCode;

  const discoverBorder = {
    border: "2px solid yellow",
  }

  // TODO: create a function to go through the array events[0] and if exists more than 1 in the array, add a new card with the information of the event, and show maximum 4 card events

  return (
    <div className="discover-section-container" style={discoverBorder}>
      <h2>Discover</h2>
      <h4>Upcoming Events</h4>
      <EventCard 
      eventImg={eventImg} 
      eventName={eventName} 
      eventArtists={eventAtractions1 + ", " + eventAtractions2}
      eventDate={eventDate}
      eventTime={eventTime}
       />
    </div>
  );
};

export default DiscoverSection;
