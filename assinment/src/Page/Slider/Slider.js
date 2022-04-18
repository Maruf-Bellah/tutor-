import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import pic1 from './Exams-rafiki.png';
import pic2 from './Lesson-rafiki.png';
import pic3 from './Reading glasses.gif';
import './Slider.css'


const Slider = () => {
     return (
      <div className='bg-primary' style={{height: '500px'}}>
        <Carousel>
  <Carousel.Item>
    <img  style={{height: '200px'}}
      className="d-block w-25 mx-auto"
      src="https://secure.gravatar.com/avatar/869616d65d78a6cf40fd39a6ed8a1f07?s=32&d=mm&r=g"
      alt="First slide"
    />
 
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

  </Carousel.Item>
  <Carousel.Item>
    <img  style={{height: '200px'}}
      className="d-block w-25 mt-5  mx-auto"
      src="https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g"
      alt="Second slide"
    />

 
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '200px'}}
      className="d-block w-25 mx-auto"
      src="https://secure.gravatar.com/avatar/75ec18a5bf959aab895830be3a78cb34?s=50&d=mm&r=g"
      alt="Third slide"
    />

      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  
  </Carousel.Item>
</Carousel>
      </div>
     );
};

export default Slider;