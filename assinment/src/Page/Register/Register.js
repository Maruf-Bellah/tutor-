import React, { useRef } from 'react';
import './Register.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocilalLogin from '../Login/SocialLogin/SocilalLogin';
import pic from './postattendee-demo.gif';



const Register = () => {


     const emailRef = useRef('');
     const passwordRef = useRef('');

     const [
          createUserWithEmailAndPassword,
          user,

     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
     const navigate = useNavigate()


     if (user) {
          navigate('/home')
     }




     const handleSubmitRegister = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          createUserWithEmailAndPassword(email, password);
     }


     return (

          <div className='py-5'>
               <Row className='container mx-auto register'>
                    <h2 style={{ fontWeight: 'bold' }} className='text-center text-primary mt-5'>Plese Register My Website</h2>

                    <Col md={6}>
                         <div className='w-100 card p-5 shadow-lg'>

                              <Form onSubmit={handleSubmitRegister}>
                                   <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicPassword">

                                        <Form.Control ref={passwordRef} type="password" required placeholder=" Password" />
                                   </Form.Group>
                                   <Form.Group></Form.Group>
                                   <br />



                                   <Button className='w-100 py-2' variant="primary" type="submit"
                                        onClick={() => createUserWithEmailAndPassword()}
                                   >
                                        Register
                                   </Button>
                                   <br />
                                   <span className='mt-1'>If you are Registered</span>
                                   <Link to='/login' className='text-decoration-none'>
                                        <button className='btn btn-link text-decoration-none'>Please Login</button>
                                   </Link>
                              </Form>
                              <SocilalLogin></SocilalLogin>

                         </div>
                    </Col>
                    <Col md={6}>
                         <img className='img-fluid' src={pic} alt="" />
                    </Col>
               </Row>
          </div>

     );
};

export default Register;