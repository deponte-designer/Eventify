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
            // src="https://placehold.co/600x200/000000/FFFFFF/png"
            alt="First slide"
          />
          {/* <ExampleCarouselImage text="First slide" src="https://placehold.co/600x400/000000/FFFFFF/png" /> */}
          <Carousel.Caption className="carousel-caption-custom">
            <h2>Millions of Artist's profiles</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 carousel-img"
            src={Slider2}
            // src="https://placehold.co/600x200/000000/FFFFFF/png"
            alt="Second slide"
          />
          {/* <ExampleCarouselImage text="Second slide" src="https://placehold.co/600x400/000000/FFFFFF/png" /> */}
          <Carousel.Caption  className="carousel-caption-custom">
            <h2>Events for all</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://placehold.co/600x200/000000/FFFFFF/png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}
   

export default Home;