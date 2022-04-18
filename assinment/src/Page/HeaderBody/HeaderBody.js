import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeaderBody.css';
 import pic1 from './slider-4.jpg';
import pic2 from './slider-2.jpg';
import pic3 from './slider-1.jpg';
import { Link } from 'react-router-dom';


const HeaderBody = () => {
     return (
          <div className='header-body '>
               <Carousel>
  <Carousel.Item>
    <img style={{height: '600px'}}
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption  className='text d-none d-md-block'>
      <h1  style={{fontWeight: 'bold'}}>Thank you for visiting <br></br> my Tutor's website</h1>
      <p>
      I am a teacher, if you are a student then you are coming to the right place, then visit my web site and if you like it, you can get admitted without delay, if you want you can study at home and online again.
      </p>
      <Link to='/about'>
      <button style={{fontWeight: 'bold'}} className='btn btn-primary py-2 px-3'>Read more ..</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '600px'}}
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption className='text  d-none d-md-block'>
    <h1  style={{fontWeight: 'bold'}}>Thank you for visiting <br></br> my Tutor's website</h1>
      <p>
      I am a teacher, if you are a student then you are coming to the right place, then visit my web site and if you like it, you can get admitted without delay, if you want you can study at home and online again.
      </p>
      <Link to='/about'>
      <button style={{fontWeight: 'bold'}} className='btn btn-primary py-2 px-3'>Read more ..</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '600px'}}
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption className='text  d-none d-md-block'>
    <h1  style={{fontWeight: 'bold'}}>Thank you for visiting <br></br> my Tutor's website</h1>
      <p>
      I am a teacher, if you are a student then you are coming to the right place, then visit my web site and if you like it, you can get admitted without delay, if you want you can study at home and online again.
      </p>
      <Link to='/about'>
      <button style={{fontWeight: 'bold'}} className='btn btn-primary py-2 px-3'>Read more ..</button>
      </Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>
     );
};

export default HeaderBody;