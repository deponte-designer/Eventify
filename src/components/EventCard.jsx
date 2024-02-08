import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const EventCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            { props.eventImg && <Card.Img variant="top" src={props.eventImg} /> }
            <Card.Body>
                <Card.Title>{props.eventName} Event title ticketmaster._embedded.events/0.name</Card.Title>
                <Card.Text>
                    Event img: ticketmaster._embedded.events/0.images/0.url
                    About the event.. Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    Date: ticketmaster._embedded.events/0.dates.start.localDate

                </Card.Text>
                <Button variant="primary">Buy Tickets</Button>
                <Button variant="primary">Read more</Button>
            </Card.Body>
        </Card>

    );
};
export default EventCard;