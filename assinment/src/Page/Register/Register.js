import React from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
     return (
          <div className='w-50 mx-auto'>
               <h4>This is Register</h4>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <h5 className='btn btn-link '>
       <Link  to='/login'>
       Go to Login 
       </Link>
 </h5> <br />
 
  <Button variant="primary" type="submit">
    Register
  </Button>
</Form>

          </div>
     );
};

export default Register;