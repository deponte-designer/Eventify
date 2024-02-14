import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FiClock, FiMapPin } from "react-icons/fi";
import { BsMusicNote } from "react-icons/bs";

const EventCard = (props) => {
    return (
        <>
            {[
                'Dark',
            ].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '20rem', margin: '20px' }} className="mb-2">
                    {props.eventImg && <Card.Img variant="top" src={props.eventImg} />}
                    <Card.Body>
                        <Card.Title>{props.eventName}</Card.Title>
                        <Card.Text>
                            {/* About the event.. Some quick example text to build on the card title and make up the
                    bulk of the card's content. */}
                            <br />
                            {props.eventArtists && (
                                <>
                                    <BsMusicNote className="icon" style={{ fontSize: '20pt' }} /> Lineup: {props.eventArtists}
                                    <br />
                                </>
                            )}
                            {props.eventDate && props.eventTime && (
                                <>
                                    <FiClock className="icon" style={{ fontSize: '20pt' }} /> Date: {props.eventDate} {props.eventTime}
                                    <br />
                                </>
                            )}
                            {props.eventAddress && (
                                <>
                                    <FiMapPin className="icon" style={{ fontSize: '20pt' }} /> Venue: {props.eventAddress}
                                    <br />
                                </>
                            )}
                        </Card.Text>
                        {/* TODO: Add data to this link */}
                        <Card.Link className="links-style" href="#">More about</Card.Link>{" | "}
                        {props.eventBuyTicket && (<Card.Link variant="primary" as="a" target="_blank" href={props.eventBuyTicket}>Buy Tickets</Card.Link>)}
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default EventCard;
