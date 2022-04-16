

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
     return (
          <div className='w-50 mx-auto'>
               <h4>This is Login</h4>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <button  className='btn-link btn'>
       <Link to='/register'>
       Go to Register 
       </Link>
 </button> <br></br>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>

          </div>
     );
};

export default Login;