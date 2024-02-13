import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image, Row, Col, Card } from 'react-bootstrap';
import Slider1 from '../assets/images/slider1-artists.jpg';
import Slider2 from '../assets/images/slider2-events.jpg';


// function CarouselHome() {
//     return (
//     //   <div>
//         <Carousel className="carousel-custom">  {/*property: fade */}
  
//           <Carousel.Item>
//             <Image
//               className="d-block w-100 carousel-img"
//               src={Slider1}
//               alt="First slide"
//             />
//             <Container className="carousel-content">
//               <Carousel.Caption className="carousel-caption-custom">
//                 <h2>Millions of Artists</h2>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//             </Container>
//           </Carousel.Item>
  
//           <Carousel.Item>
//             <Image
//               className="d-block w-100 carousel-img"
//               src={Slider2}
//               alt="Second slide"
//             />
//             <Container className="carousel-content">
//               <Carousel.Caption className="carousel-caption-custom">
//                 <h2>Events for all</h2>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </Carousel.Caption>
//             </Container>
//           </Carousel.Item>
//         </Carousel>
//         // </div>
//   );
// }

//  export default CarouselHome;