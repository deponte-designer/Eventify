import React, { useEffect } from 'react';
import EventCard from '../EventCard';
import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';

const DiscoverSection = ({ artistData }) => {
  // Check if artistData and ticketmaster data exist
  if (!artistData || !artistData.ticketmaster || !artistData.ticketmaster._embedded || !artistData.ticketmaster._embedded.events) {
    return null;
  };

  // console.log("DISCOVER SECTION: ")
  // console.log(artistData.ticketmaster)
  // console.log(artistData.ticketmaster._embedded.events[0].name)

  // const { eventDate } = artistData.ticketmaster._embedded.events[0].dates.start.dateTime;
  // const { eventName } = artistData.ticketmaster._embedded.events[0].name;
  // const { ticketmasterURL } = artistData.ticketmaster._embedded.events[0].url;
  // const { eventCity } = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].city.name;
  // const { eventVenue } = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].name;
  // const { location } = artistData.ticketmaster._embedded.events[0]._embedded.venues[0].location.longitude && artistData.ticketmaster._embedded.events[0]._embedded.venues[0].location.latitude;


  // Combined the repeated access to artistData.ticketmaster._embedded.events[0] into a single 'events' variable for better readability
  const events = artistData.ticketmaster._embedded.events;

  const cardFlex = {
    display: "flex",
    // justifyContent: "space-between",
    // justifyContent: "center",
    // flexWrap: "wrap",
  }

  const formatDate = (time, date) => {
    console.log(time.split(":"), date.split("-"));
    const timeFormat = new Date(...date.split("-"), ...time.split(":")).toTimeString()
    console.log(timeFormat);
    const timeFormat2 = new Date(...date.split("-"), ...time.split(":")).toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })
    console.log(timeFormat2);

    return timeFormat2;
  }

  return (

    
<Container className="discover-section-container text-center mb-4" >
  {/* <div className="discover-section-container text-center" style={discoverBorder}> */}
    <h3>Discover</h3>
    <h5 className="mb-3" style={{ fontWeight: '200' }}>Upcoming Events</h5>
    <Row className="g-4 events-list" style={cardFlex}>
      {/* Iterate over events and render EventCard for each event */}
      {events.slice(0, 4).map(event => (
        <EventCard xs={12} md={6} lg={4} className="p-3 m-2"
          key={event.id}
          eventImg={event.images && event.images.length > 0 ? event.images[0].url : ''}
          eventName={event.name || ''}
          eventArtists={event._embedded && event._embedded.attractions ? event._embedded.attractions.map(attraction => attraction.name).join(', ') : ''}
          eventDate={event.dates && event.dates.start && event.dates.start.localDate ? `${new Date(event.dates.start.localDate).toDateString()}` : ''}
          eventTime={event.dates && event.dates.start && event.dates.start.localTime ? `${formatDate(event.dates.start.localTime, event.dates.start.localDate)} , Local time` : ''}
          eventAddress={event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? `${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].postalCode}, ${event._embedded.venues[0].name} - ${event._embedded.venues[0].country.countryCode}` : ''}
          eventBuyTicket={event.url || ''}
        // {artistImage && (<img src={artistImage} alt={artist.name} />
        // )}
        />
      ))}
    </Row>
  {/* </div> */}
</Container>

  );

};


export default DiscoverSection;









// <Container className="discover-section-container text-center mb-4" style={discoverBorder}>
// <h3>Discover</h3>
// <h5 style={{ fontWeight: '200' }}>Upcoming Events</h5>
// <Row className="g-4">
//   {events.slice(0, 4).map(event => (
//     <Col key={event.id} sm={12} md={12} className="mb-3">
//       <Card className="h-100 p-3" data-bs-theme="dark" style={{ width: '100%' }}>
//         <Col sm={12} md={3} >
//           {event.images && event.images.length > 0 &&
//             <Card.Img src={event.images[0].url} />
//           }
//         </Col>

//         <Col sm={12} md={3}>
//           <Card.Body>
//             <Card.Title>{event.name || ''}</Card.Title>
//             <Card.Text>
//               <p>{event._embedded && event._embedded.attractions ? event._embedded.attractions.map(attraction => attraction.name).join(', ') : ''}</p>
//               <p>{event.dates && event.dates.start && event.dates.start.localDate ? `${new Date(event.dates.start.localDate).toDateString()}` : ''}</p>
//               <p>{event.dates && event.dates.start && event.dates.start.localTime ? `${formatDate(event.dates.start.localTime, event.dates.start.localDate)} , Local time` : ''}</p>
//               <p>{event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? `${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].postalCode}, ${event._embedded.venues[0].name} - ${event._embedded.venues[0].country.countryCode}` : ''}</p>
//             </Card.Text>
//           </Card.Body>
//         </Col>

//         <Col sm={12} md={3} >
//           {event.url &&
//             <Button href={event.url} target="_blank" rel="noopener noreferrer" variant="outline-success" className="btn-outline-purple">Find Tickets </Button>
//           }
//         </Col>
//       </Card>
//     </Col>
//   ))}
// </Row>
// </Container>