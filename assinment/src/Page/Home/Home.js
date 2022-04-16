import React from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
     return (
          <div className='container'>
               <Slider></Slider>
               <Service></Service>
               <Footer></Footer>
          </div>
     );
};

export default Home;