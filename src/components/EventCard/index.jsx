import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FiClock, FiMapPin } from "react-icons/fi";
import { BsMusicNote } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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

                        {props.eventBuyTicket && (<Button variant="outline-success" className="btn-outline-purple" href={props.eventBuyTicket} size="sm" style={{ borderRadius: '1rem' }}>
                            Find Tickets <FaArrowUpRightFromSquare style={{ marginLeft: '5px' }} />
                        </Button>)}


                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default EventCard;
