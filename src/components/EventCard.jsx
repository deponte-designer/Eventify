import React, { useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
// import { FiUser } from "react-icons/fi";
import { FiClock, FiMapPin } from "react-icons/fi";
import { BsMusicNote } from "react-icons/bs";
// import Placeholder from 'react-bootstrap/Placeholder';

const EventCard = (props) => {
    return (
        <Card style={{ width: '20rem' }}>
            {props.eventImg && <Card.Img variant="top" src={props.eventImg} />}
            <Card.Body>
                <Card.Title>{props.eventName}</Card.Title>
                <Card.Text>
                    About the event.. Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    <br />
                    {/* <FiUser /> */}
                    <BsMusicNote className="icon" style={{ fontSize: '20pt' }} /> Lienup: {props.eventArtists}
                    <br />
                    <FiClock className="icon" style={{ fontSize: '20pt' }} /> Date: {props.eventDate} {props.eventTime}
                    <br />
                    <FiMapPin className="icon" style={{ fontSize: '20pt' }} /> Venue: {props.eventAddress}
                </Card.Text>
                {/* TODO: Add data to this link */}
                <Card.Link className="links-style" href="#">More about</Card.Link>
                <Button variant="primary" as="a" target="_blank" href={props.eventBuyTicket}>Buy Tickets</Button>
            </Card.Body>
        </Card>

    );
};
export default EventCard;