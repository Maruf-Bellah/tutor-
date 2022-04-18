import React, { createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Student.css';
 export const DetailsContext = createContext('');

const Student = ({student}) => {
     const {people, post , img} = student;

     const navigate = useNavigate();

   

     const navigatServieDetails =(img) =>{
          navigate(`/service/${img}`)
     }
     return (
          <div className='container'>
              <DetailsContext.Provider value='maruf'>
              <div className="student">
                    <img src={img} alt="" />
                    <div className="student-info">
                    <h4>{people}</h4>
                    <p>{post}</p>
                    {/* <button onClick={() => navigatServieDetails(img) }>Details</button> */}

                    <Link to='/checkout'>
                         <button className='btn btn-primary '>Go Check Out</button>
                    </Link>
                    </div>
               </div>
              </DetailsContext.Provider>
          </div>
     );
};

export default Student;

