import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default DiscoverSection;