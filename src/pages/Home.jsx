// import React, { useEffect, useState } from 'react';
// import { runScript } from '../utils/Api';
// import { useNavigate } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselH from '../components/CarouselH';

import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import Slider1 from '../assets/images/slider1-artists.jpg';
import Slider2 from '../assets/images/slider2-events.jpg';


function Home() {
  return (
    <div className="bg-home">
      <Carousel fade className="carousel-custom">
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slider1}
            alt="First slide"
          />
          <Container className="carousel-content">
            <Carousel.Caption className="carousel-caption-custom">
              <h2>Millions of Artist's profiles</h2>
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
    </div>
  );
}


export default Home;