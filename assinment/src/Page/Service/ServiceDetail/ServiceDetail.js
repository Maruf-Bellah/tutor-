import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    
     const {serviceId} = useParams();
   
   
     return (
          <div>
               <h4>This is Service Details{serviceId}</h4>
               <p>{serviceId}</p>
          </div>
     );
};

export default ServiceDetail;