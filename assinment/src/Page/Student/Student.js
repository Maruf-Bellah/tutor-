import React, { createContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Student.css';
export const DetailsContext = createContext('');

const Student = ({ student }) => {


     const { people, post, img, home, mobile } = student;

     const navigate = useNavigate();



     const navigatServieDetails = (img) => {
          navigate(`/service/${img}`)
     }
     return (
          <div className=''>
               <DetailsContext.Provider value='maruf'>
                    <div className="student">
                         <img src={img} alt="" />
                         <div className="student-info">
                              <h4>{people}</h4>
                              {/* <h6>Home: {home}</h6>
                              <h6>Mobile: {mobile}</h6> */}
                              <p className='text-justify'>{post.slice(0, 223)}</p>
                              {/* <button onClick={() => navigatServieDetails(img) }>Details</button> */}

                              <Link to='/checkout'>
                                   <button style={{ fontWeight: 'bold' }} className='btn btn-primary '>Go Check Out</button>
                              </Link>
                         </div>
                    </div>
               </DetailsContext.Provider>
          </div>
     );
};

export default Student;

