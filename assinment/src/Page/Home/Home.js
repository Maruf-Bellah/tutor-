import React from 'react';

import HeaderBody from '../HeaderBody/HeaderBody';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';

const Home = () => {
     return (
          <div className='container-fluid'>
               <HeaderBody></HeaderBody>
               <Service></Service>
               <Slider></Slider>
          
          </div>
     );
};

export default Home;