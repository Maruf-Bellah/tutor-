import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pic from './about.jpg';
import './Teacher.css'
const Teacher = () => {
     return (
          <div className=' px-3 mt-5 pt-4'>
               <Row className='teacher '>
                    <Col md={6}>
                         <img className=' w-100 h-75 rounded' src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                    </Col>
                    <Col md={6}>
                         <h3 style={{ fontWeight: 'bold' }} className="text-primary">How to read if you read to me</h3>
                         <p className='text-justify p-2'>Here you can read like you want, but you have to spend time here, otherwise you will not understand anything, because I will give you reading here every day, you understand that you will give it to me as soon as possible, then I will give you I will  but you have to spend time here, otherwise you will not understand anything, because I will give you reading here every day, you understand that you will give it to me as soon as possible, then I will give you I will read well and understand and take it.will give you reading soon as possible, then I will give you I will read well and understand and take it this is too much i don't know</p>

                         <Link to='/about'>

                              <button style={{ fontWeight: 'bold' }} className='btn btn-primary mt-3'>About Teacher</button>

                         </Link>
                    </Col>
               </Row>
          </div>
     );
};

export default Teacher;