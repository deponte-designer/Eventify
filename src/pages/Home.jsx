// import React, { useEffect, useState } from 'react';
// import { runScript } from '../utils/Api';
// import { useNavigate } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselH from '../components/CarouselH';

import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image, Row, Col, Card } from 'react-bootstrap';
import Slider1 from '../assets/images/slider1-artists.jpg';
import Slider2 from '../assets/images/slider2-events.jpg';
import Album1 from '../assets/images/album-divide.jpg';
import Album2 from '../assets/images/album-adele21.jpg';
import Album3 from '../assets/images/album-dualipa.jpg';
import Album4 from '../assets/images/album-pinkfloyd.jpg';
import { TbCalendarEvent } from "react-icons/tb";
import { BsMusicNote } from "react-icons/bs";
import { RiUser6Fill } from "react-icons/ri";

function Home() {
  return (

    <div className="bg-home">
      <Carousel className="carousel-custom">  {/*property: fade */}

        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slider1}
            alt="First slide"
          />
          <Container className="carousel-content">
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Millions of Artists</h2>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slider2}
            alt="Second slide"
          />
          <Container className="carousel-content">
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Events for all</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      </Carousel>


      <section className="home-offers pb-5 pt-5">
        <Container>
          <Row className="">
            <Col md={6} className="">
              <Row className="">
                <Col md={6} className="pt-3 pb-3">
                  <Image src={Album1} rounded className="img-fluid home-albums" alt="Album 1" />
                </Col>
                <Col md={6} className="pt-3 pb-3">
                  <Image src={Album2} rounded className="img-fluid home-albums" alt="Album 2" />
                </Col>
              </Row>

              <Row className="">
                <Col md={6} className="pt-3 pb-3">
                  <Image src={Album3} rounded className="img-fluid home-albums" alt="Album 3" />
                </Col>
                <Col md={6} className="pt-3 pb-3 mb-4">
                  <Image src={Album4} rounded className="img-fluid home-albums" alt="Album 4" />
                </Col>
              </Row>
            </Col>
            <Col md={6} className="offers-text-custom">
              <h2 className="pb-3">What does Eventify offer?</h2>
              <Row className="align-items-center">
                <Col xs={1} className="offers-icon"><RiUser6Fill className="icon" style={{ fontSize: '25pt' }} /></Col>
                <Col><h3>Artists Profiles</h3></Col>
              </Row>
              <p>Eventify boasts millions of artists. Search for your favourites, discover new music, and compile your favourites in one place.</p>
              <Row className="align-items-center">
                <Col xs={1} className="offers-icon"><BsMusicNote className="icon" style={{ fontSize: '25pt' }} /></Col>
                <Col><h3>Playlists</h3></Col>
              </Row>
              <p>Explore curated playlists and stay up-to-date with the latest trends in the Top 5 Albums.</p>
              <Row className="align-items-center">
                <Col xs={1} className="offers-icon"><TbCalendarEvent className="icon" style={{ fontSize: '25pt' }} /></Col>
                <Col><h3>Upcoming Events</h3></Col>
              </Row>
              <p>Discover events for every occasion and secure your tickets. All curated by music enthusiasts and experts.</p>
            </Col>
          </Row>
        </Container>
      </section>



    </div>
  );
}


export default Home;