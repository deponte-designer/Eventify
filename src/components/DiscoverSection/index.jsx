import React from 'react';
import './style.css'; 


const DiscoverSection = () => {
    // Sample data
    const discoverData = {
      upcomingEvents: [
        { name: 'Concert 1', date: '2024-03-15' },
        { name: 'Festival 1', date: '2024-04-20' },
      ]
    };
  
    return (
      <div className="discover-section-container">
        <h2>Discover</h2>
  
        {/* Upcoming events */}
        <div>
          <h3>Upcoming Events</h3>
          <ul>
            {discoverData.upcomingEvents.map((event, index) => (
              <li key={index}>
                {event.name} - {event.date}
              </li>
            ))}
          </ul>
        </div>

      </div>
    );
  };
export default DiscoverSection;