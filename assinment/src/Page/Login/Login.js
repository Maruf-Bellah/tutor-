
import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocilalLogin from './SocialLogin/SocilalLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pic from './postattendee-demo.gif';
import './Login.css';



const Login = () => {
     const emailRef = useRef('');
     const passwordRef = useRef('');
     const navigate = useNavigate()
     const location = useLocation();

     let from = location.state?.from?.pathname || "/home";
     const [
          signInWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useSignInWithEmailAndPassword(auth);

     const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

     const resetPassword = async () => {
          const email = emailRef.current.value;

          // await sendPasswordResetEmail(email);
          // toast('Sent email');
          if (email) {
               await sendPasswordResetEmail(email);
               toast('Sent email');
          }
          else {
               toast('Plese Enter your email')
          }
     }


     if (loading) {
          <Loading></Loading>
     }

     const handleSubmitLogin = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          signInWithEmailAndPassword(email, password);
     }


     if (user) {
          navigate(from, { replace: true })
          // navigate('/home');
     }
     let errorElement;
     if (error) {
          errorElement = <p className='text-danger'>Error: {error.message}</p>
     }

     return (
          <div className='py-5'>
               <Row className='container my-5 d-flex align-items-center mx-auto justify-content-center login'>
                    <h2 style={{ fontWeight: 'bold' }} className='text-center text-primary'>Please Login My Website</h2>
                    <Col md={6} >
                         <div className='w-100 card p-5 shadow-lg'>

                              <Form onSubmit={handleSubmitLogin}>
                                   <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                                   </Form.Group>

                                   <Form.Group className="mb-3 py-2" controlId="formBasicPassword">
                                        <Form.Control ref={passwordRef} type="password" required placeholder="Password" />

                                   </Form.Group>
                                   {errorElement}
                                   <Button className='w-100 py-2' onClick={() => signInWithEmailAndPassword()} variant="primary" type="submit">
                                        Login
                                   </Button>

                                   <div>
                                        <small> <span>  Are you want to read ?</span> </small>
                                        <Link to='/register' className='text-decoration-none'>
                                             <button className='btn btn-link text-decoration-none'><small>Please Regiser</small></button>
                                        </Link>

                                   </div>

                                   <div>
                                        <small>  <span>  Forget your Password?</span> </small>

                                        <button className='btn btn-link text-decoration-none ' onClick={resetPassword}><small>Reset Password</small></button>

                                   </div>
                              </Form>

                              <SocilalLogin></SocilalLogin>
                              <ToastContainer />

                         </div>
                    </Col>
                    <Col md={6}>
                         <img className='img-fluid' src={pic} alt="" />
                    </Col>
               </Row>
          </div>

     );
};

export default Login;