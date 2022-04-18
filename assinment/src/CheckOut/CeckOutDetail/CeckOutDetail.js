import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './CeckOutDetail.css';


const CeckOutDetail = ({ student }) => {
     const {home,mobile, name, img, post, people } = student;
     return (
          <div className=' '>

               <div className="card mb-3" >
                    <div className="row g-0">
                         <div className="col-md-4">
                              <img src={img} className="img-fluid rounded-start" alt="..." />
                         </div>
                         <div className="col-md-8">
                              <div className="card-body">
                                   <h5 className="card-title">{name}</h5>
                                   <p className="card-text">{post}</p>
                                   <h6>Home : {home}</h6>
                                 
                                   <p className="card-text"><small className="text-muted">Mobile No : {mobile}</small></p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CeckOutDetail;