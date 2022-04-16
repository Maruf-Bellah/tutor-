import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
     return (
          <div className=''>
               <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://www.tricentis.com/wp-content/uploads/2019/01/technology-background-header-1120x389.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://www.tricentis.com/wp-content/uploads/2019/01/technology-background-header-1120x389.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://www.tricentis.com/wp-content/uploads/2019/01/technology-background-header-1120x389.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
     );
};

export default Slider;