import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Slider.css';
import pik1 from './ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg'
import pik2 from './lucas-lenzi-b5zPZ8_7vhw-unsplash.jpg'
import pik3 from './jeswin-thomas-wRdYnqXtyYk-unsplash.jpg'
 import pik4 from './joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import pik5 from './lucas-lenzi-b5zPZ8_7vhw-unsplash.jpg'
import pik6 from './nicolas-horn-MTZTGvDsHFY-unsplash.jpg' 


const Slider = () => {
     return (
        <div>
          <h2 className='text-primary text-center mt-4'>successfull students</h2>
              
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
     <div className='text-center'>
       <h3>first slide label</h3>
         <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
    <div className='text-center'>
    <h3>Third slide label</h3>
      <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  
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
    <div className='text-center'>
    <h3>fourth slide label</h3>
      <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  
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
    <div className='text-center'>
    <h3>fivth slide label</h3>
      <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  
    </div>
   
  </Carousel.Item>
</Carousel>
      </div>
        </div>
     );
};

export default Slider;