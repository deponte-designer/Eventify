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

  // Combined the repeated access to artistData.ticketmaster._embedded.events[0] into a single 'events' variable for better readability
  const events = artistData.ticketmaster._embedded.events;

  const discoverBorder = {
    border: "2px solid yellow",
  }

  const cardFlex = {
    display: "flex",
    justifyContent: "space-between",
  }

  return (
    <div className="discover-section-container" style={discoverBorder}>
      <h2>Discover</h2>
      <h4>Upcoming Events</h4>
      <div style={cardFlex}>
      {/* Iterate over events and render EventCard for each event */}
      {events.slice(0, 4).map(event => (
        <EventCard 
          key={event.id}  
          eventImg={event.images[0].url} 
          eventName={event.name} 
          eventArtists={event._embedded.attractions.map(attraction => attraction.name).join(', ')}
          eventDate={event.dates.start.localDate}
          eventTime={event.dates.start.localTime + ', Local time'}
          eventAddress={`${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].postalCode}, ${event._embedded.venues[0].state.name} - ${event._embedded.venues[0].country.countryCode}`} 
          eventBuyTicket={event.url} 
          
        />
      ))}
      </div>
    </div>
  );
};

export default DiscoverSection;














// * HOW I DID IT BEFORE! ---->>>>>>>>>>>>>>>>>>>>>>>>>>>

// // Combined the repeated access to artistData.ticketmaster._embedded.events[0] into a single 'event' variable for better readability
// const event = artistData.ticketmaster._embedded.events[0];

// const eventName = event.name;
// const eventImg = event.images[0].url;
// const eventDate = event.dates.start.localDate;
// const eventTime = event.dates.start.localTime + ', Local time';
// const eventArtists = event._embedded.attractions.map(attraction => attraction.name).join(', ');
// const eventBuyTicket = event.url;

// // Combined the repeated access to artistData.ticketmaster._embedded.events[0]._embedded.venues[0]
// const venue = event._embedded.venues[0];
// const eventAddress = `${venue.address.line1}, ${venue.city.name}, ${venue.postalCode}, ${venue.state.name} - ${venue.country.countryCode}`;


// const discoverBorder = {
//   border: "2px solid yellow",
// }

// // TODO: create a function to go through the array artistData.ticketmaster._embedded.events[] and if exists more than 1 in the array, add a new card with the information of the event, and add maximum 4 <EventCard />

// return (
//   <div className="discover-section-container" style={discoverBorder}>
//     <h2>Discover</h2>
//     <h4>Upcoming Events</h4>
//     <EventCard 
//     eventImg={eventImg} 
//     eventName={eventName} 
//     eventArtists={eventArtists}
//     eventDate={eventDate}
//     eventTime={eventTime}
//     eventAddress={eventAddress} 
//     eventBuyTicket={eventBuyTicket} />
//   </div>
// );
// };

// export default DiscoverSection;