import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = () => {
     return (
       
               <Row xs={1} md={2} className="g-4 mt-5">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Link to='/checkout'>
      <button className='btn btn-primary '>Go Check Out</button>
      </Link>
    </Col>
  ))}
</Row>
     
     
     )};

export default Service;