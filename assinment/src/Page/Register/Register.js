import React, { useRef } from 'react';
import './Register.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
     const navigate = useNavigate()

     const emailRef = useRef('');
     const passwordRef = useRef('');

     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     if(user) {
         navigate('/home')
        }

        if (error) {
          return (
            <div>
              <p>Error: {error.message}</p>
            </div>
          );
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
                         <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                         <Form.Label>Confirm Password</Form.Label>
                         <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <h5 className='btn btn-link  '>
                         <Link to='/login' className='text-decoration-none'>
                          Go to Login
                         </Link>
                    </h5> <br />

                    <Button variant="primary" type="submit"
                         onClick={() => createUserWithEmailAndPassword()}
                    >
                         Register
                    </Button>
               </Form>

          </div>
     );
};

export default Register;