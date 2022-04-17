import React, { useRef } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocilalLogin from '../Login/SocialLogin/SocilalLogin';
import Loading from '../Loading/Loading';


const Register = () => {
    

     const emailRef = useRef('');
     const passwordRef = useRef('');

     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
     const navigate = useNavigate()


     if(user) {
         navigate('/home')
        }


        let errorElement;
        if (error) {
            errorElement = <p className='text-danger'>Error: {error?.message}</p>
        }


     const handleSubmitRegister = event => {
          event.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          createUserWithEmailAndPassword(email, password);
     }


     return (
          <div className='w-50 mx-auto'>
               <h4>This is Register</h4>

               <Form onSubmit={handleSubmitRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control ref={emailRef} type="email" required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Confirm Password</Form.Label>
                         <Form.Control ref={passwordRef} type="password" required placeholder="Password" />
                    </Form.Group>
                     <Form.Group></Form.Group>
                         <br />
                         {errorElement}

                    <Button variant="primary" type="submit"
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
     );
};

export default Register;