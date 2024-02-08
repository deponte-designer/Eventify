import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


//.ticketmaster API data  want event/artist name, date, location, url to ticketmaster - button? 
// .ticketmaster._embedded.events[0].start.localDate   -  date of event
// .ticketmaster._embedded.events[0 , url]   -   link to ticketmaster tickets
// .ticketmaster._embedded.events[0 , _]

// console.log(ticketmaster._embedded.events[0].start.localDate)




const EventsSection = ({ artistData }) => {
  // Sample data
  const eventsData = {
    upcomingEvents: [
      { name: 'Concert 1', date: '2024-03-15' },
      { name: 'Festival 1', date: '2024-04-20' },
    ]
  };

  // const { eventDate } = artistData.ticketmaster._embedded.events[0].dates.start.dateTime;
  // const { eventName } = artistData.ticketmaster._embedded.events[0].name;
  // const { ticketmasterURL } = artistData.ticketmaster._embedded.events[0].url;
  // const { eventCity } = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].city.name;
  // const { eventVenue } = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].name;



  return (
    <div className="events-section-container">
      <h2>Events</h2>

      {/* Upcoming events */}
      <div>
        <h3>Upcoming Events</h3>
        <ul>
          {eventsData.upcomingEvents.map((event, index) => (
            <li key={index}>
              {event.name} - {event.date}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};
export default EventsSection;