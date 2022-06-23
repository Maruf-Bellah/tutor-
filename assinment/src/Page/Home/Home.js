import React from 'react';
import Count from '../Count/Count';


import HeaderBody from '../HeaderBody/HeaderBody';
import Service from '../Service/Service';
import Slider from '../Slider/Slider';
import Teacher from '../Teacher/Teacher';
import Teachers from '../Teachers.js/Teachers';

const Home = () => {
     return (
          <div className=''>
               <HeaderBody></HeaderBody>
               <Count></Count>
               <Teacher></Teacher>
               <Service></Service>
               <Slider></Slider>
               <Teachers></Teachers>

          </div>
     );
};

export default Home;