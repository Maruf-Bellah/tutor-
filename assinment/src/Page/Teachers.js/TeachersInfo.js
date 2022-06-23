import React from 'react';
import './TeachersInfo.css'

const TeachersInfo = ({ teacher }) => {
     const { name, paragraph, job, img } = teacher;
     return (
          <div className='card'>
               <div class="">
                    <div class="card-body text-center">
                         <p class="card-text">{paragraph}
                         </p>
                    </div>

                    <div class="mx-auto p-3 text-center">
                         <img className='info' src={img} alt="..." />
                         <h5 class="card-title pt-2">{name}</h5>
                         <h6 class="card-title">{job}</h6>
                    </div>
               </div>
          </div>
     );
};

export default TeachersInfo;