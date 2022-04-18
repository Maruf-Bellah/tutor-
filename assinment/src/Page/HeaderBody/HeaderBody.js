import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeaderBody.css';
 import pic1 from './slider-4.jpg';
import pic2 from './slider-2.jpg';
import pic3 from './slider-1.jpg';


const HeaderBody = () => {
     return (
          <div className='header-body'>
               <Carousel>
  <Carousel.Item>
    <img style={{height: '500px'}}
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Wellcome to my</h1>
      <h1>Home Totur Website !</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p>Nulla vitae elit libero, a pharetra augue mollis  pharetra augue mollis interdum.</p>
      <button className='btn btn-primary'>Read more ..</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '500px'}}
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1>Wellcome to my</h1>
      <h1>Home Totur Website !</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p>Nulla vitae elit libero, a pharetra augue mollis  pharetra augue mollis interdum.</p>
      <button className='btn btn-primary'>Read more ..</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '500px'}}
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1>Wellcome to my</h1>
      <h1>Home Totur Website !</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <p>Nulla vitae elit libero, a pharetra augue mollis  pharetra augue mollis interdum.</p>
      <button className='btn btn-primary'>Read more ..</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
     );
};

export default HeaderBody;