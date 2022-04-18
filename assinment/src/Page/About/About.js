import React from 'react';
import {Col, Row } from 'react-bootstrap';
import pic from './268045983_318359796863863_1466584361786568245_n.png'

const About = () => {
     return (
          <div className='container ' >
               <Row className='d-flex align-items-center'>
                    <Col md={6}>
                         <h2>About me...........</h2>
                         <h5>I'm bringing a target here that I have to be a good web developer, for this I have left out a lot, and the rest of the months I want to spend these days with the mind, and in these months I have some things that I will complete the shots, and I want to finish the class one time in a few days like this, there are many more targets, I will shoot them slowly Inshallahu Tayala ..... and everyone will pray for me so that I can stay till the last. .......</h5>
                    </Col>
                    <Col md={6}>
                         <img className='img-fluid' src={pic} alt="" />
                    </Col>
               </Row>
          </div>
     );
};

export default About;