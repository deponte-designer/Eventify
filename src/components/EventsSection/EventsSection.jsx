import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './EventsSection.css';

const ticketmasterApiKey = 'qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD';

fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=qAOcJsOSzwjbeqGxkHPjP6svF2rmPQAD')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  //.ticketmaster API data  want event/artist name, date, location, url to ticketmaster - button? 
// .ticketmaster._embedded.events[0 , start.localDate]   -  date of event
// .ticketmaster._embedded.events[0 , url]   -   link to ticketmaster tickets
// .ticketmaster._embedded.events[0 , _embedded[0 , ]  -  link to ticketmaster tickets
// .ticketmaster._embedded.events[0 , _]

const EventsSection = () => {
  // Sample data
  const eventsData = {
    upcomingEvents: [
      { name: 'Concert 1', date: '2024-03-15' },
      { name: 'Festival 1', date: '2024-04-20' },
    ]
  };

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