import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Slider.css';
import pik1 from './ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg'
// import pik3 from './jurica-koletic-7YVZYZeITc8-unsplash (1).jpg'
 import pik4 from './joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import pik5 from './lucas-lenzi-b5zPZ8_7vhw-unsplash.jpg'
import pik6 from './nicolas-horn-MTZTGvDsHFY-unsplash.jpg' 


const Slider = () => {
     return (
        <div>
          <h2 className='text-primary text-center my-5 py-3'>Successfull Students</h2>
              
      <div className='bg-light container my-5' style={{height: '500px'}}>
        <Carousel>
  <Carousel.Item>
      <div className="slider-img">
      <img
      className="d-block  mx-auto"
      src={pik1}
      alt="First slide"
    />
      </div>
      <div className='text-center line'>
    <h3>Sultana Khondokar</h3>
         <p>I am reading online to this sir in Corona, </p>
         <p>now I am working in a good place, so I have benefited a lot from reading this sir.</p>
    </div>


  </Carousel.Item>

  <Carousel.Item>
      <div className="slider-img">
      <img 
      className="d-block  mx-auto"
      src={pik4}
      alt="Third slide"
    />
      </div>
    <div className='text-center line'>
    <h3>Abrar Khondokar</h3>
         <p>I am reading online to this sir in Corona, </p>
         <p>now I am working in a good place, so I have benefited a lot from reading this sir.</p>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>
      <div className="slider-img">
      <img 
      className="d-block  mx-auto"
      src={pik6}
      alt="fourth slide"
    />
      </div>
    <div className='text-center  line'>
    <h3>Masum Bellah</h3>
         <p >I am reading online to this sir in Corona, </p>
         <p>now I am working in a good place, so I have benefited a lot from reading this sir.</p>
    </div>
   
  </Carousel.Item>
  <Carousel.Item>
      <div className="slider-img">
      <img 
      className="d-block  mx-auto"
      src={pik5}
      alt="fivth slide"
    />
      </div>
    <div className='text-center line'>
    <h3>Maimuna khatun</h3>
         <p >I am reading online to this sir in Corona, </p>
         <p>now I am working in a good place, so I have benefited a lot from reading this sir.</p>
    </div>
   
  </Carousel.Item>
</Carousel>
      </div>
        </div>
     );
};

export default Slider;