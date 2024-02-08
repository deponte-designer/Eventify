import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import Holder from 'holderjs';
import './style.css';
import EventCard from '../EventCard';

// const SuggestionsSection = ({ artistData }) => {
//   // Check if artistData and Last.fm data exist
//   if (!artistData || !artistData.lastfm || !artistData.lastfm.artist|| !artistData.lastfm.artist.similar) {
//     return null;
//   }

//   // Access the similar tags array
//   const similarTags = artistData.lastfm.artist.similar.artist;
//   console.log('similarTags:',similarTags);
//   return (
//     <div className="suggestions-section">
//       <h2>Similar Artists:</h2>
//       <ul>
//         {similarTags.map((tag, index) => (
//           <li key={index}>{tag.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };




const DiscoverSection = ({ artistData }) => {


  // Check if artistData and Last.fm data exist
  if (!artistData || !artistData.ticketmaster) {
    return null;
  };

  console.log("DISCOVER SECTION: ")
  console.log(artistData.ticketmaster)
  console.log(artistData.ticketmaster._embedded.events[0].name)

  const eventName = artistData.ticketmaster._embedded.events[0].name;
  const eventImg = artistData.ticketmaster._embedded.events[0].images[0].url;


  // Sample data
  // const discoverData = {
  //   upcomingEvents: [
  //     { name: 'Concert 1', date: '2024-03-15' },
  //     { name: 'Festival 1', date: '2024-04-20' },
  //   ]

  // };

  return (

    <div className="discover-section-container">
      <h2>Discover</h2>
      <h4>Upcoming Events</h4>
      <EventCard eventImg={eventImg} eventName={eventName}/>
      
      
    </div>
  );
};
export default DiscoverSection;


// <h2>Discover</h2>

// {/* Upcoming events */}
// <div>
//   <h3>Upcoming Events</h3>
//   <ul>
//     {discoverData.upcomingEvents.map((event, index) => (
//       <li key={index}>
//         {event.name} - {event.date}
//       </li>
//     ))}
//   </ul>
// </div>