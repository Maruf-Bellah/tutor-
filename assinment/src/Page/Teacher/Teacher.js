import React from 'react';
import { Col, Row } from 'react-bootstrap';
import pic from './about.jpg';
import './Teacher.css'
const Teacher = () => {
     return (
          <div className='container mt-5 pt-4'>
               <Row className='teacher'>
                    <Col md={5}>
                         <img className=' w-100 h-75' src="https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
                    </Col>
                    <Col md={7}>
                         <h3>How to read if you read to me</h3>
                         <p>Here you can read like you want, but you have to spend time here, otherwise you will not understand anything, because I will give you reading here every day, you understand that you will give it to me as soon as possible, then I will give you I will give you something extra to read. If you learn those things, then no one will be able to stop you, so you will read well and understand and take it.</p>
                         <button className='btn btn-primary mt-4'>About Teacher</button>
                    </Col>
               </Row>
          </div>
     );
};

export default Teacher;