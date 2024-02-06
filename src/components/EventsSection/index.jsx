import React from 'react';
import './style.css'; 

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