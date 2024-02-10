// function Home() {
//     // Body
//     return <div>This is home page</div>
// }

// export default Home;


import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './components/ExampleCarouselImage';


function Home() {
  return (
    <div> This is home page
    <Carousel fade>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://placehold.co/600x200/000000/FFFFFF/png"
          alt="First slide"
        />
        {/* <ExampleCarouselImage text="First slide" src="https://placehold.co/600x400/000000/FFFFFF/png" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://placehold.co/600x200/000000/FFFFFF/png"
          alt="Second slide"
        />
        {/* <ExampleCarouselImage text="Second slide" src="https://placehold.co/600x400/000000/FFFFFF/png" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://placehold.co/600x200/000000/FFFFFF/png"
          alt="Second slide"
        />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;