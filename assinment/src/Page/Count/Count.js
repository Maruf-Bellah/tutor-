import React from 'react';
import CountUp from 'react-countup';
import one from './img/3.webp';
import two from './img/images.png';
import three from './img/book.webp';
import four from './img/men-icon.png';

const Count = () => {
     return (
          <div class="container py-5">
               <div class="row text-center">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                         <div className='text-center'>
                              <img className='w-25 h-12 mb-3' src={three} alt="" />
                              <h1 className='text-primary' style={{ fontWeight: 'bold' }}>
                                   <CountUp start={200} end={999} prefix='$' duration={6} />
                              </h1>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                         <div className='text-center'>
                              <img className='w-25 h-25 mb-3' src={one} alt="" />
                              <h1 className='text-primary' style={{ fontWeight: 'bold' }}>
                                   <CountUp start={200} end={980} prefix='$' duration={6} />
                              </h1>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                         <div className='text-center'>
                              <img className='w-25 h-12 mb-2' src={four} alt="" />
                              <h1 className='text-primary' style={{ fontWeight: 'bold' }}>
                                   <CountUp start={200} end={970} prefix='$' duration={6} />
                              </h1>
                         </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-3">
                         <div className='text-center'>
                              <img className='w-25 h-12 mb-3' src={two} alt="" />
                              <h1 className='text-primary' style={{ fontWeight: 'bold' }}>
                                   <CountUp start={200} end={987} prefix='$' duration={6} />
                              </h1>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Count;